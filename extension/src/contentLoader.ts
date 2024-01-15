// Define the type for the page name
export type PageName = 'leaderboard' | 'tournament-details' | 'course-details' | 'login' | 'settings';

// This function will be responsible for fetching and displaying the content
export async function loadContent(page: PageName): Promise<void> {
    try {
        // Fetch the HTML content from the appropriate file
        const responseHTML = await fetch(`src/${page}/${page}.html`);
        const responseCSS = await fetch(`src/${page}/${page}.css`);
        
        if (!responseHTML.ok || !responseCSS.ok) {
            throw new Error(`HTTP error! status: ${responseHTML.status}`);
        }
        
        const contentHTML = await responseHTML.text();
        const contentCSS = await responseCSS.text();

        // Insert the content into the main container
        const mainContainer = document.querySelector('.main-container') as HTMLElement;
        mainContainer.innerHTML = contentHTML;

        // Insert the CSS into the head
        const styleTag = document.createElement('style');
        styleTag.textContent = contentCSS;
        document.head.appendChild(styleTag);
        
        // Optionally, if you have JavaScript to attach, you would also load and insert it here
        // const responseJS = await fetch(`src/${page}/${page}.js`);
        // Execute JS if needed
        // ...

    } catch (error) {
        console.error('Error loading content:', error);
    }
}


// // Define the type for the page name
// export type PageName = 'tournament-details' | 'course-details' | 'login' | 'settings';

// // This function will be responsible for fetching and displaying the content
// export async function loadContent(page: PageName): Promise<void> {
//     try {
//         // Fetch the HTML content from the appropriate file
//         const response = await fetch(`src/${page}/${page}.html`);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const content = await response.text();

//         // Insert the content into the main container
//         const mainContainer = document.querySelector('.main-container') as HTMLElement;
//         mainContainer.innerHTML = content;
//     } catch (error) {
//         console.error('Error loading content:', error);
//     }
// }