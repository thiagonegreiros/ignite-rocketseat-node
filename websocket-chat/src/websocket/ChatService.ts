import { container } from "tsyringe";
import { io } from "../http";
import { CreateUserService } from "../services/CreateUserService";

//? Através do connect conseguimos recuperar o servidor
io.on("connect", socket => {
  socket.on("start", async data => {
    const { email, avatar, name } = data;
    const createUserService = container.resolve(CreateUserService);

    await createUserService.execute({
      email,
      avatar,
      name,
      socket_id: socket.id,
    })
  })
})