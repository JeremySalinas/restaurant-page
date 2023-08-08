import "./styles/home.css";

function homePage() {
  let page = document.getElementById("pages");
  let home = document.createElement("div");
  let chefName = document.createElement("div");
  let chef = document.createElement("div");
  let homeText = document.createElement("div");
  let orderText = document.createElement("div");

  while (page.firstChild) {
    page.removeChild(page.firstChild);
  }

  home.classList.add("home-page");

  chefName.classList.add("chef-name");
  chefName.textContent = "Chef Gordon Gigglesnort";

  chef.classList.add("chef");

  homeText.classList.add("home-text");
  homeText.textContent =
    '"They say the kitchen is the heart of the home. Well, my heart must be going through a midlife crisis."';

  orderText.classList.add("order-text");
  orderText.textContent = "order online or visit us !";

  page.appendChild(home);
  home.appendChild(chefName);
  home.appendChild(chef);
  home.appendChild(homeText);
  home.appendChild(orderText);
}

export default homePage;
