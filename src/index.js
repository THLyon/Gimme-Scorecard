document.addEventListener('DOMContentLoaded', () => {
    getScoreCard();
   
    const leaderboardList = document.querySelector('#leaderboard-list');

    const makeListItem = (id, pos, name, rank, totalScore) => {
       const player = document.createElement('li'); 
        player.setAttribute(`${id}`)
        player.setAttribute('Pos',`${pos}`)
        player.setAttribute(`${name}`)
        player.setAttribute('Rank:', `${rank}`)
        player.setAttribute('Total Score', `${totalScore}`)
        const row = document.querySelector('row')
        row.appendChild(player);
        leaderboardList.appendChild(row);
    }

    async function getScoreCard(){
            const res = fetch('/api/test')
            .then(res => res.json());
            console.log('test');
            const scorecardArray = res;
            console.log("1", scorecardArray)  
            
            for(let i = 0; i < scorecardArray.length; i++){
                let {i, Position, Name, Rank, TotalScore} = scorecardArray[i]; 
                makeListItem(i, Position, Name, Rank,TotalScore)
            }
    }
    
})
