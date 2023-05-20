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

//............................................................................................

//перенести в отдельный файл

const sectionCards = document.querySelector(".block-cards");
// const template = document.querySelector("#template");

// function createCardd({doctor,fullName,age,bpi,heartIllness,pressure,title,urgency,lastVisitDate}) {
//   let itemCard = template.content.cloneNode(true);

//   sectionCards.append(itemCard);
// {doctor,fullName,age,bpi,heartIllness,pressure,title,urgency,lastVisitDate}
// }
// {title,discription,urgency,fullName,pressure,bpi,heartIll,lastVisitDate,age,doctor,id}
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

function renderCard({
  title = "",
  discription = "",
  urgency = "",
  fullName = "",
  pressure = "",
  bpi = "",
  heartIll = "",
  lastVisitDate = "",
  age = "",
  doctor,
  id,
}) {
  sectionCards.insertAdjacentHTML(
    "beforeend",
    `<ul class="block-cards__cards-list">
  <li class="full-name">${fullName}</li>
  <li class="doctor">${doctor}</li>
  <li id="id" class="displNone">${id}</li>
  <li>
    <ul class="block-cards__sublist ">
      <li class="title">${title}</li>
      <li class="discription">${discription}</li>
      <li class="urgency">${urgency}</li>
      <li class="pressure">${pressure}</li>
      <li class="bodyIndex">${bpi}</li>
      <li class="heartIll">${heartIll}</li>
      <li class="age">${age}</li>
      <li class="lastVisitDate">${lastVisitDate}</li>
      
    </ul>
  </li>
  <button class="block-cards__close">x</button>
  <button class="block-cards__edit">edit</button>
  <button class="block-cards__show">show more</button>
</ul>`
  );
}
// displNone

renderCard(obj111);
renderCard(obj111);
renderCard(obj111);
