const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
const socket = require("socket.io");
const http = require("http");

dotenv.config();
connectDb();

const app = express();
const server = http.createServer(app); 

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/api/v1/user", authRoutes);
app.use("/api/v1/messages", messageRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running at ${PORT}`));

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUser = onlineUsers.get(data.to);
    if (sendUser) {
      socket.to(sendUser).emit("msg-recieve", data.msg);
    }
  });
});
