import { loadContent, PageName } from '../contentLoader';


document.addEventListener('DOMContentLoaded', () => {
    getTournamentDetails(); 

   // Prevent the default anchor click behavior and load the content for tournament details
    document.getElementById('tournamentDetailsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('tournament-details');
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
    let count = 0; 

    const makeListItem = (title: string, element: string | number) => {

        const rowContainer = document.createElement('div');
        rowContainer.classList.add('data-row'); // Use the 'data-row' class for styling

        const detailsContainers = document.createElement('div');
        detailsContainers.classList.add(`${element}-div`);
        detailsContainers.innerHTML = `<strong>${title}:</strong> ${element}`;

        if (count % 2 !== 0) {
            detailsContainers.style.backgroundColor = '#309C64'; // Change to your specific green color
            // rowContainer.style.color = '#FAFAF1'
        } else {
            detailsContainers.style.backgroundColor = '#D4D4D2'; // Change to your specific gray color
        }

        rowContainer.appendChild(detailsContainers)
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
                makeListItem(el, tournamentObj[el]);
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