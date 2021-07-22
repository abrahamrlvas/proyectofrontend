const express = require("express");
const socketIO = require("socket.io");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const database = require("./settings/databaseConnection");
const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
const messageRoute = require("./routes/messages.routes");
const Message = require("./models/chatModels");
const conversation = require("./controllers/conversationController");
const randomString = require("randomstring");

//Configuración
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

//Middlewares
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:8080" || "http://localhost:8081"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

//Rutas
app.use("/auth", authRoute);
app.use("/api", messageRoute);
app.use("/api", userRoute);

//Conexion con servidor
const server = app.listen(port, async () => {
  try {
    await database.sync().then(() => {
      console.log("Drop and Resync Db");
    });
    console.log("Server listening in port", port);
    console.log("Database is connected succesfully");
  } catch (error) {
    console.error("Something is wrong", error);
  }
});

const io = socketIO(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

const users = [];

io.on("connection", (socket) => {
  console.log("New connection", socket.id);
  // socket.on("join", (room) => {
  // console.log(room);
  // socket.join(room)

  socket.on("userActive", function ({ avatar, username }) {
    users[username] = socket.id;
    io.emit("userActive", { avatar, username });
  });

  socket.on("message", ({ msg, userId, username, avatar, to }) => {
    console.log(userId, "userID on message");
    console.log(username, "username on message");
    console.log(to, "user emit");
    var socketId = users[to];
    conversation.createConversation(randomString.generate(), to, username);
    Message.create({
      id: randomString.generate(),
      message: msg._value,
      userId,
      receiver: to,
      sender: username,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then()
      .catch((e) => console.log(e));
    io.to(socketId).emit("message", {
      msg: msg._value,
      user: username,
      avatar,
      createdAt: new Date(),
    });

    socket.on("radio", function (blob) {
      socket.broadcast.to(room).emit("voice", blob);
    });
    
    // Message.create({
    //   id: randomString.generate(),
    //   message: msg._value,
    //   userId,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // })
    //   .then()
    //   .catch((e) => console.log(e));
    // socket.broadcast.emit("message", {
    //   msg: msg._value,
    //   user: username,
    //   avatar,
    //   createdAt: new Date(),
    // });
    // socket.emit("message", {
    //   msg: msg._value,
    //   user: username,
    //   avatar,
    //   createdAt: new Date(),
    // });
  });

  socket.emit("userCount", io.engine.clientsCount);
  // });

  socket.on("disconnect", (reason) => {
    console.log("User disconnect");
  });
});

app.use(express.static(path.join(__dirname, "../public/dist/spa")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/dist/spa/index.html"));
});
