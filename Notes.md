__TO-DO__
- Move backend to Typescript
- Get Menu items loading in DOM container
- Favorites Functionality
- Sign-up/Sign-in Functionality
- Database Functionality
- Settings Functionality


__TO-DO LONG TERM__
- Check on API costs
- Figure out AWS/Serving aspects for deployement

__STYLING NOTES__



deleted bundle:

(()=>{"use strict";function e(e){return t=this,n=void 0,c=function*(){try{const t=chrome.runtime.getURL(`src/${e}/${e}.html`);console.log(t);const n=yield fetch(t),o=chrome.runtime.getURL(`src/${e}/${e}.css`);console.log(o);const c=yield fetch(o);if(!n.ok||!c.ok)throw new Error(`HTTP error! status: ${n.status}`);const r=yield n.text(),i=yield c.text();document.querySelector(".gimme-main-container").innerHTML=r;const d=document.createElement("style");d.textContent=i,document.head.appendChild(d)}catch(e){console.error("Error loading content:",e)}},new((o=void 0)||(o=Promise))((function(e,r){function i(e){try{l(c.next(e))}catch(e){r(e)}}function d(e){try{l(c.throw(e))}catch(e){r(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,d)}l((c=c.apply(t,n||[])).next())}));var t,n,o,c}function t(){const e=document.getElementById("popupMenu");e&&(e.style.display="block"===e.style.display?"none":"block")}function n(e){var t;const n=document.getElementById("popupMenu");!n||"block"!==n.style.display||n.contains(e.target)||(null===(t=document.getElementById("menuIcon"))||void 0===t?void 0:t.contains(e.target))||(n.style.display="none")}document.addEventListener("DOMContentLoaded",(()=>{var o,c,r,i;!function(){var e,t,n,o;e=this,t=void 0,o=function*(){try{const e=yield fetch("http://localhost:3434/api/test");if(!e.ok)throw new Error("API request failed");const t=yield e.json();console.log("Scorecard data:",t),console.log("Type of scorecardArray:",typeof t),t.forEach((({Position:e,Name:t,Rank:n,TotalScore:o})=>{s(e,t,n,o),d++}))}catch(e){console.error("Error fetching scorecard:",e),e instanceof TypeError&&console.error("There was a network error:",e.message)}},new((n=void 0)||(n=Promise))((function(c,r){function i(e){try{l(o.next(e))}catch(e){r(e)}}function d(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}l((o=o.apply(e,t||[])).next())}))}(),null===(o=document.getElementById("tournamentDetailsLink"))||void 0===o||o.addEventListener("click",(t=>{t.preventDefault(),e("tournamentDetails")})),null===(c=document.getElementById("courseDetailsLink"))||void 0===c||c.addEventListener("click",(t=>{t.preventDefault(),e("course-details")})),null===(r=document.getElementById("loginLink"))||void 0===r||r.addEventListener("click",(t=>{t.preventDefault(),e("login")})),null===(i=document.getElementById("settingsLink"))||void 0===i||i.addEventListener("click",(t=>{t.preventDefault(),e("settings")}));let d=0;const l=document.querySelector("#leaderboard-list"),s=(e,t,n,o)=>{const c=document.createElement("div");c.classList.add("data-row"),c.style.backgroundColor=d%2!=0?"#309C64":"#D4D4D2",0===d?c.style.marginTop="5px":9===d&&(c.style.marginBottom="5px");const r=document.createElement("div");r.classList.add("position-div"),r.innerHTML=`<strong>Position:</strong> ${e+1}`;const i=document.createElement("div");i.classList.add("name-div"),i.innerHTML=`<strong>Name:</strong> ${t}`;const s=document.createElement("div");s.classList.add("rank-div"),s.innerHTML=`<strong>Rank:</strong> ${n}`;const a=document.createElement("div");a.classList.add("totalScore-div"),a.innerHTML=`<strong>Total Score:</strong> ${o}`,c.appendChild(r),c.appendChild(i),c.appendChild(s),c.appendChild(a),null==l||l.appendChild(c)},a=document.getElementById("menuIcon");null==a||a.addEventListener("click",t),document.addEventListener("click",n)}))})();





changed css


.gimme-html{
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
    align-content: space-around;

    background-color: #1c4932;
    height: 550px;
    width: 620px; 
    /* padding: 0px !important; */
    /* over;flow: hidden; */
};

.gimme-main-container{
    display: flex; 
    flex-flow: column;
    justify-content: center;
    align-items: center;

    background-color: #1c4932;
    width: 450px; 
    height: 390px;
}

.gimme-header-container {
    display: flex;
    justify-content: center;  /*Aligns the menu icon and title to opposite ends */
    align-items: center;
    background-color: #DAB033;
    color: #333333;
    height: 40px;
    width: 585px; /* Full width */
    padding: 0 10px; /* Add some padding on the sides */
}

/** Menu Drop Down */
/* Style for the hamburger icon */
.menu-icon {
    cursor: pointer;
    font-size: 24px; /* Adjust size as needed */
    position: absolute;
    right: 30px;
    top: 19px;
}

/* Style for the dropdown menu */
.popup-menu {
    display: none; /* Hidden by default */
    position: absolute; /* Positioning relative to its parent */
    top: 50px; /* Positioned right below the header */
    right: 0;
    background: #1c3424; /* Menu background color */
    color: #ffffff;
    width: 200px; /* Full width */
    box-shadow: 0 4px 8px #84948c; /* Optional: add some shadow for depth */
    z-index: 1000; /* Ensure it's on top of other elements */
}

.popup-menu a {
    display: block;
    padding: 10px; 
    color: white;
    text-decoration: none;
    border-bottom: 1px solid #6a7d63;
}

.popup-menu a:hover {
    background-color: #555;
}

/** Tournament */
.tournament-title-container{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px; 
    background-color:  #1c6747;
    border: solid #f8f8ea;
    border-width: 1px;
    color: #FAFAF1;
    height: 30px;
    width: 603px;
}

.tournament-list{
    overflow: auto; 
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;

    background-color:#FAFAF1;
    margin-top: 4px;
    height: 440px;
    width: 605px;  
}

.data-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2e9474;
    margin: 3px;
    height: 30px;
    width: 585px;
    padding: 5px;
    border-radius: 1px;
}

.data-row div {
    margin-right: 10px; /* Adjust space between columns */
    white-space: nowrap; /* Prevents the text from wrapping */
}

.Tournament_Name{
    flex: 0 0 auto; /* Do not grow or shrink */
    width: 60px; /* Or a width that fits your content */
    text-align: center;
}

.Start_Date{
    flex: 0 0 auto; /* Do not grow or shrink */
    width: 60px; /* Or a width that fits your content */
    text-align: center;
}

.End_Date{
    flex: 0 0 auto; /* Do not grow or shrink */
    width: 60px; /* Or a width that fits your content */
    text-align: center;
}

.Venue{
    flex: 0 0 auto; /* Do not grow or shrink */
    width: 60px; /* Or a width that fits your content */
    text-align: center;
}

.Location{
    flex: 0 0 auto; /* Do not grow or shrink */
    width: 60px; /* Or a width that fits your content */
    text-align: center;
}

.Par{
    flex: 0 0 auto; /* Do not grow or shrink */
    width: 60px; /* Or a width that fits your content */
    text-align: center;
}

.Purse{
    flex: 0 0 auto; /* Do not grow or shrink */
    width: 60px; /* Or a width that fits your content */
    text-align: center;
}

.Start{
    flex: 0 0 auto; /* Do not grow or shrink */
    width: 60px; /* Or a width that fits your content */
    text-align: center;
}



h1{
    font-style: italic; 
}

////////


.gimme-html {
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
    align-content: space-around;

    background-color: #1c4932;
    height: 550px;
    width: 620px; 
    /* padding: 0px !important; */
    /* over;flow: hidden; */
}

.gimme-main-container {
display: flex;
flex-direction: column;
align-items: center;
background-color: #1c4932;
width: 80%; /* Scaled width for responsiveness */
max-width: 620px; /* Maximum width to match your setting */
margin: 20px auto; /* Centering the container */
}

.gimme-header-container {
display: flex;
justify-content: center;
align-items: center;
background-color: #DAB033;
color: #333;
width: 100%; /* Full container width */
padding: 10px; /* Padding for aesthetic spacing */
}

.menu-icon {
cursor: pointer;
font-size: 24px; /* Larger icon size */
position: absolute;
right: 20px; /* Adjusted for spacing */
top: 10px; /* Adjusted for spacing */
}

.popup-menu {
display: none; /* Hidden by default */
position: absolute;
top: 60px; /* Below the header, adjusted for spacing /
right: 20px; / Adjusted for spacing /
background: #1c3424;
color: #ffffff;
width: 200px; / Width of menu /
box-shadow: 0 4px 8px rgba(132, 148, 140, 0.8);
z-index: 1000; / Ensures it appears above other elements */
}

.popup-menu a {
display: block;
padding: 12px; /* Increased padding for better click area */
color: white;
text-decoration: none;
border-bottom: 1px solid #6a7d63;
}

.popup-menu a:hover, .popup-menu a:focus {
background-color: #555; /* Provides visual feedback on hover and focus */
}

.tournament-title-container {
text-align: center;
justify-content: center;
align-items: center;
margin-top: 5px;
margin-bottom: 5px;
background-color: #1c6747;
border: solid #f8f8ea;
border-width: 1px;
color: #FAFAF1;
height: 30px;
width: 100%; /* Full width of parent container */
}

.tournament-list {
overflow: auto;
display: flex;
flex-direction: column;
justify-content: flex-start; /* Align items to the start of the flex-direction /
align-items: center;
background-color: #FAFAF1;
margin-top: 4px;
width: 100%; / Full width of parent container /
max-height: 440px; / Maximum height with overflow */
}

.data-row {
display: flex;
justify-content: space-between;
align-items: center;
background-color: #2e9474;
margin: 3px;
width: 95%; /* Slightly less than full width for inner margins */
padding: 5px;
border-radius: 1px;
}

.data-row div {
margin-right: 10px; /* Space between text /
white-space: nowrap; / Prevents the text from wrapping */
}

.detail-title, .detail-value {
flex: 1; /* Divide space equally between title and value /
text-align: left;
padding: 0 5px; / Padding on the sides */
}

h1 {
font-style: italic;
color: #DAB033;
margin-bottom: 10px; /* Space below the header */
}