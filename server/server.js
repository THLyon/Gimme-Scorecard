const express = require('express'); 
const app = express(); 
const PORT = 3434; 
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.json());

app.use(express.static('./src'));

const apiRouter = require('./routes/api'); 
const playerRouter = require('.routes/player'); 
const tournamentRouter = require('./routes/tournament'); 


//* <----- route handlers -----> //
app.use('/api', apiRouter, (req,res) => {
    return res.status(200).json(res.locals);
});

app.get('/tournaments', apiRouter, (req,res) => {
  return res.status(200).json(res.locals)
})

app.use('/api/details', apiRouter, (req, res) => {
    return res.status(200).json(res.locals.details);
})

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../extension/popup.html'));
});

//! <----- ERROR HANDLERS -----> //

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


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
});