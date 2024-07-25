import { getAllCharacters, getCharacterByName, getCharactersById } from "../model/model";
import { Messages } from "../utils/messages";


class DisneyController {
    async getAllCharacters() {
        const dataC =  await getAllCharacters()
        return { data: dataC, message: Messages.OK};
    }

    async getCharacterByName(name: string) {

        if(typeof name !== "string"){
            return { data: null, message: Messages.BAD_REQUEST};
        }

        const dataC = await getCharacterByName(name);
        
        return { data: dataC, message: Messages.OK};
    }

    async getCharactersById(id: number) {
        if(typeof id !== "number"){
            return { data: null, message: Messages.BAD_REQUEST};
        }

        const dataC = await getCharactersById(id);
        return { data: dataC, message: Messages.OK}; 
    }
}

const characterController = new DisneyController();

const { 
    getAllCharacters: allCharacters,
    getCharacterByName: allNames,
    getCharactersById: charactersId
} = characterController

export { allCharacters, allNames, charactersId }