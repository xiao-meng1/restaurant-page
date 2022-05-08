import * as homePage from './home-page.js';
import * as menuPage from './menu-page.js';
import * as contactPage from './contact-page.js';
import './styles.css';

let pages = {homePage, menuPage, contactPage};

const switchPage = (e) => {
    const pageName = e.target.dataset.pagePointer;
    clearPage();
    pages[pageName].createPage();
    addTabEvents();
}

const clearPage = () => {
    const content = document.querySelector("#content");

    while (content.firstChild) {
        content.firstChild.remove();
    }
}

const addTabEvents = () => {
    const tabElements = document.querySelectorAll(".tab");
    tabElements.forEach((tab) => {
        tab.addEventListener("click", switchPage);
    });
}

pages.homePage.createPage();
addTabEvents();