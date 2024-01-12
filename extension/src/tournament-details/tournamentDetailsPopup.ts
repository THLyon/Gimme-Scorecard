// import { loadContent, PageName } from './contentLoader';


// document.addEventListener('DOMContentLoaded', () => {
//     getTournamentDetails(); 

//     document.getElementById('tournamentDetailsLink')?.addEventListener('click', () => {
//         loadContent('tournament-details');
//     });
//     document.getElementById('courseDetailsLink')?.addEventListener('click', () => {
//         loadContent('course-details');
//     });
//     document.getElementById('loginLink')?.addEventListener('click', () => {
//         loadContent('login');
//     });
//     document.getElementById('settingsLink')?.addEventListener('click', () => {
//         loadContent('settings');
//     });



//     async function getTournamentDetails() {
//         try {
//             const response = await fetch('http://localhost:3434/api/test');
//             if (!response.ok) {
//                 throw new Error('API request failed');
//             }
//             const tournamentObj = await response.json();
//             console.log('Scorecard data:', tournamentObj);
//             console.log('Type of scorecardArray:', typeof tournamentObj);
//             tournamentObj.forEach(({ Position, Name, Rank, TotalScore }: {
//                 Position: number;
//                 Name: string;
//                 Rank: string;
//                 TotalScore: number;
//             }) => {
//                 makeListItem(Position, Name, Rank, TotalScore);
//                 count++;
//             });
//          } catch (error) {
//                 console.error('Error fetching scorecard:', error);
//                 if (error instanceof TypeError) {
//                     console.error('There was a network error:', error.message);
//                     // Additional logic to handle network errors can go here
//                 }
//             }
//     }
//     const menuIcon = document.getElementById('menuIcon');
//     menuIcon?.addEventListener('click', toggleMenu);

//     document.addEventListener('click', closeMenu);
// }); 


// function toggleMenu() {
//     const menu = document.getElementById('popupMenu');
//     if (menu) {
//         menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
//     }
// }
    
//     // const menu = document.getElementById('popupMenu');
//     // menu.style.display = menu.style.display === 'block' ? 'none' : 'block';


// function closeMenu(event: MouseEvent) {
//     const menu = document.getElementById('popupMenu');
//     if (menu && menu.style.display === 'block' && !menu.contains(event.target as Node) && !document.getElementById('menuIcon')?.contains(event.target as Node)) {
//         menu.style.display = 'none';
//     }
// };