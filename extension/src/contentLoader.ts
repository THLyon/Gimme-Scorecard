

// Define the type for the page name
export type PageName = 'leaderboard' | 'tournament-details' | 'course-details' | 'login' | 'settings';

// // This function will be responsible for fetching and displaying the content
// export async function loadContent(page: PageName): Promise<void> {
//     try {
//         // Fetch the HTML content from the appropriate file
//         const responseHTML = await fetch(`src/${page}/${page}.html`);
//         const responseCSS = await fetch(`src/${page}/${page}.css`);
//         if (!responseHTML.ok || !responseCSS.ok) {
//             throw new Error(`HTTP error! status: ${responseHTML.status}`);
//         } 
//         const contentHTML = await responseHTML.text();
//         const contentCSS = await responseCSS.text();

//         // Insert the content into the main container
//         const mainContainer = document.querySelector('.main-container') as HTMLElement;
//         mainContainer.innerHTML = contentHTML;

//         // Insert the CSS into the head
//         const styleTag = document.createElement('style');
//         styleTag.textContent = contentCSS;
//         document.head.appendChild(styleTag);
        
//         // Optionally, if you have JavaScript to attach, you would also load and insert it here
//         // const responseJS = await fetch(`src/${page}/${page}.js`);
//         // Execute JS if needed
//         // ...

//     } catch (error) {
//         console.error('Error loading content:', error);
//     }
// }

// This function will be responsible for fetching and displaying the content
export async function loadContent(pageName: PageName): Promise<void> {
    try {
      // Use chrome.runtime.getURL to get the full URL in extension environment
      const contentUrl = chrome.runtime.getURL(`${pageName}/${pageName}.html`);
      const responseHTML = await fetch(contentUrl);
      const contentStyles = chrome.runtime.getURL(`${pageName}/${pageName}.css`);
      const responseCSS = await fetch(contentStyles);
        if (!responseHTML.ok || !responseCSS.ok) {
            throw new Error(`HTTP error! status: ${responseHTML.status}`);
        } 
  
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
  
      const contentHTML = await responseHTML.text();
      const contentCSS = await responseCSS.text();
  
      // Replace the content of the main-container with the new content
      const mainContainer = document.querySelector('.gimme-main-container') as HTMLElement;
      mainContainer!.innerHTML = contentHTML;
      
      const styleTag = document.createElement('style');
        styleTag.textContent = contentCSS;
        document.head.appendChild(styleTag);
        
      // You might want to also load the CSS here or ensure it's part of the popup.html to begin with
    } catch (error) {
      console.error('Error loading content:', error);
    }
  }
  
//   // Add event listeners to menu items
//   document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('tournamentDetailsLink').addEventListener('click', (e) => {
//       e.preventDefault();
//       loadContent('tournament-details');
//     });
  
//     // Add listeners for other links similarly
//   });
  