const express = require('express'); 
const app = express(); 
const PORT = 3000; 
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.json());

// const api = 'https://api.sportsdata.io/golf/v2/json/Leaderboard/{tournamentid}'; 
// const apiKey = '74708e84c6d243bc832af07d61be8d8d'; 

//require routers
const apiRouter = require('./routes/api'); 
// const playerRouter = require('.routes/player'); 
// const tournamentRouter = require('./routes/tournament'); 


// app.use('/build' , express.static(path.join(__dirname, '../build')));

app.use(express.static('./src'));

//route handlers
app.use('/api', apiRouter, (req,res) => {
    return res.status(200).json(res.locals);
});

// app.use('/api/details', apiRouter, (req, res) => {
//     return res.status(200).json(res.locals.details);
// })

app.get('/', (req, res) => {
   // return res.status(200).sendFile(path.join(__dirname, './build/index.html'));
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});




// <----- ERROR HANDLERS -----> //

//local error handler

app.use((req, res) => res.sendStatus(404));


//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught error',
    status: 400, 
    message: {err: 'An error has occured'}
  };
  const errObj = Object.assign({}, defaultErr, err); 
  res.status(errObj.status).json(errObj.message); 
});


//Port listener 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
});