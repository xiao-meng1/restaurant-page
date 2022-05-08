function createPage() {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const contactTab = document.createElement("div");
    const mainContent = document.createElement("div");
    const heading = document.createElement("h1");
    const infoContainer = document.createElement("div");
    const phoneInfo = document.createElement("h2");
    const emailInfo = document.createElement("h2");
    const addressInfo = document.createElement("h2");
    const footer = document.createElement("footer");

    header.classList = "header";
    homeTab.textContent = "Home";
    homeTab.classList = "tab";
    homeTab.dataset.pagePointer = "homePage";
    menuTab.textContent = "Menu";
    menuTab.classList = "tab";
    menuTab.dataset.pagePointer = "menuPage";
    contactTab.textContent = "Contact";
    contactTab.classList = "tab active-tab";
    contactTab.dataset.pagePointer = "contactPage";
    mainContent.classList = "main-content";
    heading.textContent = "Contact Information";
    infoContainer.classList = "media-container";
    phoneInfo.textContent = "Phone: (123)-456-7890";
    emailInfo.textContent = "Email: example@gmail.com";
    addressInfo.textContent = "Address: 1234 567 St., City, Province, Country";
    footer.classList = "footer";

    content.appendChild(header);
    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);
    content.appendChild(mainContent);
    mainContent.appendChild(heading);
    mainContent.appendChild(infoContainer);
    infoContainer.appendChild(phoneInfo);
    infoContainer.appendChild(emailInfo);
    infoContainer.appendChild(addressInfo);
    content.appendChild(footer);
}

export {createPage};