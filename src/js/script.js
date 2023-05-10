import { loginBtn, createBtn, loginWind, unloginBtn } from "./constant.js";

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
    createBtn.classList.toggle("displNone");
    unloginBtn.classList.toggle("displNone");
    loginBtn.classList.toggle("displNone");
    filterVisit.classList.add("displNone");

})

//Classes

class Modal {
    constructor() {

    }
}

class Visit {
    constructor(purpose, discription, urgency, fullName) {
        this.purpose = purpose;
        this.discription = discription;
        this.urgency = urgency;
        this.fullName = fullName
    }
}

class VisitDentist extends Visit {
    constructor(purpose, discription, urgency, fullName, lastVisitDate) {
        super(purpose, discription, urgency, fullName);
        this.lastVisitDate = lastVisitDate
    }
}

class VisitCardiologist extends Visit {
    constructor(purpose, discription, urgency, fullName, presure, bodyIndex, heartIllness, age) {
        super(purpose, discription, urgency, fullName);
        this.presure = presure;
        this.bodyIndex = bodyIndex;
        heartIllness = heartIllness;
        this.age = age
    }

}

class VisitTherapist extends Visit {
    constructor(purpose, discription, urgency, fullName, age) {
        super(purpose, discription, urgency, fullName);
        this.age = age
    }
}

const modal = new Modal();
const visit = new Visit();
const visitDentist = new VisitDentist();
const visitCardiologist = new VisitCardiologist();
const visitTherapist = new VisitTherapist();