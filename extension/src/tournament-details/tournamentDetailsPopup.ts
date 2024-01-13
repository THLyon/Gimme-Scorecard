import { loadContent, PageName } from '../contentLoader';


document.addEventListener('DOMContentLoaded', () => {
    getTournamentDetails(); 

    document.getElementById('tournamentDetailsLink')?.addEventListener('click', () => {
        loadContent('tournament-details');
    });
    document.getElementById('courseDetailsLink')?.addEventListener('click', () => {
        loadContent('course-details');
    });
    document.getElementById('loginLink')?.addEventListener('click', () => {
        loadContent('login');
    });
    document.getElementById('settingsLink')?.addEventListener('click', () => {
        loadContent('settings');
    });
    let count = 0; 

    const makeListItem = (title: string, element: string | number) => {

        const rowContainer = document.createElement('div');
        rowContainer.classList.add('data-row'); // Use the 'data-row' class for styling

        const divs = document.createElement('div');
        divs.classList.add(`${element}-div`);
        divs.innerHTML = `<strong>${title}:</strong> ${element}`;

        if (count % 2 !== 0) {
            divs.style.backgroundColor = '#309C64'; // Change to your specific green color
            // rowContainer.style.color = '#FAFAF1'
        } else {
            divs.style.backgroundColor = '#D4D4D2'; // Change to your specific gray color
        }

        rowContainer.appendChild(divs)
    };



    async function getTournamentDetails() {
        try {
            const response = await fetch('http://localhost:3434/api/tournament');
            if (!response.ok) {
                throw new Error('API request failed');
            }
            const tournamentObj = await response.json();
            console.log('Tournament Data:', tournamentObj); 
            for(let el of tournamentObj){
                makeListItem(tournamentObj, tournamentObj[el]);
                count++;  
            }
            
         } catch (error) {
                console.error('Error fetching scorecard:', error);
                if (error instanceof TypeError) {
                    console.error('There was a network error:', error.message);
                    // Additional logic to handle network errors can go here
                }
            }
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
    
    // const menu = document.getElementById('popupMenu');
    // menu.style.display = menu.style.display === 'block' ? 'none' : 'block';


function closeMenu(event: MouseEvent) {
    const menu = document.getElementById('popupMenu');
    if (menu && menu.style.display === 'block' && !menu.contains(event.target as Node) && !document.getElementById('menuIcon')?.contains(event.target as Node)) {
        menu.style.display = 'none';
    }
};