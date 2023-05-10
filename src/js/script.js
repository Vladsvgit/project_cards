import { loginBtn, createBtn, loginWind, unloginBtn, filterVisit, chooseDoctor, titleInput, discriptionInput, urgencyInput, nameInput } from "./constant.js";

import { login } from "./login.js";

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
});

chooseDoctor.addEventListener("change", e => {
    e.preventDefault();
    console.log(titleInput);
    titleInput.classList.remove(".displNone");
    discriptionInput.classList.remove(".displNone");
    urgencyInput.classList.remove(".displNone");
    nameInput.classList.remove(".displNone");

    console.log(e.target.value);
})



//Classes

class Modal {
    constructor() {

    }
}
const modal = new Modal();