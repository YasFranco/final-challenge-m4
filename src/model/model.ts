import { getData } from "../database/database";
import { Messages } from "../utils/messages";

class DisneyModel {

    async  getAllCharacters () {
        const character = await getData("character")
        const characters = character.data
        return characters
    }

    async getCharactersById (id:number) {
        const character = await getData("character")
        const characters = character.data

        const foundCharacter = characters.find((c:any) => c._id === id)
        if(!foundCharacter){
            return { data: null, message: Messages.NOT_FOUND}
        }else {
             return foundCharacter
        }
    }

    async getCharacterByName ( name: string){
        const character = await getData("character")
        const characters = character.data

        const nameLowerCase = name.toLowerCase();
        const searchByName = characters.filter((c:any) => c.name.toLowerCase().includes(nameLowerCase))

        if(!searchByName){
            return { data: null, message: Messages.NOT_FOUND};
        }else {
             return searchByName;
        }
    }
    

}

const characters = new DisneyModel();

const { getAllCharacters, getCharacterByName, getCharactersById } = characters;

export { getAllCharacters, getCharactersById, getCharacterByName }