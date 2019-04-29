const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;  //const cards = data.cards;

// router.get('/:id', (req, res) => {
//     res.render('card',{
//       prompt: cards[req.params.id].question,
//       hint: cards[req.params.id].hint
//     });
// });

router.get('/', (req,res)=>{
   const numberOfCards = cards.length;
   const flashcardId = Math.floor(Math.random()*Math.floor(numberOfCards));
   res.redirect(`/cards/${flashcardId}?side=question`);
});

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;
    if( !(side==='question'||side==='answer') ){
      return res.redirect(`/cards/${id}?side=question`);
    }
    const text = cards[id][side];
    const { hint } = cards[id];
    const name = req.cookies.username;
  //  const templateData = { text, hint };
    const templateData = { text, id, name, side };
    if(side==='question'){
      templateData.hint = hint;
      templateData.sideToShow = 'answer';
      templateData.sideToShowDisplay = 'Answer';
    } else if(side==='answer'){
      templateData.sideToShow = 'question';
      templateData.sideToShowDisplay = 'Question';
    }
    res.render('card',templateData);
});

module.exports=router;
