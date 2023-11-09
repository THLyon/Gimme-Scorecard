
const express = require('express')
const tournamentController = require('../controllers/tournamentController');
//const leaderboardController = require('../controllers/leaderboardController');
// import leaderboardController from '../controllers/leaderboardController.js';
// const leaderboardController = require('../controllers/leaderboardController.js')
const courseController = require('../controllers/courseController');
const favoritesController = require('../controllers/favoritesController');
const dbController = require('../controllers/dbController');
const router = express.Router(); 


//! API CONTROLLER ROUTES
// router.get('/gimme', tournamentController.getSeason, tournamentController.getTournament, tournamentController.getLeaderboard, (req, res) => {
//     res.status(200).send(res.locals.leaders);  //.tournamentData
// });

// // router.get('/details', courseController.getSeason, courseController.getTournament, courseController.getCourse, (req, res) => {
// router.get('/details', courseController.getCourse, (req, res) => {
//     return res.status(200).send(res.locals.details); 
// })

// router.get('/season', tournamentController.getSeason, (req, res) => {
//     return res.status(200).json(res.locals.season);
// })

router.get('/test', tournamentController.getLeaderboard, (req, res) => {
    return res.status(200).json(res.locals.leaders)
})



//! USER ROUTES

router.get('/favorites', favoritesController.getSeason, favoritesController.getTournament, favoritesController.getFavorites, (req, res) => {
    res.status(200).send(res.locals.favorites);
})


//! DB ROUTES
router.post('/addUser', dbController.addUser, (req, res) => {
    return res.status(200).json(res.locals.newUser); 
})

router.get('/:name', dbController.findUser, (req, res) => {
    return res.status(200).send(res.locals.foundUser);
})

router.delete('/:name', dbController.deleteUser, (req, res) => {
    return res.status(200).json(res.locals.deleteUser)
})

module.exports = router; 