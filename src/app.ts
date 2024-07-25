import { allCharacters, allNames, charactersId } from "./controller/controller";
import { Messages } from "./utils/messages";

export async function endpoint (message) {
    const clientMessage = message.toString();
    const parsedMsg = JSON.parse(clientMessage);

    if(parsedMsg.path == "characters") {
        const data = await allCharacters();
        const dataParsed = JSON.stringify(data);
        return dataParsed
    } else if(parsedMsg.path == "characters/id") {
        const data = await charactersId(parsedMsg.id);
        const dataParsed = JSON.stringify(data);
        return dataParsed
    } else if(parsedMsg.path == "characters/name") {
        const data = await allNames(parsedMsg.name);
        const dataParsed = JSON.stringify(data);
        return dataParsed
    } else {
        const badMessage = JSON.stringify(Messages.BAD_REQUEST);
        return badMessage;
    }
}