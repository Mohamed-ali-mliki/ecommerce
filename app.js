const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // مهم يكون قبل استعمال process.env

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DataBase Successfully Connected ✅"))
.catch(err => {
    console.log("Unable to connect to database ❌", err);
    process.exit();
});

app.get("/", (req, res) => {
    res.send("bonjour");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;