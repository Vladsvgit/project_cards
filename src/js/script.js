import { loginBtn, createBtn, loginWind, unloginBtn, filterVisit, chooseDoctor, titleInput, discriptionInput, urgencyInput, nameInput, preassureInput, bmiInput, heartIllInput, ageInput, lastVisitInput, createVisitBtn, createVisitWind } from "./constant.js";

import { login } from "./login.js";
import {renderCreateVisitForm} from "./createvisit.js"

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
    createVisitWind.classList.add("displNone");
    document.querySelector(".main__message").remove();
});

chooseDoctor.addEventListener("change", e => {
    e.preventDefault();
    renderCreateVisitForm(e.target.value);
    console.log(e.target.value);
})

//Classes

class Modal {
    constructor() {

    }
}
const modal = new Modal();