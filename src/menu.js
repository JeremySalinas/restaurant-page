import "./styles/menu.css";
import hambugerPNG from "./assets/burger.png"
import pizzaPNG from "./assets/pizza.png"
import salmonPNG from "./assets/Cooked-salmon-fish-fillet-on-transparent-background-PNG.png"

function menuPage() {
  let page = document.getElementById("pages");
  let menu = document.createElement("div");
  let topRow = document.createElement("div");

  let hamburger = document.createElement("div");
  let hamburgerIMG = document.createElement("img");
  let hamburgerText = document.createElement("div");
  let hamburgerTop = document.createElement("div");
  let hamburgerBot = document.createElement("div");

  let pizza = document.createElement("div");
  let pizzaIMG = document.createElement("img");
  let pizzaText = document.createElement("div");
  let pizzaTop = document.createElement("div");
  let pizzaBot = document.createElement("div");

  let salmon = document.createElement("div");
  let salmonIMG = document.createElement("img");
  let salmonText = document.createElement("div");
  let salmonTop = document.createElement("div");
  let salmonBot = document.createElement("div");

  while (page.firstChild) {
    page.removeChild(page.firstChild);
  }

  menu.classList.add("menu-page")
  topRow.classList.add("top-row")

  hamburger.classList.add("food-items")
  hamburgerIMG.src = hambugerPNG
  hamburgerIMG.alt = "hambuger"
  hamburgerText.classList.add("menu-text");
  hamburgerTop.textContent = "Cheese Burger with Drink"
  hamburgerBot.textContent = "$12.99"

  pizza.classList.add("food-items")
  pizzaIMG.src = pizzaPNG
  pizzaIMG.alt = "pizza"
  pizzaText.classList.add("menu-text");
  pizzaTop.textContent = 'Large 14" Pepperoni Pizza'
  pizzaBot.textContent = "$14.99"

  salmon.classList.add("food-items")
  salmonIMG.src = salmonPNG
  salmonIMG.alt = "salmon"
  salmonText.classList.add("menu-text");
  salmonTop.textContent = "Salmon with rice and vegetables"
  salmonBot.textContent = "$12.99"


  page.appendChild(menu);
  menu.appendChild(topRow);
  menu.appendChild(salmon);
  topRow.appendChild(hamburger);
  topRow.appendChild(pizza);

  hamburger.appendChild(hamburgerIMG);
  hamburger.appendChild(hamburgerText);
  hamburgerText.appendChild(hamburgerTop);
  hamburgerText.appendChild(hamburgerBot);

  pizza.appendChild(pizzaIMG);
  pizza.appendChild(pizzaText);
  pizzaText.appendChild(pizzaTop);
  pizzaText.appendChild(pizzaBot);

  salmon.appendChild(salmonIMG);
  salmon.appendChild(salmonText);
  salmonText.appendChild(salmonTop);
  salmonText.appendChild(salmonBot);
}

export default menuPage;
