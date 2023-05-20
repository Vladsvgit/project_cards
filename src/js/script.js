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
import {
  renderCreateVisitForm,
  createVisit,
  VisitCardiologist,
  Visit,
} from "./createvisit.js";

import {renderAllCards} from "./renderCard.js"

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

