const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');

// Charger les variables d'environnement avant tout
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // pour lire req.body

// Routes
const categorieRouter = require("./routes/categorie.route");
app.use('/api/categories', categorieRouter);

// Test simple pour vérifier que le serveur fonctionne
app.get("/", (req, res) => {
    res.send("bonjour");
});

// Connexion à la base de données
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DataBase Successfully Connected ✅"))
.catch(err => {
    console.log("Unable to connect to database ❌", err);
    process.exit();
});

// Définir le port et démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;