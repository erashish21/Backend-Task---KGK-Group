const express = require('express');
const { connectDB } = require("./config/database");
const dotenv = require('dotenv');
const jwtMiddleware = require('./middleware/auth');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/users');
const itemRoutes = require('./routes/items');
const bidRoutes = require('./routes/bids');
const notificationRoutes = require('./routes/notifications');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
connectDB(); 

app.use(cors());
app.use(bodyParser.json());
app.use('/users/profile', jwtMiddleware, (req, res) => {
    res.json({ profile: req.user });
})
app.use('/users', userRoutes);
app.use('/items', itemRoutes);
app.use('/bids', bidRoutes);
app.use('/notifications', notificationRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;