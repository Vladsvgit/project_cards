import {
    createVisitForm,
    chooseDoctor,
    titleInput,
    descriptionInput,
    urgencyInput,
    nameInput,
    preassureInput,
    bmiInput,
    heartIllInput,
    ageInput,
    lastVisitInput,
    createVisitBtnBlock,
} from "./constant.js";
import {VisitCardiologist} from "./VisitCardiologist.js";
import {VisitDentist} from "./VisitDentist.js";
import {VisitTherapist} from "./VisitTherapist.js";


export const renderCreateVisitForm = function (doctor) {
    if (doctor === "Cardiologist") {
        titleInput.classList.remove("displNone");
        descriptionInput.classList.remove("displNone");
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

        createVisitBtnBlock.classList.remove("displNone");
        return;

    } else if (doctor === "Dentist") {
        titleInput.classList.remove("displNone");
        descriptionInput.classList.remove("displNone");
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

        createVisitBtnBlock.classList.remove("displNone");
        return;

    } else if (doctor === "Therapist") {
        titleInput.classList.remove("displNone");
        descriptionInput.classList.remove("displNone");
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

        createVisitBtnBlock.classList.remove("displNone");
        return;
    }
};

export const createVisit = (target) => {
    if (chooseDoctor.value === "Cardiologist") {
        const visitCardiologist = new VisitCardiologist(target.chooseDoctor.value, target.title.value, target.description.value, target.urgency.value, target.name.value, target.pressure.value, target.bmi.value, target.heartIll.value, target.age.value);
        visitCardiologist.renderCard()
        visitCardiologist.sendToServer();
    } else if (chooseDoctor.value === "Dentist") {
        const visitDentist = new VisitDentist(target.chooseDoctor.value, target.title.value, target.description.value, target.urgency.value, target.name.value, target.lastVisit.value);
        visitDentist.renderCard()
        visitDentist.sendToServer();
    } else if (chooseDoctor.value === "Therapist") {
        const visitTherapist = new VisitTherapist(target.chooseDoctor.value, target.title.value, target.description.value, target.urgency.value, target.name.value, target.age.value);
        visitTherapist.renderCard()
        visitTherapist.sendToServer();
    }
}

export const cancelVisitForm = () => {
    createVisitForm.classList.add("displNone");
}


//................................................................
export const sendVisit = (doctor) => {
    if (doctor === "Cardiologist") {
        const visitCardiologist = new VisitCardiologist(target.title.value, target.description.value, target.urgency.value, target.name.value, target.pressure.value, target.bmi.value, target.heartIll.value, target.age.value);
        visitCardiologist.sendToServer();

    } else if (doctor === "Dentist") {
        const visitDentist = new VisitDentist(target.title.value, target.description.value, target.urgency.value, target.name.value, target.lastVisit.value);
        visitDentist.sendToServer();
    } else if (doctor === "Therapist") {
        const visitTherapist = new VisitTherapist(target.title.value, target.description.value, target.urgency.value, target.name.value, target.age.value);
        visitTherapist.sendToServer();
    }
}
