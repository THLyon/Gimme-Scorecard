Styling Notes: 

- if id is divisible by 2, class is rowb(equals darker gray)




- api cost 
    - 



-deleted html 

<!-- <!DOCTYPE html>
<html lang="en">
    <head>
        <!-- <script defer src="build/bundle.js"></script> -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- <script src = 'build/bundle.js'></script> -->
        <link rel="stylesheet" href="./styles.css"> 
        <!-- <link type="text/css" rel="stylesheet"  href="src/style.css"/> -->
        <script src='./index.js'></script>
        <!-- incredibly slow with either of the two above uncommented-->
        <title>Gimme</title>
    </head>
    <body>
        <div class="main-container">
            <div class="title-container">
                <p id="title"><b>Gimme</b></p>
            </div>
            <div class="leaderboard-list">
                <ul id="row">
                    <span id="position"></span>
                    <span id="name"></span>
                    <span id="rank"></span>
                    <span id="totalScore"> </span>
              </ul>
            </div>
        </div>
        <!-- <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>     -->
        <!-- webpack and webpack-dev-server script-->
    </body>
</html>
-->



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


    // const makeListItem = (pos, name, rank, totalScore) => {
    //     const playerDiv = document.createElement('div');
    //     playerDiv.classList.add('data-row'); // Use the 'data-row' class for styling
    //     playerDiv.innerHTML = `
    //         <strong>Position:</strong> ${pos}
    //         <strong>Name:</strong> ${name}
    //         <strong>Rank:</strong> ${rank}
    //         <strong>Total Score:</strong> ${totalScore}
    //     `;
    //     leaderboardList.appendChild(playerDiv);
    // };













    "js": ["./dist/assets/popup-cjNoegvP.js"],