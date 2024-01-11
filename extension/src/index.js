"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { loadTournamentDetails } from './tournament_details/tournamentDetailsPopup';
// import { loadCourseDetails } from './course_details/courseDetailsPopup';
const contentLoader_1 = require("./contentLoader");
document.addEventListener('DOMContentLoaded', () => {
    // document.querySelector('#tournamentDetailsLink')?.addEventListener('click', () => loadContent('tournament-details'));
    // document.querySelector('#courseDetailsLink')?.addEventListener('click', () => loadContent('course-details'));
    var _a, _b, _c, _d;
    getScoreCard();
    (_a = document.getElementById('tournamentDetailsLink')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        (0, contentLoader_1.loadContent)('tournament-details');
    });
    (_b = document.getElementById('courseDetailsLink')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        (0, contentLoader_1.loadContent)('course-details');
    });
    (_c = document.getElementById('loginLink')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
        (0, contentLoader_1.loadContent)('login');
    });
    (_d = document.getElementById('settingsLink')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
        (0, contentLoader_1.loadContent)('settings');
    });
    let count = 0;
    const leaderboardList = document.querySelector('#leaderboard-list');
    const makeListItem = (pos, name, rank, totalScore) => {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('data-row'); // Use the 'data-row' class for styling
        if (count % 2 !== 0) {
            rowContainer.style.backgroundColor = '#309C64'; // Change to your specific green color
            // rowContainer.style.color = '#FAFAF1'
        }
        else {
            rowContainer.style.backgroundColor = '#D4D4D2'; // Change to your specific gray color
        }
        if (count === 0) {
            rowContainer.style.marginTop = '5px';
        }
        else if (count === 9) {
            rowContainer.style.marginBottom = '5px';
        }
        const positionDiv = document.createElement('div');
        positionDiv.classList.add('position-div');
        positionDiv.innerHTML = `<strong>Position:</strong> ${pos + 1}`;
        const nameDiv = document.createElement('div');
        nameDiv.classList.add('name-div');
        nameDiv.innerHTML = `<strong>Name:</strong> ${name}`;
        const rankDiv = document.createElement('div');
        rankDiv.classList.add('rank-div');
        rankDiv.innerHTML = `<strong>Rank:</strong> ${rank}`;
        const totalScoreDiv = document.createElement('div');
        totalScoreDiv.classList.add('totalScore-div');
        totalScoreDiv.innerHTML = `<strong>Total Score:</strong> ${totalScore}`;
        // Append the data elements to the row container
        rowContainer.appendChild(positionDiv);
        rowContainer.appendChild(nameDiv);
        rowContainer.appendChild(rankDiv);
        rowContainer.appendChild(totalScoreDiv);
        leaderboardList === null || leaderboardList === void 0 ? void 0 : leaderboardList.appendChild(rowContainer);
    };
    function getScoreCard() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://localhost:3434/api/test');
                if (!response.ok) {
                    throw new Error('API request failed');
                }
                const scorecardArray = yield response.json();
                console.log('Scorecard data:', scorecardArray);
                console.log('Type of scorecardArray:', typeof scorecardArray);
                scorecardArray.forEach(({ Position, Name, Rank, TotalScore }) => {
                    makeListItem(Position, Name, Rank, TotalScore);
                    count++;
                });
            }
            catch (error) {
                console.error('Error fetching scorecard:', error);
                if (error instanceof TypeError) {
                    console.error('There was a network error:', error.message);
                    // Additional logic to handle network errors can go here
                }
            }
        });
    }
    const menuIcon = document.getElementById('menuIcon');
    menuIcon === null || menuIcon === void 0 ? void 0 : menuIcon.addEventListener('click', toggleMenu);
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
function closeMenu(event) {
    var _a;
    const menu = document.getElementById('popupMenu');
    if (menu && menu.style.display === 'block' && !menu.contains(event.target) && !((_a = document.getElementById('menuIcon')) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
        menu.style.display = 'none';
    }
}
;
