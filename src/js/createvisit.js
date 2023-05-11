import {  titleInput, discriptionInput, urgencyInput, nameInput, preassureInput, bmiInput, heartIllInput, ageInput, lastVisitInput, createVisitBtn } from "./constant.js";


export const renderCreateVisitForm = (doctor) => {
    if (doctor === "Cardiologist") {
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
    } else if (doctor === "Dentist") {
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
    } else if (doctor === "Therapist") {
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
};

export const createVisit = () => {
    if (chooseDoctor.value === "Cardiologist") {
        const visitCardiologist = new VisitCardiologist();
        visitCardiologist.sendToServer()
    } else if (chooseDoctor.value === "Dentist") {
        const visitDentist = new VisitDentist();
        visitDentist.sendToServer();
    }
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
    constructor(title, discription, urgency, fullName, presure, bodyIndex, heartIllness, age) {
        super(title, discription, urgency, fullName);
        this.presure = presure;
        this.bodyIndex = bodyIndex;
        heartIllness = heartIllness;
        this.age = age
    }
};

class VisitDentist extends Visit {
    constructor(title, discription, urgency, fullName, lastVisitDate) {
        super(title, discription, urgency, fullName);
        this.lastVisitDate = lastVisitDate
    }
};

class VisitTherapist extends Visit {
    constructor(purpose, discription, urgency, fullName, age) {
        super(purpose, discription, urgency, fullName);
        this.age = age
    }
};

// const visit = new Visit();
// const visitDentist = new VisitDentist();
// const 
// const visitTherapist = new VisitTherapist();