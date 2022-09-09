# Backend Seleccion Shippify

## Descripción

**Shippify Backend** es una API REST que permitirá la comunicación entre el cliente y la base de datos MySQL, facilita la interación y obtención de los datos mediante peticiones con el protocolo HTTP.

## Uso

* Abrir un terminal de comandos en el directorio del proyecto.
* Usar el comando `npm install` para descargar todas las dependencias.
* Configurar el archivo `./config/config.json` con las credenciales para development y production en caso de ser necesario.
* Usar el comando `npm run devstart` para correr el proyecto.

## Rutas

La mayoría de los parámetros solicitados en ciertos métodos HTTP deben ser enviados mediante el body del requerimiento en formato JSON.

### Vehiculos

La ruta tiene como base `/vehicles`.

|Método|Ruta|Función|Parámetros|
|------|----|-------|----------|
|`get`|/:driver|Retorna los vehiculos con el id del conductor asociado|None|
|`post`|/|Añade un nuevo vehiculo a la base de datos|`driver` `plate` `model` `type` `capacity`|
|`put`|/|Edita los parametros del vehiculo con el id dado|`id` `driver` `plate` `model` `type` `capacity`|
|`delete`|/|Elimina un vehiculo con el id dado|`id`|


### Conductores

La ruta tiene como base `/drivers`.

|Método|Ruta|Función|Parámetros|
|------|----|-------|----------|
|`get`|/|Retorna todos los conductores|None|