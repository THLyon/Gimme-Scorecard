// document.addEventListener('DOMContentLoaded', () => {
//     getScoreCard();
   
//     const leaderboardList = document.querySelector('#leaderboard-list');

//     const makeListItem = (id, pos, name, rank, totalScore) => {
//        const player = document.createElement('li'); 
//         player.setAttribute(`${id}`)
//         player.setAttribute('Pos',`${pos}`)
//         player.setAttribute(`${name}`)
//         player.setAttribute('Rank:', `${rank}`)
//         player.setAttribute('Total Score', `${totalScore}`)
//         const row = document.querySelector('#row')
//         row.appendChild(player);
//         leaderboardList.appendChild(row);
//     }

//     async function getScoreCard(){
//             const res = fetch('/api/test')
//             .then(res => res.json());
//             console.log('test');
//             const scorecardArray = res;
//             console.log("1", scorecardArray)  
            
//             for(let i = 0; i < scorecardArray.length; i++){
//                 let {i, Position, Name, Rank, TotalScore} = scorecardArray[i]; 
//                 makeListItem(i, Position, Name, Rank,TotalScore)
//             }
//     }
    
// })

// document.addEventListener('DOMContentLoaded', () => {
//     getScoreCard();

//     const leaderboardList = document.querySelector('#leaderboard-list');

//     const makeListItem = (pos, name, rank, totalScore) => {
//         const player = document.createElement('li');
//         player.innerHTML = `
//             <strong>Position:</strong> ${pos}<br>
//             <strong>Name:</strong> ${name}<br>
//             <strong>Rank:</strong> ${rank}<br>
//             <strong>Total Score:</strong> ${totalScore}
//         `;
//         leaderboardList.appendChild(player);
//     };

//     async function getScoreCard() {
//         try {
//             const response = await fetch('/api/test');
//             if (!response.ok) {
//                 throw new Error('API request failed');
//             }
//             const scorecardArray = await response.json();
//             console.log('Scorecard data:', scorecardArray);
//             scorecardArray.forEach(({ Position, Name, Rank, TotalScore }) => {
//                 makeListItem(Position, Name, Rank, TotalScore);
//             });
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     getScoreCard();

//     const leaderboardList = document.querySelector('#leaderboard-list');

//     const makePlayerDiv = (pos, name, rank, totalScore) => {
//         const playerDiv = document.createElement('div');
//         playerDiv.classList.add('player-info'); // Add a class for styling
//         playerDiv.innerHTML = `
//             <strong>Position:</strong> ${pos}<br>
//             <strong>Name:</strong> ${name}<br>
//             <strong>Rank:</strong> ${rank}<br>
//             <strong>Total Score:</strong> ${totalScore}
//         `;
//         leaderboardList.appendChild(playerDiv);
//     };

//     async function getScoreCard() {
//         try {
//             const response = await fetch('/api/test');
//             if (!response.ok) {
//                 throw new Error('API request failed');
//             }
//             const scorecardArray = await response.json();
//             console.log('Scorecard data:', scorecardArray);
//             scorecardArray.forEach(({ Position, Name, Rank, TotalScore }) => {
//                 makePlayerDiv(Position, Name, Rank, TotalScore);
//             });
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    getScoreCard();

    const leaderboardList = document.querySelector('#leaderboard-list');

    const makeListItem = (pos, name, rank, totalScore) => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player'); // Optional: Apply CSS styles or classes
        playerDiv.innerHTML = `
            <strong>Position:</strong> ${pos}<br>
            <strong>Name:</strong> ${name}<br>
            <strong>Rank:</strong> ${rank}<br>
            <strong>Total Score:</strong> ${totalScore}
        `;
        leaderboardList.appendChild(playerDiv);
    };

    async function getScoreCard() {
        try {
            const response = await fetch('/api/test');
            if (!response.ok) {
                throw new Error('API request failed');
            }
            const scorecardArray = await response.json();
            console.log('Scorecard data:', scorecardArray);
            scorecardArray.forEach(({ Position, Name, Rank, TotalScore }) => {
                makeListItem(Position, Name, Rank, TotalScore);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }
});




