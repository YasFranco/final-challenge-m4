import net from "net";
import { PORT } from "./constants";
import { endpoint } from "./app";

const server = net.createServer();

server.on("connection", (socket) => {
    socket.on("data", async (message) => {
        const response = await endpoint(message);
        socket.write(response)
    })
});

server.listen(PORT, () => console.log("Server listening on port:" + PORT));