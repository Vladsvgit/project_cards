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
}

class Visit {
    constructor(purpose, discription, urgency, fullName) {
        this.purpose = purpose;
        this.discription = discription;
        this.urgency = urgency;
        this.fullName = fullName
    }
};
class VisitCardiologist extends Visit {
    constructor(purpose, discription, urgency, fullName, presure, bodyIndex, heartIllness, age) {
        super(purpose, discription, urgency, fullName);
        this.presure = presure;
        this.bodyIndex = bodyIndex;
        heartIllness = heartIllness;
        this.age = age
    }
};

class VisitDentist extends Visit {
    constructor(purpose, discription, urgency, fullName, lastVisitDate) {
        super(purpose, discription, urgency, fullName);
        this.lastVisitDate = lastVisitDate
    }
};

class VisitTherapist extends Visit {
    constructor(purpose, discription, urgency, fullName, age) {
        super(purpose, discription, urgency, fullName);
        this.age = age
    }
};

const visit = new Visit();
const visitDentist = new VisitDentist();
const visitCardiologist = new VisitCardiologist();
const visitTherapist = new VisitTherapist();