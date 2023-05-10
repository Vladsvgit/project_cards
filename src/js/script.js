import { loginBtn, createBtn, loginWind, unloginBtn, filterVisit, chooseDoctor, titleInput, discriptionInput, urgencyInput, nameInput, preassureInput, bmiInput, heartIllInput, ageInput, lastVisitInput, createVisitBtn, createVisitWind } from "./constant.js";

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
    createVisitWind.classList.add("displNone");
    document.querySelector(".main__message").remove();
});

chooseDoctor.addEventListener("change", e => {
    e.preventDefault();

    if (e.target.value === "Cardiologist") {
        titleInput.classList.remove("displNone");
        discriptionInput.classList.remove("displNone");
        urgencyInput.classList.remove("displNone");
        nameInput.classList.remove("displNone");
        preassureInput.classList.remove("displNone");
        bmiInput.classList.remove("displNone");
        heartIllInput.classList.remove("displNone");
        ageInput.classList.remove("displNone");
        lastVisitInput.classList.add("displNone");
        createVisitBtn.classList.remove("displNone");
        return;
    } else if (e.target.value === "Dentist") {
        titleInput.classList.remove("displNone");
        discriptionInput.classList.remove("displNone");
        urgencyInput.classList.remove("displNone");
        nameInput.classList.remove("displNone");
        preassureInput.classList.add("displNone");
        bmiInput.classList.add("displNone");
        heartIllInput.classList.add("displNone");
        ageInput.classList.add("displNone");
        lastVisitInput.classList.remove("displNone");
        createVisitBtn.classList.remove("displNone");
        return;
    } else if (e.target.value === "Therapist") {
        titleInput.classList.remove("displNone");
        discriptionInput.classList.remove("displNone");
        urgencyInput.classList.remove("displNone");
        nameInput.classList.remove("displNone");
        preassureInput.classList.add("displNone");
        bmiInput.classList.add("displNone");
        heartIllInput.classList.add("displNone");
        lastVisitInput.classList.add("displNone");
        ageInput.classList.remove("displNone");
        createVisitBtn.classList.remove("displNone");
        return;
    }

    console.log(e.target.value);
})



//Classes

class Modal {
    constructor() {

    }
}
const modal = new Modal();