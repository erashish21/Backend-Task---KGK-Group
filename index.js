const express = require('express');
const { connectDB } = require("./config/database");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
connectDB(); 

app.use(bodyParser.json());


app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;