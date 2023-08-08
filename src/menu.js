// import "./styles/menu.css";

function menuPage() {
    let page = document.getElementById("pages");
  
    while (page.firstChild) {
      page.removeChild(page.firstChild);
    }
  }
  
  export default menuPage;