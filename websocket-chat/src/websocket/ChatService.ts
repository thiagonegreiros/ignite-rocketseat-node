import { io } from "../http";

//? Através do connect conseguimos recuperar o servidor
io.on("connect", socket => {
  //? Quando usamos o IO enviamos para todos
  io.emit("chat_iniciado", {
    message: "Seu chat foi iniciado"
  })
})