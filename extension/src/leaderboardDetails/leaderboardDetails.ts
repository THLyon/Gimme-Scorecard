console.log('leaderboardDetails.ts is loaded')

import { loadContent, PageName } from '../contentLoader';
import './leaderboardDetails.styles.css'

export async function initLeaderboard() {

    getScoreCard(); 
    let count = 0;

    const leaderboardList = document.querySelector<HTMLDivElement>('#leaderboard-list');

    const makeListItem = (pos: number, name: string, rank: string, totalScore: number) => {

        const rowContainer = document.createElement('div');
        rowContainer.classList.add('data-row'); // Use the 'data-row' class for styling

        if (count % 2 !== 0) {
            rowContainer.style.backgroundColor = '#309C64'; // Change to your specific green color
            // rowContainer.style.color = '#FAFAF1'
        } else {
            rowContainer.style.backgroundColor = '#D4D4D2'; // Change to your specific gray color
        }

        if(count === 0){
            rowContainer.style.marginTop = '5px';
        } else if (count === 9){
            rowContainer.style.marginBottom = '5px';
        }

        const positionDiv = document.createElement('div');
        positionDiv.classList.add('position-div');
        positionDiv.innerHTML = `<strong>Position:</strong> ${pos + 1}`;

        const nameDiv = document.createElement('div');
        nameDiv.classList.add('name-div');
        nameDiv.innerHTML = `<strong>Name:</strong> ${name}`;

        const rankDiv = document.createElement('div');
        rankDiv.classList.add('rank-div');
        rankDiv.innerHTML = `<strong>Rank:</strong> ${rank}`;

        const totalScoreDiv = document.createElement('div');
        totalScoreDiv.classList.add('totalScore-div');
        totalScoreDiv.innerHTML = `<strong>Total Score:</strong> ${totalScore}`;

        // Append the data elements to the row container
        rowContainer.appendChild(positionDiv);
        rowContainer.appendChild(nameDiv);
        rowContainer.appendChild(rankDiv);
        rowContainer.appendChild(totalScoreDiv);

        leaderboardList?.appendChild(rowContainer);
    };

    async function getScoreCard() {
        try {
            const response = await fetch('http://localhost:3434/api/test');
            if (!response.ok) {
                throw new Error('API request failed');
            }
            const scorecardArray = await response.json();
            console.log('Scorecard data:', scorecardArray);
            console.log('Type of scorecardArray:', typeof scorecardArray);
            scorecardArray.forEach(({ Position, Name, Rank, TotalScore }: {
                Position: number;
                Name: string;
                Rank: string;
                TotalScore: number;
            }) => {
                makeListItem(Position, Name, Rank, TotalScore);
                count++;
            });
        } catch (error) {
                console.error('Error fetching scorecard:', error);
                if (error instanceof TypeError) {
                    console.error('There was a network error:', error.message);
                    // Additional logic to handle network errors can go here
                }
            }
    }

    // const menuIcon = document.getElementById('menuIcon');
    // menuIcon?.addEventListener('click', toggleMenu);

    // document.addEventListener('click', closeMenu);
}

// function toggleMenu() {
//     const menu = document.getElementById('popupMenu');
//     if (menu) {
//         menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
//     }
// }

// function closeMenu(event: MouseEvent) {
//     const menu = document.getElementById('popupMenu');
//     if (menu && menu.style.display === 'block' && !menu.contains(event.target as Node) && !document.getElementById('menuIcon')?.contains(event.target as Node)) {
//         menu.style.display = 'none';
//     }
// };