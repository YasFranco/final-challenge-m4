import { getData } from "../database/database";

class Character {

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
            console.log("Personaje no encontrado")
        }else {
             console.log(foundCharacter)
        }
    }

    async getCharacterByName ( name: string){
        const character = await getData("character")
        const characters = character.data

        const nameLowerCase = name.toLowerCase();
        const searchByName = characters.filter((c:any) => c.name.toLowerCase().includes(nameLowerCase))

        if(!searchByName){
            console.log("Personaje no encontrado")
        }else {
             console.log(searchByName)
        }
    }
    

}

const characters = new Character()