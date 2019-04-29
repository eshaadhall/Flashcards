const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { title } = data;  //const cards = data.cards;

router.get('/', (req, res)=> {
   res.render('theme',title);
});
module.exports=router;
