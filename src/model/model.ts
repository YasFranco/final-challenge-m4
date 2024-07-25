import { getData } from "../database/database";
import { Messages } from "../utils/messages";
import fs from "fs";
import path from "path";

const fileText = path.resolve(__dirname, "../database/history.json");

const saveInfo = async (usedMethod:string, data:any) => {
    try {
        let history = [];

        if(fs.existsSync(fileText)){
            const content = fs.readFileSync(fileText, "utf-8");
            history = JSON.parse(content);
        }

        history.push({method:usedMethod, data});
        fs.writeFileSync(fileText, JSON.stringify(history));

    } catch (error) {
        console.log("Failure to save history", error)
    }
}

class DisneyModel {

    async getAllCharacters() {
        const character = await getData("character")
        const characters = character.data
        await saveInfo("All the characters:", characters);

        return characters
    }

    async getCharactersById(id: number) {
        const character = await getData("character")
        const characters = character.data

        const foundCharacter = characters.find((c: any) => c._id === id)
        if (!foundCharacter) {
            return { data: null, message: Messages.NOT_FOUND }
        } else {
            await saveInfo(`Character by ID: ${id} `, foundCharacter)
            return foundCharacter
        }
    }

    async getCharacterByName(name: string) {
        const character = await getData("character")
        const characters = character.data

        const nameLowerCase = name.toLowerCase();
        const searchByName = characters.filter((c: any) => c.name.toLowerCase().includes(nameLowerCase))

        if (!searchByName) {
            return { data: null, message: Messages.NOT_FOUND };
        } else {
            await saveInfo(`Character by name: ${name} `, searchByName)
            return searchByName;
        }
    }


}

const characters = new DisneyModel();

const { getAllCharacters, getCharacterByName, getCharactersById } = characters;

export { getAllCharacters, getCharactersById, getCharacterByName }