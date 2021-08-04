import express from "express";
import path from "path";

//? É necessário, pois o Socket.io precisa de um servidor http para usar
import { createServer } from "http";
import { Server } from "socket.io";

import mongoose from "mongoose";

const app = express();
const server = createServer(app);

mongoose.connect("mongodb://localhost/rocketsocket", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.static(path.join(__dirname, "..", "public")));

const io = new Server(server);

//? o IO servirá como uma comunicação global
io.on("connection", (socket) => {
  console.log("Socket: ", socket.id);
})

export { server, io }