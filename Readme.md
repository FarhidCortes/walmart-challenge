# Walmart Challenge - Products API
#### Installation guide

To use the platform it is necessary to run the images described
in each Dockerfile of the folders that contain the project.
##### Run the backend

Enter the folder /challenge_walmart_backend
and run the following commands:

     docker build -t walmart-backend .
     docker run -d -p 4000:4000 walmart-backend

##### Note

> In case of error in windows, when executing the docker build.
> Run:

     export DOCKER_BUILDKIT=0
     export COMPOSE_DOCKER_CLI_BUILD=0

##### Run the frontend

Enter the folder /challenge_walmart_backend
and run the following commands:

     docker build -t walmart-frontend .
     docker run -d -p 3000:3000 walmart-frontend

###### Note:

Each Project are executed in ports 3000 and 4000, which are mapped to the same in the containers, change in case if necessary.

##### Opening the application

To run the application, you need to enter the site at http://localhost:3000/ (or the url with the selected port if you change it).

###### Developed by Farhid Cortés Zambra

----
#### Guía de instalación

Para utilizar la plataforma es necesario levantar las imágenes descritas
en cada Dockerfile de las carpetas que contienen el proyecto.

##### Levantando el backend

Entrar a la carpeta /desafio_walmart_backend
y ejecutar los siguientes comandos:

    docker build -t walmart-backend .
    docker run -d -p 4000:4000 walmart-backend

##### Nota  

> En caso de error en windows, al ejecutar el docker build.
> Ejecutar:

    export DOCKER_BUILDKIT=0
    export COMPOSE_DOCKER_CLI_BUILD=0

##### Levantando el frontend

Entrar a la carpeta /desafio_walmart_backend
y ejecutar el los siguientes comandos:

    docker build -t walmart-frontend .
    docker run -d -p 3000:3000 walmart-frontend

###### Nota:

Dentro de los proyectos estos se ejecutan en los puertos 3000 y 4000,
los cuales están mapeados a los mismos en los contenedores, cambiar estos últimos en caso
de ser necesario.

##### Entrando a la aplicación

Para ejecutar la aplicación, solo es necesario entrar mediante el
navegador al sitio a http://localhost:3000/ (o al url con el puerto seleccionado en caso de cambiarlo).

###### Desarrollado por Farhid Cortés Zambra 