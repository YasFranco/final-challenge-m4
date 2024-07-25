# ENTREGA FINAL MODULO IV

Este trabajo consiste en desarrollar una aplicación que proporciona información al consumir datos de un API. En este caso, la API es sobre personajes de Disney y permite a los usuarios acceder a detaller específicos sobre estos personajes, como sus peliculas, series de televisión, juegos, atracciones de parques y más. La aplicación deberá manejar solicitudes para obtener información ya sea por nombre o por ID. 

## EJECUCIÓN 

Para poder obtener la información deseada primero se debe levantar tanto el servidor como el cliente en la terminal:


|   COMANDO             |    ACCIÓN      |
| ----------------------|:--------------:|
|    npm run dev        |levanta servidor|
|ts-node ./src/client.ts|levanta client  |


Una vez que esten ambos conectados, se puede ejecutar a traves del cliente las siguientes peticiones, para ello tiene que ir descomentando la deseada.

```
client.on("connect", () => {
    // const clientMsg = { path: "characters"};  // PARA MOSTRAR TODOS LOS PERSONAJES 
    // const clientMsg = { path: "characters/id", id: 351};  // PARA BUSCAR PERSONAJE POR ID
    const clientMsg = { path: "characters/name", name: "angela"};  // PARA BUSCAR PERSONAJE POR SU NOMBRE 
    

    const response = JSON.stringify(clientMsg);
    client.write(response);
});

```



### INFORMACION ADICIONAL 
API utilizada: https://api.disneyapi.dev/