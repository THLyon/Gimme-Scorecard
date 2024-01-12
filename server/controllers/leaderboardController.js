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

function currentDate(date, num = 0) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() + num) ,
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return ([year, month, day].join('-')+ 'T00:00:00');
};

const leaderboardController = {}; 
// const courseController = {};

//middleware to access season: 
leaderboardController.getSeason = async (req, res, next) => {
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


//middleware to access tournament:
leaderboardController.getTournament =  (req, res, next) => {
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

//if issue add async to function
    //await to fetch
    //async to fetch at frontend

//middleware to access leaderboard
leaderboardController.getLeaderboard =  (req, res, next) => {
    let tournamentId = res.locals.tournament;
    console.log('leaderboard')
    // fetch(`https://api.sportsdata.io/golf/v2/json/Leaderboard/${tournamentId}`,{
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
        const leaders = []; 
        // for(let i = 0; i < data.Tournament.Players.length; i++){
        //     if(i <= 10){
        //         leaders.push(data.Tournament.Players[i])
        //     }
        //  }
         let i = 0; 
        //  let name = nameFunc(data.Players[i].Name)
         while(i < 10){
           
        //    function nameFunc(player){
        //         for(let j = 0; j < player.length; j++){
        //             if(j === ' ') return `${player[j] + '.' + ' ' + player[j+1]}`
        //         }
        //     };
            leaders.push({'Position': i, 'Name': data.Players[i].Name, 'Rank': data.Players[i].Rank, 'TotalScore': Math.ceil((data.Players[i].TotalScore + 288)/4)})
            i++ 
         }
         console.log(leaders)
         console.log(leaders.length)
         res.locals.leaders = leaders;
         return next();
    })
    .catch(err => createErr({
              log: 'getLeaderboard middleware Error', 
              status: 400,
              message: {err: 'error in getLeaderboard middlware'},
              err: err,
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

module.exports = leaderboardController;