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
exports.loadContent = void 0;
// This function will be responsible for fetching and displaying the content
function loadContent(page) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch the HTML content from the appropriate file
            const response = yield fetch(`src/${page}/${page}.html`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const content = yield response.text();
            // Insert the content into the main container
            const mainContainer = document.querySelector('.main-container');
            mainContainer.innerHTML = content;
        }
        catch (error) {
            console.error('Error loading content:', error);
        }
    });
}
exports.loadContent = loadContent;
