const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.productsPath = '/api/products';

        //Database connection
        this.connectDB();

        //Middlewares
        this.middlewares();

        //Aplication routes
        this.routes();

    }

    async connectDB(){
        await dbConnection();
    }

    middlewares(){
        // CORS
        this.app.use( cors() );

        // Read and parse body
        this.app.use( express.json() );

        // Public directory
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.productsPath, require('../routes/products'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server running in port: ', this.port );
        });
    }
}

module.exports = Server;