import net from "net";
import { PORT } from "./constants";

const server = net.createServer();

server.on("connection", (socket) => {
    socket.on("data", async (message) => {
        const response = await message;
        socket.write(response)
    })
});

server.listen(PORT, () => console.log("Server listening on port:" + PORT));