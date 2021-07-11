const express = require('express');
const socketIO = require('socket.io');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const database = require('./settings/databaseConnection');
const authRoute = require('./routes/auth.routes');
const messageRoute = require('./routes/messages.routes');
const Message = require('./models/chatModels');
const randomString = require('randomstring');

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:8080' || 'http://localhost:8081'],
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true
}));

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
  socket.on('message', ({msg, userId, username, avatar}) => {
    Message.create({
      id: randomString.generate(),
      message: msg._value,
      userId,
      createdAt: new Date()
    }).then().catch(e => console.log(e))
    socket.broadcast.emit('message', {msg: msg._value, user: username, createdAt: new Date(), avatar})
    socket.emit('message', {msg: msg._value, user: username, createdAt: new Date(), avatar})
  })

  socket.emit('userActive', io.engine.clientsCount)

  socket.on('disconnect', (reason) => {
    console.log('User disconnect');
  })
})

