const express = require('express');
const { connectDB } = require("./config/database");
const dotenv = require('dotenv');


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
connectDB(); 

app.get("/test", async (req, res) => {
  try {
    const result = await Sequelize.query("SELECT NOW()");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;