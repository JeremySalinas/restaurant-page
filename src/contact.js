function contactPage() {
  let page = document.getElementById("pages");

  while (page.firstChild) {
    page.removeChild(page.firstChild);
  }
}

export default contactPage;
