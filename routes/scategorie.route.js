const express = require('express');
const router = express.Router();
const SCategorie = require("../models/scategorie");

// Liste des sous-catégories avec populate
router.get('/', async (req, res) => {
    try {
        const scat = await SCategorie.find({}, null, { sort: { '_id': -1 } }).populate("categorieID");
        res.status(200).json(scat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Créer une nouvelle sous-catégorie
router.post('/', async (req, res) => {
    const { nomscategorie, imagescat, categorieID } = req.body;
    const newSCategorie = new SCategorie({ nomscategorie, imagescat, categorieID });
    try {
        await newSCategorie.save();
        res.status(200).json(newSCategorie);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Chercher une sous-catégorie
router.get('/:scategorieId', async (req, res) => {
    try {
        const scat = await SCategorie.findById(req.params.scategorieId);
        res.status(200).json(scat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Modifier une sous-catégorie
router.put('/:scategorieId', async (req, res) => {
    try {
        const scat1 = await SCategorie.findByIdAndUpdate(
            req.params.scategorieId,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(scat1);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Supprimer une sous-catégorie
router.delete('/:scategorieId', async (req, res) => {
    const id = req.params.scategorieId;
    await SCategorie.findByIdAndDelete(id);
    res.json({ message: "sous categorie deleted successfully." });
});

// Chercher sous-catégorie par catégorie
router.get('/cat/:categorieID', async (req, res) => {
    try {
        const scat = await SCategorie.find({ categorieID: req.params.categorieID }).exec();
        res.status(200).json(scat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;