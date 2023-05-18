import {
  loginBtn,
  createBtn,
  loginWind,
  unloginBtn,
  filterVisit,
  chooseDoctor,
  createVisitForm,
} from "./constant.js";

import { login } from "./login.js";
import { renderCreateVisitForm, createVisit } from "./createvisit.js";

//  if (token) {

//  }

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginBtn.classList.add("displNone");
  loginWind.classList.remove("displNone");
  login();
});

unloginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("token");
  createBtn.classList.add("displNone");
  unloginBtn.classList.add("displNone");
  loginBtn.classList.remove("displNone");
  filterVisit.classList.add("displNone");
  createVisitForm.classList.add("displNone");
  document.querySelector(".main__message").remove();
});

chooseDoctor.addEventListener("change", (e) => {
  e.preventDefault();
  renderCreateVisitForm(e.target.value);
});

createVisitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createVisit(e.target);
  e.target.reset();
});

//Classes

class Modal {
  constructor() {}
}
const modal = new Modal();

//перенести в отдельный файл

const obj111 = {
  age: "32",
  bpi: "12",
  doctor: "Cardiologist",
  fullName: "Artem Lyasenko",
  heartIllness: "Ok",
  id: 170513,
  pressure: "120/80",
  title: "Heart ill",
  urgency: "High",
};

const sectionCards = document.querySelector(".block-cards");
const template = document.querySelector("#template");

// function createCardd({doctor,fullName,age,bpi,heartIllness,pressure,title,urgency,lastVisitDate}) {
//   let itemCard = template.content.cloneNode(true);
  
//   sectionCards.append(itemCard);
// {doctor,fullName,age,bpi,heartIllness,pressure,title,urgency,lastVisitDate}
// }
function createCardd({doctor,fullName,age,bpi,heartIllness,pressure,title,urgency,lastVisitDate}) {

  sectionCards.insertAdjacentHTML("beforeend", `<ul class="block-cards__cards-list">
  <li id="full-name">${fullName}</li>
  <li id="doctor">${doctor}</li>
  <li id="id" class="displNone"></li>
  <li>
    <ul class="block-cards__sublist displNone">
      <li id="title">3333</li>
      <li id="discription">4444</li>
      <li id="urgency">5555</li>
      <li id="pressure">6666</li>
      <li id="bodyIndex"></li>
      <li id="heartIll">8888</li>
      <li id="age"></li>
      <li id="lastVisitDate">1</li>
      
    </ul>
  </li>
  <button class="block-cards__close"></button>
  <button class="block-cards__edit">edit</button>
  <button class="block-cards__show">show more</button>
</ul>`);

}

createCardd();
createCardd();
createCardd();
