
document.addEventListener('DOMContentLoaded', () => {
    getScoreCard();

    const leaderboardList = document.querySelector('#leaderboard-list');

    const makeListItem = (pos, name, rank, totalScore) => {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('data-row'); // Use the 'data-row' class for styling
    
        const positionDiv = document.createElement('div');
        positionDiv.innerHTML = `<strong>Position:</strong> ${pos + 1}`;
    
        const nameDiv = document.createElement('div');
        nameDiv.innerHTML = `<strong>Name:</strong> ${name}`;
    
        const rankDiv = document.createElement('div');
        rankDiv.innerHTML = `<strong>Rank:</strong> ${rank}`;
    
        const totalScoreDiv = document.createElement('div');
        totalScoreDiv.innerHTML = `<strong>Total Score:</strong> ${totalScore}`;
    
        // Append the data elements to the row container
        rowContainer.appendChild(positionDiv);
        rowContainer.appendChild(nameDiv);
        rowContainer.appendChild(rankDiv);
        rowContainer.appendChild(totalScoreDiv);
    
        leaderboardList.appendChild(rowContainer);
    };
    async function getScoreCard() {
        try {
            const response = await fetch('/api/test');
            if (!response.ok) {
                throw new Error('API request failed');
            }
            const scorecardArray = await response.json();
            console.log('Scorecard data:', scorecardArray);
            console.log('Type of scorecardArray:', typeof scorecardArray);
            scorecardArray.forEach(({ Position, Name, Rank, TotalScore }) => {
                makeListItem(Position, Name, Rank, TotalScore);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }
});




