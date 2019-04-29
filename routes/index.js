const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const name = req.cookies.username;
   if (name) {
     res.render('index', {name}); // because key and value are name you can just write name instead of name:name
    } else {
       res.redirect('/hello');
     }
});


router.get('/hello', (req, res) => {
  //  res.render('hello');
  const name = req.cookies.username;
  if(name) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
});

router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  //  console.log(req.body); or  //    res.json(req.body);
  // res.render('hello',{name: req.body.username});
    res.redirect('/');
});

router.post('/goodbye', (req, res) => {
  res.cookie('username', {name: req.cookies.username});
  res.clearCookie('username');
  res.redirect('/hello');
});


module.exports = router;
