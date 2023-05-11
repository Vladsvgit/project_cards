import { chooseDoctor, titleInput, discriptionInput, urgencyInput, nameInput, preassureInput, bmiInput, heartIllInput, ageInput, lastVisitInput, createVisitBtn } from "./constant.js";


export const renderCreateVisitForm = (doctor) => {
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
        return;
    }
};

export const createVisit = () => {
    if (chooseDoctor.value === "Cardiologist") {
        const visitCardiologist = new VisitCardiologist(titleInput.value, discriptionInput.value, urgencyInput.value, nameInput.value, preassureInput.value, preassureInput.value, bmiInput.value, heartIllInput.value, ageInput.value);
        visitCardiologist.sendToServer();
    } else if (chooseDoctor.value === "Dentist") {
        const visitDentist = new VisitDentist(titleInput.value, discriptionInput.value, urgencyInput.value, nameInput.value, preassureInput.value, preassureInput.value, bmiInput.value, heartIllInput.value, ageInput.value);
        visitDentist.sendToServer();
    } else if (chooseDoctor.value === "Therapist") {
        const visitTherapist = new VisitTherapist(titleInput.value, discriptionInput.value, urgencyInput.value, nameInput.value, preassureInput.value, preassureInput.value, bmiInput.value, heartIllInput.value, ageInput.value);
        visitTherapist.sendToServer();
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
        this.heartIllness = heartIllness;
        this.age = age
    }
    sendToServer() {
        console.log(this);
    }

};

class VisitDentist extends Visit {
    constructor(title, discription, urgency, fullName, lastVisitDate) {
        super(title, discription, urgency, fullName);
        this.lastVisitDate = lastVisitDate
    }
    sendToServer() {
        console.log(this);

    }
};

class VisitTherapist extends Visit {
    constructor(purpose, discription, urgency, fullName, age) {
        super(purpose, discription, urgency, fullName);
        this.age = age
    }
    sendToServer() {
        console.log(this);

    }
};

// const visit = new Visit();
// const visitDentist = new VisitDentist();
// const
// const visitTherapist = new VisitTherapist();