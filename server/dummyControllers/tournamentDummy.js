// const fs = require('fs/promises'); 
// const path = require('path'); 
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


//api to access current season
const currentSeasonApi = `https://api.sportsdata.io/golf/v2/json/CurrentSeason`;

//api to access tournaments via season 
//const TournamentIdApi = `https://api.sportsdata.io/golf/v2/json/Tournaments/${seasonId}`

//api to access leaderboard of a tournament
//const leaderboardApi = `https://api.sportsdata.io/golf/v2/json/Leaderboard/${tournamentId}`;

//site wide api key (https://sportsdata.io/developers/api-documentation/golf)
const apiKey = '74708e84c6d243bc832af07d61be8d8d';
const tournamentDummy = {}; 
// const courseController = {};

//middleware to access season: 
tournamentDummy.getSeason = async (req, res, next) => {
    fetch(currentSeasonApi, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': `${apiKey}`,
            'Accept': 'application/json', 
            'Content-type': 'application/json'
        }
}) 
    .then((data) => data.json())
    .then((data) => {
        res.locals.season = data.SeasonID
        console.log(data.SeasonID);
        //seasonId = data.SeasonID; 
        next(); 
    })
    .catch(err => next(createErr({ 
              log: 'getSeason middleware Error',  
              status: 500,
              message: {err: 'error in getSeason middlware'}
       })));
}

tournamentDummy.getTournament =  (req, res, next) => {
    let seasonId = res.locals.season
          fetch(`https://api.sportsdata.io/golf/v2/json/Tournaments/${seasonId}`,{
          method: 'GET',
          headers: {
              'Ocp-Apim-Subscription-Key':  `${apiKey}`,
              'Accept': 'application/json',
              'Content-type': 'application/json'
          }
  })
     .then((data) => data.json())
     .then((data) => {
      for(let i = 0; i < data.length; i++){
          if(data[i].hasOwnProperty('StartDate') || data[i].hasOwnProperty('EndDate')){
              if(data[i].StartDate === currentDate(Date(), 0) || data[i].StartDate === currentDate(Date(), 1) || data[i].StartDate === currentDate(Date(), 2) || data[i].StartDate === currentDate(Date(), 3) || data[i].StartDate === currentDate(Date(), 4) || data[i].EndDate === currentDate(Date(), 0) || data[i].EndDate === currentDate(Date(), 1) || data[i].EndDate === currentDate(Date(), 2) || data[i].EndDate === currentDate(Date(), 3) || data[i].EndDate === currentDate(Date(), 4)){
                  res.locals.tournament = data[i].TournamentID;
                  console.log(res.locals.tournament)
          } else {
          // else if (data[i].StartDate !== currentDate(Date(), 0) && data[i].StartDate !== currentDate(Date(), 1) && data[i].StartDate !== currentDate(Date(), 2) && data[i].StartDate !== currentDate(Date(), 3) && data[i].StartDate !== currentDate(Date(), 4) && data[i].EndDate !== currentDate(Date(), 0) && data[i].EndDate !== currentDate(Date(), 1) && data[i].EndDate !== currentDate(Date(), 2) && data[i].EndDate !== currentDate(Date(), 3) && data[i].EndDate !== currentDate(Date(), 4)){
          //     return 'no tournament today';
          // }
              return 'no tournament today';
  
          }
  
       }
      }
      next()
     })
     .catch(err => createErr({
            log: 'getTournament middleware Error', 
            status: 400,
            message: {err: 'error in getTournament middlware'}
     }));
  }


//middleware to access tournament:
tournamentDummy.getTournament =  (req, res, next) => {
    console.log('Entered the tournament middleware')
  let seasonId = res.locals.season
        fetch(`https://api.sportsdata.io/golf/v2/json/Leaderboard/104`,{
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key':  `${apiKey}`,
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    })
   .then((data) => data.json()) 
   .then((data) => { 
        const tournamentDetails = {
            "Tournament_Name": data.Tournament.Name, 
            "Start_Date": data.Tournament.StartDate, 
            "End_Date": data.Tournament.EndDate, 
            "Venue": data.Tournament.Venue, 
            "Location": data.Tournament.Location, 
            "Par": data.Tournament.Par, 
            "Purse": data.Tournament.Purse, 
            "Start": data.Tournament.StartDateTime
        };
        res.locals.tournamentDummy = tournamentDetails;
        console.log(res.locals.tournamentDummy);
        return next()
   })
   .catch(err => createErr({
          log: 'getTournament middleware Error', 
          status: 400,
          message: {err: 'error in getTournament middlware'}
   }));
}

//! controller error handler
const createErr = (errInfo) => {
    const { log, status, message } = errInfo; 
    return {
        log: `${log, status}`, 
        message: { err: `${message}`}
    }
}

module.exports = tournamentDummy;