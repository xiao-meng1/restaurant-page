import restaurantPhotoSRC from "../images/london-stock.jpg";

function createPage() {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const contactTab = document.createElement("div");
    const mainContent = document.createElement("div");
    const heading = document.createElement("h1");
    const subHeading = document.createElement("h2");
    const photoContainer = document.createElement("div");
    const restaurantPhoto = document.createElement("img");
    const footer = document.createElement("footer");

    header.classList = "header";
    homeTab.textContent = "Home";
    homeTab.classList = "tab active-tab";
    homeTab.dataset.pagePointer = "homePage";
    menuTab.textContent = "Menu";
    menuTab.classList = "tab";
    menuTab.dataset.pagePointer = "menuPage";
    contactTab.textContent = "Contact";
    contactTab.classList = "tab";
    contactTab.dataset.pagePointer = "contactPage";
    mainContent.classList = "main-content";
    heading.textContent = "Your Favorite Restaurant";
    subHeading.textContent = "The best food innovation since sliced bread!";
    photoContainer.classList = "media-container";
    restaurantPhoto.src = restaurantPhotoSRC;
    footer.textContent = "Image Source: https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg"
    footer.classList = "footer";

    content.appendChild(header);
    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);
    content.appendChild(mainContent);
    mainContent.appendChild(heading);
    mainContent.appendChild(subHeading);
    mainContent.appendChild(photoContainer);
    photoContainer.appendChild(restaurantPhoto);
    content.appendChild(footer);
}

export {createPage};