import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";
import "./styles/styles.css";

// homePage();

document
  .getElementsByClassName("tab-option")[0]
  .addEventListener("click", homePage);

document
  .getElementsByClassName("tab-option")[1]
  .addEventListener("click", menuPage);

document
  .getElementsByClassName("tab-option")[2]
  .addEventListener("click", contactPage);
