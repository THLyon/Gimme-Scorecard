// Define the type for the page name
export type PageName = 'leaderboard' | 'tournamentDetails' | 'course-details' | 'login' | 'settings';

export async function loadContent(pageName: PageName): Promise<void> {
    try {
        const contentUrl = chrome.runtime.getURL(`dist/${pageName}.html`);
        const responseHTML = await fetch(contentUrl);
        const contentStylesUrl = chrome.runtime.getURL(`dist/${pageName}.css`);
        const responseCSS = await fetch(contentStylesUrl);

        if (!responseHTML.ok || !responseCSS.ok) {
            throw new Error(`HTTP error! status: ${responseHTML.status}`);
        }

        const contentHTML = await responseHTML.text();
        const contentCSS = await responseCSS.text();

        const mainContainer = document.querySelector('.gimme-main-container');
        if (mainContainer) {
            mainContainer.innerHTML = ''; // Clear the container
            mainContainer.innerHTML = contentHTML; // Inject new content

            const styleTag = document.createElement('style');
            styleTag.textContent = contentCSS;
            document.head.appendChild(styleTag);
        }
    } catch (error) {
        console.error('Error loading content:', error);
    }
}