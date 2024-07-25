import { getAllCharacters, getCharacterByName, getCharactersById } from "../model/model";

class DisneyController {
    async getAllCharacters() {
        return await getAllCharacters()
    }

    async getCharacterByName() {
        return await getCharacterByName("");
    }

    async getCharactersById() {
        return await getCharactersById(1);
    }
}

const characterController = new DisneyController();

const { 
    getAllCharacters: allCharacters,
    getCharacterByName: allNames,
    getCharactersById: charactersId
} = characterController

export { allCharacters, allNames, charactersId }