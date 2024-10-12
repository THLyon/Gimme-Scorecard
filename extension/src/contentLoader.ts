
// contentLoader.ts

export type PageName = 'leaderboardDetails' | 'tournamentDetails' | 'course-details' | 'login' | 'settings';

// Define a type for the event listeners object
type EventListeners = {
  [key: string]: ((e: Event) => void) | null;
};

// Object to keep track of listeners
const eventListeners: EventListeners = {
  leaderboardListLink: null,
  tournamentDetailsLink: null,
  // ... add other listeners as needed
};

// Function to remove listeners
function removeListeners() {
  // Leaderboard link
  const leaderboardLink = document.getElementById('leaderboardListLink');
  if (eventListeners.leaderboardListLink && leaderboardLink) {
    leaderboardLink.removeEventListener('click', eventListeners.leaderboardListLink);
  }

  // Tournament details link
  const tournamentLink = document.getElementById('tournamentDetailsLink');
  if (eventListeners.tournamentDetailsLink && tournamentLink) {
    tournamentLink.removeEventListener('click', eventListeners.tournamentDetailsLink);
  }

  // ... remove other listeners
}

// This function should be called after new content is loaded to set up event listeners
export function setListeners() {
  // Leaderboard link
  const leaderboardLink = document.getElementById('leaderboardListLink');
  eventListeners.leaderboardListLink = (e) => {
    e.preventDefault();
    loadContent('leaderboardDetails');
  };
  leaderboardLink?.addEventListener('click', eventListeners.leaderboardListLink);

  // Tournament details link
  const tournamentLink = document.getElementById('tournamentDetailsLink');
  eventListeners.tournamentDetailsLink = (e) => {
    e.preventDefault();
    loadContent('tournamentDetails');
  };
  tournamentLink?.addEventListener('click', eventListeners.tournamentDetailsLink);

  // ... add other listeners
}

// This function should be exported so it can be used by other parts of your extension
export async function loadContent(pageName: PageName): Promise<void> {
    try {
        // First remove any existing event listeners to prevent memory leaks
        removeListeners();

        const contentUrl = chrome.runtime.getURL(`dist/${pageName}.html`);
        console.log(`Loading content for ${pageName}`)
        const responseHTML = await fetch(contentUrl);
        console.log(`Loading content for ${responseHTML}`)
        const contentStylesUrl = chrome.runtime.getURL(`dist/${pageName}.css`);
        const responseCSS = await fetch(contentStylesUrl);
        console.log(`Loading content for ${responseCSS}`)
        if (!responseHTML.ok || !responseCSS.ok) {
            throw new Error(`HTTP error! status: ${responseHTML.status}`);
        }

        const contentHTML = await responseHTML.text();
        const contentCSS = await responseCSS.text();

        const mainContainer = document.querySelector('.gimme-main-container');
        if (mainContainer) {
            mainContainer.innerHTML = contentHTML; // Inject new content

            // Re-attach the style to the head
            const styleTag = document.createElement('style');
            styleTag.textContent = contentCSS;
            document.head.appendChild(styleTag);

            // Set the event listeners again for the new content
            setListeners();
        }
    } catch (error) {
        console.error('Error loading content:', error);
    }
}




// // Define the type for the page name
// export type PageName = 'leaderboard' | 'tournamentDetails' | 'course-details' | 'login' | 'settings';

// export async function loadContent(pageName: PageName): Promise<void> {
//     try {
//         const contentUrl = chrome.runtime.getURL(`dist/${pageName}.html`);
//         const responseHTML = await fetch(contentUrl);
//         const contentStylesUrl = chrome.runtime.getURL(`dist/${pageName}.css`);
//         const responseCSS = await fetch(contentStylesUrl);

//         if (!responseHTML.ok || !responseCSS.ok) {
//             throw new Error(`HTTP error! status: ${responseHTML.status}`);
//         }

//         const contentHTML = await responseHTML.text();
//         const contentCSS = await responseCSS.text();

//         const mainContainer = document.querySelector('.gimme-main-container');
//         if (mainContainer) {
//             mainContainer.innerHTML = ''; // Clear the container
//             mainContainer.innerHTML = contentHTML; // Inject new content

//             const styleTag = document.createElement('style');
//             styleTag.textContent = contentCSS;
//             document.head.appendChild(styleTag);
//         }
//     } catch (error) {
//         console.error('Error loading content:', error);
//     }
// }