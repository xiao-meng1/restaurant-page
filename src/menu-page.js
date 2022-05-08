import eggsPhotoSRC from "./eggs.jpg";
import potatoesPhotoSRC from "./potatoes.jpg";
import waterPhotoSRC from "./water.jpg";

function createPage() {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const contactTab = document.createElement("div");
    const mainContent = document.createElement("div");
    const heading = document.createElement("h1");
    const item1 = document.createElement("h2");
    const eggsPhoto = document.createElement("img");
    const item2 = document.createElement("h2");
    const potatoesPhoto = document.createElement("img");
    const item3 = document.createElement("h2");
    const waterPhoto = document.createElement("img");
    const footer = document.createElement("footer");

    header.classList = "header";
    homeTab.textContent = "Home";
    homeTab.classList = "tab";
    homeTab.dataset.pagePointer = "homePage";
    menuTab.textContent = "Menu";
    menuTab.classList = "tab active-tab";
    menuTab.dataset.pagePointer = "menuPage";
    contactTab.textContent = "Contact";
    contactTab.classList = "tab";
    contactTab.dataset.pagePointer = "contactPage";
    mainContent.classList = "main-content";
    heading.textContent = "Menu";
    item1.textContent = "Eggs";
    item1.classList = "media-container";
    eggsPhoto.src = eggsPhotoSRC;
    item2.textContent = "Potatos";
    item2.classList = "media-container";
    potatoesPhoto.src = potatoesPhotoSRC;
    item3.textContent = "Water";
    item3.classList = "media-container";
    waterPhoto.src = waterPhotoSRC;

    footer.textContent = "Image Sources: https://www.thespruceeats.com/thmb/XC5U2ZiRJIy89I2PPP8aKuob86w=/3797x2848/smart/filters:no_upscale()/perfect-hard-boiled-eggs-995510-Hero_3-03d1b108d1ca489dad9e1f1d7fdba73f.jpg https://natashaskitchen.com/wp-content/uploads/2022/02/Boiled-Potatoes-SQ.jpg https://images.everydayhealth.com/images/can-drinking-water-not-drinking-enough-affect-your-sleep-1440x810.jpg"
    footer.classList = "footer";

    content.appendChild(header);
    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);
    content.appendChild(mainContent);
    mainContent.appendChild(heading);
    mainContent.appendChild(item1);
    item1.appendChild(eggsPhoto);
    mainContent.appendChild(item2);
    item2.appendChild(potatoesPhoto);
    mainContent.appendChild(item3);
    item3.appendChild(waterPhoto);
    content.appendChild(footer);
}

export {createPage};