import net from "net";
import { PORT } from "./constants";

const client = net.createConnection({port: PORT});

client.on("connect", () => {
    const clientMsg = { path: "characters"};
    // const clientMsg = { path: "characters/id", id: 35};
    // const clientMsg = { path: "characters/name", name: ""};
    

    const response = JSON.stringify(clientMsg);
    client.write(response);
});

client.on("data", (serverMsg:string) => {
    const message = serverMsg.toString();
    const parsedMsg = JSON.parse(message);
    console.log(parsedMsg)
});