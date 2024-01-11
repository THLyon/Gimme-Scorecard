// Define the type for the page name
export type PageName = 'tournament-details' | 'course-details' | 'login' | 'settings';

// This function will be responsible for fetching and displaying the content
export async function loadContent(page: PageName): Promise<void> {
    try {
        // Fetch the HTML content from the appropriate file
        const response = await fetch(`src/${page}/${page}.html`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();

        // Insert the content into the main container
        const mainContainer = document.querySelector('.main-container') as HTMLElement;
        mainContainer.innerHTML = content;
    } catch (error) {
        console.error('Error loading content:', error);
    }
}