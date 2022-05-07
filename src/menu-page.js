function createPage() {
    const content = document.querySelector("#content");
    const tabContainer = document.createElement("div");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const contactTab = document.createElement("div");
    const heading = document.createElement("h1");

    heading.textContent = "Menu";
    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";

    content.appendChild(tabContainer);
    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(contactTab);
    content.appendChild(heading);
}

export {createPage};