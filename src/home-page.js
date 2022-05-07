function createPage() {
    const content = document.querySelector("#content");
    const tabContainer = document.createElement("div");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const contactTab = document.createElement("div");
    const heading = document.createElement("h1");
    const subHeading = document.createElement("h2");
    const restaurantPhoto = document.createElement("img");

    heading.textContent = "Your Favorite Restaurant";
    subHeading.textContent = "The best food innovation since sliced bread!";
    restaurantPhoto.src = "https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg";
    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";

    content.appendChild(tabContainer);
    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(contactTab);
    content.appendChild(heading);
    content.appendChild(subHeading);
    content.appendChild(restaurantPhoto);
}

export {createPage};