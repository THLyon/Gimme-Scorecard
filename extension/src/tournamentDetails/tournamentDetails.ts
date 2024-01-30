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
    getTournamentDetails(); 

   // Prevent the default anchor click behavior and load the content for tournament details
    document.getElementById('tournamentDetailsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('tournamentDetails');
    });
    // Prevent the default anchor click behavior and load the content for course details
    document.getElementById('courseDetailsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('course-details');
    });
    // Prevent the default anchor click behavior and load the content for Login details
    document.getElementById('loginLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('login');
    });
    // Prevent the default anchor click behavior and load the content for Setting details
    document.getElementById('settingsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('settings');
    });
    // let count = 0; 

    async function getTournamentDetails() {
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