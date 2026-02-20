const express = require('express');
const router = express.Router();
const Article = require("../models/article");
const Scategorie = require("../models/scategorie");

// Liste des articles avec populate
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find({}, null, { sort: { '_id': -1 } }).populate("scategorieID").exec();
        res.status(200).json(articles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Créer un article
router.post('/', async (req, res) => {
    const nouvarticle = new Article(req.body);
    try {
        await nouvarticle.save();
        const article = await Article.findById(nouvarticle._id).populate("scategorieID").exec();
        res.status(200).json(article);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Liste des articles avec pagination
router.get('/pagination', async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    const offset = (page - 1) * limit;
    try {
        const articlesTot = await Article.countDocuments();
        const articles = await Article.find({}, null, { sort: { '_id': -1 } })
            .skip(offset)
            .limit(limit);
        res.status(200).json({ articles, tot: articlesTot });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Chercher un article par ID
router.get('/:articleId', async (req, res) => {
    try {
        const art = await Article.findById(req.params.articleId);
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Modifier un article
router.put('/:articleId', async (req, res) => {
    try {
        const art = await Article.findByIdAndUpdate(req.params.articleId, { $set: req.body }, { new: true });
        const article = await Article.findById(art._id).populate("scategorieID").exec();
        res.status(200).json(article);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Supprimer un article
router.delete('/:articleId', async (req, res) => {
    try {
        await Article.findByIdAndDelete(req.params.articleId);
        res.status(200).json({ message: "article deleted successfully." });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Chercher articles par sous-catégorie
router.get('/scat/:scategorieID', async (req, res) => {
    try {
        const art = await Article.find({ scategorieID: req.params.scategorieID }).exec();
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Chercher articles par catégorie
router.get('/cat/:categorieID', async (req, res) => {
    try {
        const sousCategories = await Scategorie.find({ categorieID: req.params.categorieID }).exec();
        const sousCategorieIDs = sousCategories.map(sc => sc._id);
        const articles = await Article.find({ scategorieID: { $in: sousCategorieIDs } }).exec();
        res.status(200).json(articles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;