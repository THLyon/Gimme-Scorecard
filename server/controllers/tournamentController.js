const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


//api to access current season
const currentSeasonApi = `https://api.sportsdata.io/golf/v2/json/CurrentSeason`;

//? spun temp api key, proper protocol now in place. 
const apiKey = process.env.API_KEY;
const tournamentController = {}; 

//middleware to access season: 
tournamentController.getSeason = async (req, res, next) => {
    fetch(currentSeasonApi, {
        method: 'GET',
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey,
            'Accept': 'application/json', 
            'Content-type': 'application/json'
        }
}) 
    .then((data) => data.json())
    .then((data) => {
        res.locals.season = data.SeasonID
        seasonId = data.SeasonID; 
        next(); 
    })
    .catch(err => next(createErr({ 
              log: 'getSeason middleware Error',  
              status: 500,
              message: {err: 'error in getSeason middlware'}
       })));
}


//middleware to access tournament:
tournamentController.getTournament =  (req, res, next) => {
  let seasonId = res.locals.season
        fetch(`https://api.sportsdata.io/golf/v2/json/Tournaments/${seasonId}`,{
        method: 'GET',
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey,
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
})
   .then((data) => data.json())
   .then((data) => {
    function isDateInRange(current, start, end) {
        const currentDate = new Date(current);
        const startDate = new Date(start);
        const endDate = new Date(end);
        return currentDate >= startDate && currentDate <= endDate;
      }
      console.log('In tournament controller')
      for (let i = 0; i < data.length; i++) {
        const tournament = data[i];
        if (tournament.StartDate && tournament.EndDate) {
          if (isDateInRange(new Date(), tournament.StartDate, tournament.EndDate)) {
            const tournamentDetails = {
              "Tournament_Name": tournament.Name, 
              "Start_Date": tournament.StartDate, 
              "End_Date": tournament.EndDate, 
              "Venue": tournament.Venue, 
              "Location": tournament.Location, 
              "Par": tournament.Par, 
              "Purse": tournament.Purse, 
              "Start": tournament.StartDateTime
            };
            res.locals.tournament = tournamentDetails;
            break; 
          }
        }
      }
      
      if (!res.locals.tournament) {
        console.log('No tournament today');
      }
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

module.exports = tournamentController;