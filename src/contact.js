import "./styles/contact.css";

function contactPage() {
  let page = document.getElementById("pages");
  let contact = document.createElement("div");
  let div1 = document.createElement("div");
  let address = document.createElement("div");
  let iframe = document.createElement("iframe");
  let div2 = document.createElement("div");
  let callText = document.createElement("div");
  let phoneNum = document.createElement("div");



  while (page.firstChild) {
    page.removeChild(page.firstChild);
  }
  contact.classList.add("contact-page");
  address.classList.add("address");
  callText.classList.add("call-text");
  phoneNum.classList.add("phone-num");

  address.textContent = "20 W 34th St., New York, NY 10001"
  callText.textContent = "Call Now !"
  phoneNum.textContent = "(212) 454-0211"

  iframe.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24179.64956652621!2d-73.981813!3d40.75199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1691529284655!5m2!1sen!2sus";
  iframe.width = "400";
  iframe.height = "300";
  iframe.style.border = "0";
  iframe.allowfullscreen = true;
  iframe.loading = "lazy";
  iframe.referrerpolicy = "no-referrer-when-downgrade";

  page.appendChild(contact);
  contact.appendChild(div1);
  div1.appendChild(address);
  div1.appendChild(iframe);
  contact.appendChild(div2);
  div2.appendChild(callText);
  div2.appendChild(phoneNum);
  }

export default contactPage;
