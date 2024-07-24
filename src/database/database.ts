import { URL_API } from "../constants";


async function getData(ruta: string){
    const response = await fetch(URL_API + ruta);
    const data = await response.json();
    // console.log(data)

    return data;
}

export {getData}