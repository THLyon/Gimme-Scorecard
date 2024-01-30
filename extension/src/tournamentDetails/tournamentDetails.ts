import { loadContent, PageName } from '../contentLoader';
import './tournamentDetails.styles.css';


interface Tournament {
    Tournament_Name: string;
    Start_Date: string;
    End_Date: string;
    Venue: string;
    Location: string;
    Par: number;
    Purse: number;
    Start: string;
  }

document.addEventListener('DOMContentLoaded', () => {
        // Use event delegation to handle clicks on dynamically loaded content
        document.body.addEventListener('click', async (e) => {
            const target = e.target as HTMLElement; 
            if (target && target.id === 'tournamentDetailsLink') {
                e.preventDefault();
                console.log('Tournament details link clicked'); // Debugging log
                await loadContent('tournamentDetails');
                getTournamentDetails();
            }
        });


    async function getTournamentDetails() {
        console.log('Fetching tournament details'); // Debugging log
        try {
            const response = await fetch('http://localhost:3434/api/dummyTournament');
            if (!response.ok) {
                throw new Error('API request failed');
            }
            const tournaments = await response.json();
            const tournamentDetailsContainer = document.getElementById('tournament-details');
            
            if (tournamentDetailsContainer) { // Check if the element exists
                for (const tournament of tournaments) {
                    for (const [key, value] of Object.entries(tournament)) {
                        const detailRow = makeListItem(key, value as string | number);
                        tournamentDetailsContainer.appendChild(detailRow);
                    }
                }
            } else {
                console.error('Tournament details container not found');
            }
        } catch (error) {
            console.error('Error fetching tournament details:', error);
        }
    }
    
    function makeListItem(key: string, value: string | number) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('data-row');
        
        const detailTitle = document.createElement('div');
        detailTitle.classList.add('detail-title');
        detailTitle.textContent = `${key}:`;
        
        const detailValue = document.createElement('div');
        detailValue.classList.add('detail-value');
        // Check if the value is a string or number and set textContent accordingly
        detailValue.textContent = typeof value === 'number' ? value.toString() : value;
        
        rowContainer.appendChild(detailTitle);
        rowContainer.appendChild(detailValue);
        
        return rowContainer;
    }
    
    const menuIcon = document.getElementById('menuIcon');
    menuIcon?.addEventListener('click', toggleMenu);

    document.addEventListener('click', closeMenu);
}); 


function toggleMenu() {
    const menu = document.getElementById('popupMenu');
    if (menu) {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
}


function closeMenu(event: MouseEvent) {
    const menu = document.getElementById('popupMenu');
    if (menu && menu.style.display === 'block' && !menu.contains(event.target as Node) && !document.getElementById('menuIcon')?.contains(event.target as Node)) {
        menu.style.display = 'none';
    }
};