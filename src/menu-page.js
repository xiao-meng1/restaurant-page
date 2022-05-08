function createPage() {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const contactTab = document.createElement("div");
    const mainContent = document.createElement("div");
    const heading = document.createElement("h1");
    const item1 = document.createElement("h2");
    const item2 = document.createElement("h2");
    const item3 = document.createElement("h2");
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
    item2.textContent = "Potatos";
    item3.textContent = "Water";
    
    footer.textContent = "Image Sources: "
    footer.classList = "footer";

    content.appendChild(header);
    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);
    content.appendChild(mainContent);
    mainContent.appendChild(heading);
    mainContent.appendChild(item1);
    mainContent.appendChild(item2);
    mainContent.appendChild(item3);
    content.appendChild(footer);
}

export {createPage};