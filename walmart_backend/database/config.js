const mongoose = require('mongoose');
//Set up and connect database
const dbConnection = () => {
    try {
        mongoose.connect(process.env.MONGODB_CNN, {
            useUnifiedTopology: true
        });
        console.log('Database online');
    } catch (error) {
        console.log(error);
        throw new Error('Error starting database');
    }
}

module.exports = {
    dbConnection
}