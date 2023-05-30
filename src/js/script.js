import {
  loginBtn,
  createBtn,
  loginWind,
  unloginBtn,
  filterVisit,
  chooseDoctor,
  createVisitForm,
  cancelVisitBtn,
  token,
  sectionCards,
} from "./constant.js";

import { login, noCardsMessage } from "./login.js";
import {
  renderCreateVisitForm,
  createVisit,
  cancelVisitForm,
} from "./createvisit.js";
import { filter, filterData } from "./filter.js";
import { renderAllCards } from "./renderCard.js";
import { getAllCardsApi, dataBase } from "./api.js";
import { Visit } from "./Visit.js";
import {getCurrentDoctor} from "./sendCard.js";
//  import { VisitCardiologist} from "./VisitCardiologist.js";
//  import { VisitDentist} from "./VisitDentist.js";
//  import { VisitTherapist} from "./VisitTherapist.js";

//Проверка на сохраненный токен
document.addEventListener("DOMContentLoaded", () => {
  if (token && token !== "Incorrect username or password") {
    createBtn.classList.remove("displNone");
    unloginBtn.classList.remove("displNone");
    loginWind.classList.add("displNone");
    filterVisit.classList.remove("displNone");
    loginBtn.classList.add("displNone");
    getAllCardsApi(token);
  }
});

// обработчик кнопки Create card
createBtn.addEventListener("click", () => {
  createVisitForm.classList.remove("displNone");
  const createVisitFormChilren = createVisitForm.querySelectorAll("div");
  createVisitFormChilren.forEach((elem) => {
    elem.classList.add("displNone");
  });
  createVisitFormChilren[0].classList.remove("displNone");
});

// Filter

filterVisit.addEventListener("submit", (e) => {
  e.preventDefault();
  sectionCards.innerHTML = "";
  const inputPurpose = document.querySelector(".filterVisits__purpose").value;
  const selectedStatus = document.querySelector(".filterVisits__status").value;
  const selectedUrgency = document.querySelector(
    ".filterVisits__urgency"
  ).value;
  filter(inputPurpose, selectedStatus, selectedUrgency);
  console.log(filterData);
  renderAllCards(filterData);

  if (filterData.length === 0) {
    noCardsMessage("There are no cards matching the search criteria");
  } else if (document.querySelector(".main__message")) {
    document.querySelector(".main__message").remove();
  }
  e.target.reset();
});

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
  if (document.querySelector(".main__message")) {
    document.querySelector(".main__message").remove();
  }
  sectionCards.innerHTML = "";
});

chooseDoctor.addEventListener("change", (e) => {
  e.preventDefault();
  renderCreateVisitForm(e.target.value);
});

createVisitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createVisit(e.target);
  e.target.reset();
  cancelVisitForm();
});

cancelVisitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cancelVisitForm();
});


//................................................................
// изменение карточки

sectionCards.addEventListener("click", (event) => {
  if (event.target.classList.contains("block-cards__edit")) {
    let targetBlockCard = event.target.closest(".block-card");
    dataBase.forEach((currentObject) => {
      if (currentObject.id == targetBlockCard.id) {
        getCurrentDoctor(currentObject);
      }
    });
  }
});

//................................................................

sectionCards.onclick = (e) => {
  if (e.target.classList.contains("block-cards__close")) {
    const card = e.target.closest(".block-card");
    console.log(card.id);
    const visitDel = new Visit();
    visitDel.deleteVisit(card.id);
  }
};



