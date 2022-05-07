function createPage() {
    const content = document.querySelector("#content");
    const tabContainer = document.createElement("div");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const contactTab = document.createElement("div");
    const heading = document.createElement("h1");

    heading.textContent = "Menu";
    homeTab.textContent = "Home";
    homeTab.classList = "tab";
    homeTab.dataset.pagePointer = "homePage";
    menuTab.textContent = "Menu";
    menuTab.classList = "tab";
    menuTab.dataset.pagePointer = "menuPage";
    contactTab.textContent = "Contact";
    contactTab.classList = "tab";
    contactTab.dataset.pagePointer = "contactPage";

    content.appendChild(tabContainer);
    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(contactTab);
    content.appendChild(heading);
}

export {createPage};