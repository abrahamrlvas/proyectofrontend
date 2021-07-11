const express = require('express');
const socketIO = require('socket.io');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const database = require('./settings/databaseConnection');
const authRoute = require('./routes/auth.routes');
const messageRoute = require('./routes/messages.routes');
const Message = require('./models/chatModels');
const Avatar = require('./models/avatarModel');
const randomString = require('randomstring');
const multer = require('multer');
const { use } = require('./routes/auth.routes');

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:8080' || 'http://localhost:8081'],
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true
}));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

app.post('/upload/:userId', multer({ storage }).single('file'), async (req, res) => {
  const {userId} = req.params;
  console.log(userId);
  console.log(req.file.destination);
  console.log(req.file.filename);
  const filePath = `${randomString.generate()}/${req.file.filename}`
  const Avatars = await Avatar.create({ id: randomString.generate(), filePath, userId: userId })
  res.json(Avatars)
})

app.use('/auth', authRoute);
app.use('/api', messageRoute);

const server = app.listen(port, async () => {
  try {
    await database.sync().then(() => {
      console.log('Drop and Resync Db')
    });
    console.log('Server listening in port', port);
    console.log('Database is connected succesfully');
  } catch (error) {
    console.error('Something is wrong', error);
  }
});

const io = socketIO(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  console.log('New connection');
  socket.on('join', data => {
    console.log(data);
  });
  
  // Cambio nuevo
  socket.on('message', ({msg, userId, username}) => {
    Message.create({
      id: randomString.generate(),
      message: msg._value,
      userId,
      createdAt: new Date()
    }).then().catch(e => console.log(e))
    socket.broadcast.emit('message', {msg: msg._value, user: username, createdAt: new Date()})
    socket.emit('message', {msg: msg._value, user: username, createdAt: new Date()})
  })

  socket.emit('userActive', io.engine.clientsCount)

  socket.on('disconnect', (reason) => {
    console.log('User disconnect');
  })
})

