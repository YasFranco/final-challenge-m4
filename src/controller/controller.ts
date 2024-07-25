import { getAllCharacters, getCharacterByName, getCharactersById } from "../model/model";

class DisneyController {
    async getAllCharacters() {
        return await getAllCharacters()
    }

    async getCharacterByName(name: string) {
        return await getCharacterByName(name);
    }

    async getCharactersById(id: number) {
        return await getCharactersById(id);
    }
}

const characterController = new DisneyController();

const { 
    getAllCharacters: allCharacters,
    getCharacterByName: allNames,
    getCharactersById: charactersId
} = characterController

export { allCharacters, allNames, charactersId }