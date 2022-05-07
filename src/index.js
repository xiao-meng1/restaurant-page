import * as homePage from './home-page.js';
import * as menuPage from './menu-page.js';
import * as contactPage from './contact-page.js';

let pages = {homePage, menuPage, contactPage};

const switchPage = (pageName) => {
    clearPage();
    pages[pageName].createPage();
}

const clearPage = () => {
    const content = document.querySelector("#content");

    while (content.firstChild) {
        content.firstChild.remove();
    }
}