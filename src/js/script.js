import { loginBtn, createBtn, loginWind, unloginBtn, filterVisit, chooseDoctor, createVisitForm, token } from "./constant.js";

import { login } from "./login.js";
import { renderCreateVisitForm, createVisit } from "./createvisit.js"

//Проверка на сохраненный токен
document.addEventListener('DOMContentLoaded', () => {
    if (token && token !== "Incorrect username or password") {
        createBtn.classList.remove("displNone");
        unloginBtn.classList.remove("displNone");
        loginWind.classList.add("displNone");
        filterVisit.classList.remove("displNone");
        loginBtn.classList.add("displNone");
    }
})

// обработчик кнопки Create card
createBtn.addEventListener("click", () => {
    createVisitForm.classList.remove("displNone");
})

// Filter

filterVisit.addEventListener("submit", e => {
    e.preventDefault();
})

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
   const firstMessage = document.querySelector(".main__message");
   if(firstMessage){
       firstMessage.remove();
   }
});

chooseDoctor.addEventListener("change", e => {
    e.preventDefault();
    renderCreateVisitForm(e.target.value);
})

createVisitForm.addEventListener("submit", e => {
    e.preventDefault();
    createVisit(e.target);
    e.target.reset();
});


//Classes

class Modal {
    constructor() {

    }
}
const modal = new Modal();

