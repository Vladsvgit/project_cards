const loginBtn = document.querySelector(".header__btn--login");
const createBtn = document.querySelector(".header__btn--create");
const unloginBtn = document.querySelector(".header__btn--unlogin");
const loginWind = document.querySelector(".login");
const filterVisit = document.querySelector(".filterVisits");

import login from "./login.js";

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginBtn.classList.remove("displNone");
    loginWind.classList.remove("displNone");
})

const loginBtnReg = document.querySelector(".login__btn");
loginBtnReg.addEventListener("click", (e) => {
    e.preventDefault();
    login();

    const tokenRequest =
        fetch("https://ajax.test-danit.com/api/v2/cards/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: 'AVY@gmail.com', password: 'step3AVY' })
        })
            .then(response => response.text())
            .then(data => console.log(data))
            .then(token => {
                localStorage.setItem('token', token)
                //console.log(token);
            })
            .catch((err) => alert("Please login again"));

    tokenRequest
        .then(() => {
            createBtn.classList.remove("displNone");
            unloginBtn.classList.remove("displNone");
            loginWind.classList.add("displNone");
            filterVisit.classList.remove("displNone");

            const visits = fetch("https://ajax.test-danit.com/api/v2/cards", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            visits
                .then(response => response.json())
                .then(data => console.log(data))
                .then((data) => {
                    if (data.length === 0) {
                        alert("No items have been added");
                    }
                    console.log(data.length);
                })
                .then(() => {
                    createBtn.addEventListener("click", () => {
                        document.querySelector(".createVisit").classList.toggle("displNone")
                    })
                });
        })
        .catch(err => alert(err))
})

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