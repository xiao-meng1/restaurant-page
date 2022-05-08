import * as homePage from "./pages/home-page.js";
import * as menuPage from "./pages/menu-page.js";
import * as contactPage from "./pages/contact-page.js";
import "./styles.css";

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

const initializeApp = () => {
    const content = document.createElement("div");
    const body = document.querySelector("body");

    content.id = "content";
    body.appendChild(content);
    pages.homePage.createPage();
    addTabEvents();
}

initializeApp();
