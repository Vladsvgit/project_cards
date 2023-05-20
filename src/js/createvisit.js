import { createVisitForm, chooseDoctor, titleInput, discriptionInput, urgencyInput, nameInput, preassureInput, bmiInput, heartIllInput, ageInput, lastVisitInput, createVisitBtn, cancelVisitBtn, token } from "./constant.js";



export const renderCreateVisitForm = function (doctor) {
    if (doctor === "Cardiologist") {
        titleInput.classList.remove("displNone");
        discriptionInput.classList.remove("displNone");
        urgencyInput.classList.remove("displNone");
        nameInput.classList.remove("displNone");
        preassureInput.classList.remove("displNone");
        preassureInput.lastElementChild.required = true;

        bmiInput.classList.remove("displNone");
        bmiInput.lastElementChild.required = true;

        heartIllInput.classList.remove("displNone");
        heartIllInput.lastElementChild.required = true;

        ageInput.classList.remove("displNone");
        ageInput.lastElementChild.required = true;

        lastVisitInput.classList.add("displNone");
        lastVisitInput.lastElementChild.required = false;

        createVisitBtn.classList.remove("displNone");
        cancelVisitBtn.classList.remove("displNone");

        return;
    } else if (doctor === "Dentist") {
        titleInput.classList.remove("displNone");
        discriptionInput.classList.remove("displNone");
        urgencyInput.classList.remove("displNone");
        nameInput.classList.remove("displNone");
        preassureInput.classList.add("displNone");
        preassureInput.lastElementChild.required = false;

        bmiInput.classList.add("displNone");
        bmiInput.lastElementChild.required = false;

        heartIllInput.classList.add("displNone");
        heartIllInput.lastElementChild.required = false;

        ageInput.classList.add("displNone");
        ageInput.lastElementChild.required = false;

        lastVisitInput.classList.remove("displNone");
        lastVisitInput.lastElementChild.required = true;

        createVisitBtn.classList.remove("displNone");
        cancelVisitBtn.classList.remove("displNone");
        return;
    } else if (doctor === "Therapist") {
        titleInput.classList.remove("displNone");
        discriptionInput.classList.remove("displNone");
        urgencyInput.classList.remove("displNone");
        nameInput.classList.remove("displNone");
        preassureInput.classList.add("displNone");
        preassureInput.lastElementChild.required = false;

        bmiInput.classList.add("displNone");
        bmiInput.lastElementChild.required = false;

        heartIllInput.classList.add("displNone");
        heartIllInput.lastElementChild.required = false;

        lastVisitInput.classList.add("displNone");
        lastVisitInput.lastElementChild.required = false;

        ageInput.classList.remove("displNone");
        ageInput.lastElementChild.required = true;

        createVisitBtn.classList.remove("displNone");
        cancelVisitBtn.classList.remove("displNone");
        return;
    }
};


export const createVisit = (target) => {
    if (chooseDoctor.value === "Cardiologist") {
        const visitCardiologist = new VisitCardiologist(target.title.value, target.discription.value, target.urgency.value, target.name.value, target.pressure.value, target.bmi.value, target.heartIll.value, target.age.value);
        visitCardiologist.sendToServer();
    } else if (chooseDoctor.value === "Dentist") {
        const visitDentist = new VisitDentist(target.title.value, target.discription.value, target.urgency.value, target.name.value, target.lastVisit.value);
        visitDentist.sendToServer();
    } else if (chooseDoctor.value === "Therapist") {
        const visitTherapist = new VisitTherapist(target.title.value, target.discription.value, target.urgency.value, target.name.value, target.age.value);
        visitTherapist.sendToServer();
    }
}

export const cancelVisitForm = () => {
    createVisitForm.classList.add("displNone");
}

class Visit {
    constructor(title, discription, urgency, fullName) {
        this.title = title;
        this.discription = discription;
        this.urgency = urgency;
        this.fullName = fullName
    }
};
class VisitCardiologist extends Visit {
    constructor(title, discription, urgency, fullName, pressure, bodyIndex, heartIll, age) {
        super(title, discription, urgency, fullName);
        this.pressure = pressure;
        this.bodyIndex = bodyIndex;
        this.heartIll = heartIll;
        this.age = age
    }
    sendToServer() {
        // console.log(this);
        fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                doctor: 'Cardiologist',
                title: this.title,
                description: this.description,
                urgency: this.urgency,
                fullName: this.fullName,
                pressure: this.pressure,
                bpi: this.bodyIndex,
                heartIllness: this.heartIll,
                age: this.age
            })
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }

};

class VisitDentist extends Visit {
    constructor(title, discription, urgency, fullName, lastVisitDate) {
        super(title, discription, urgency, fullName);
        this.lastVisitDate = lastVisitDate
    }
    sendToServer() {
        // console.log(this);
        fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                doctor: 'Dentist',
                title: this.title,
                description: this.description,
                urgency: this.urgency,
                fullName: this.fullName,
                lastVisitDate: this.lastVisitDate
            })
        })
            .then(response => response.json())
            .then(response => console.log(response))

    }
};

class VisitTherapist extends Visit {
    constructor(purpose, discription, urgency, fullName, age) {
        super(purpose, discription, urgency, fullName);
        this.age = age
    }
    sendToServer() {
        // console.log(this);
        fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                doctor: 'Therapist',
                title: this.title,
                description: this.description,
                urgency: this.urgency,
                fullName: this.fullName,
                age: this.age
            })
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }
};