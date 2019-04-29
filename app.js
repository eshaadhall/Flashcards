const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/static',express.static('public'));
app.set('view engine', 'pug');
// Modular Routes
const MainRouter = require('./routes');
const themeRoutes = require('./routes/themes');
const cardRoutes = require('./routes/cards');
app.use(MainRouter);
app.use('/themes', themeRoutes);
app.use('/cards', cardRoutes);

//Middleware
app.use((req,res,next)=> {
   req.message="hello world";
   // const err = new Error("oh no");
   // err.status=500;
   // next(err);
   next();
});
app.use((req,res,next)=> {
   console.log(req.message);
   next();
});



// Middleware to handle 404 Error
app.use((err, req, res, next)=> {
   const errs = new Error('Not found');
   errs.status = 404;
   next(errs);
});
//Error Handler
app.use((err,req,res,next)=>{
  res.locals.error = err;
  res.status(err.status);
  res.render('errors');
});
// setup the server
app.listen(3000, () => {console.log('app is running on 3000 port')});
