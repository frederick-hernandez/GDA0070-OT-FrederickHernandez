const express = require('express');
const cors = require("cors");
const sequelize = require('./config/db.config.js');
const estadosRoutes = require('./routes/estados.routes.js');

const app = express();


app.use(express.json());
app.use(cors()); // Habilita CORS

app.get('/', async (req, res) => {
    try{
        await sequelize.authenticate();
        res.send('Database connection has been established successfully.');
        sequelize.close();
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

app.use('/estados',estadosRoutes);

module.exports = app;