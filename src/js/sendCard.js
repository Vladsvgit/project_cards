import { VisitCardiologist } from "./VisitCardiologist.js";
import { VisitDentist } from "./VisitDentist.js";
import { VisitTherapist } from "./VisitTherapist.js";
import { token } from "./constant.js";
import { editCard } from "./api.js";

//................................................................
function assignValuesFormCardiologist(obj) {
  let {
    doctor,
    title,
    description,
    urgency,
    fullName,
    pressure,
    bodyIndex,
    heartIll,
    age,
    status,
    id,
  } = obj;
  const valueDefault = new VisitCardiologist(
    doctor,
    title,
    description,
    urgency,
    fullName,
    pressure,
    bodyIndex,
    heartIll,
    age,
    status,
    id
  );
  valueDefault.renderSendForm(document.body);
  let currentSendForm = document.querySelector(".send-form");
  getDefaultStatus(valueDefault,currentSendForm);
  getDefaultUrgency(valueDefault,currentSendForm);
  currentSendForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let sendObj = new VisitCardiologist(
      valueDefault.doctor,
      currentSendForm.title.value,
      currentSendForm.description.value,
      currentSendForm.urgency.value,
      currentSendForm.fullName.value,
      currentSendForm.pressure.value,
      currentSendForm.bodyIndex.value,
      currentSendForm.heartIll.value,
      currentSendForm.age.value,
      currentSendForm.status.value,
      valueDefault.id
    );
    editCard(sendObj, sendObj.id, token);
    currentSendForm.remove();
  });
}

function assignValuesFormDentist(obj) {
  let {
    doctor,
    title,
    description,
    urgency,
    fullName,
    lastVisitDate,
    status,
    id,
  } = obj;
  const valueDefault = new VisitDentist(
    doctor,
    title,
    description,
    urgency,
    fullName,
    lastVisitDate,
    status,
    id
  );
  valueDefault.renderSendForm(document.body);
  let currentSendForm = document.querySelector(".send-form");
  getDefaultStatus(valueDefault,currentSendForm);
  getDefaultUrgency(valueDefault,currentSendForm);
  currentSendForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let sendObj = new VisitDentist(
      valueDefault.doctor,
      currentSendForm.title.value,
      currentSendForm.description.value,
      currentSendForm.urgency.value,
      currentSendForm.fullName.value,
      currentSendForm.lastVisitDate.value,
      currentSendForm.status.value,
      valueDefault.id
    );
    editCard(sendObj, sendObj.id, token);
    currentSendForm.remove();
  });
}

function assignValuesFormTherapist(obj) {
  let { doctor, title, description, urgency, fullName, age, status, id } = obj;
  const valueDefault = new VisitTherapist(
    doctor,
    title,
    description,
    urgency,
    fullName,
    age,
    status,
    id
  );
  valueDefault.renderSendForm(document.body);
  let currentSendForm = document.querySelector(".send-form");
  getDefaultStatus(valueDefault,currentSendForm);
  getDefaultUrgency(valueDefault,currentSendForm);
  currentSendForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let sendObj = new VisitTherapist(
      valueDefault.doctor,
      currentSendForm.title.value,
      currentSendForm.description.value,
      currentSendForm.urgency.value,
      currentSendForm.fullName.value,
      currentSendForm.age.value,
      currentSendForm.status.value,
      valueDefault.id
    );
    editCard(sendObj, sendObj.id, token);
    currentSendForm.remove();
  });
}

export function getCurrentDoctor(card) {
  if (card.doctor == "Cardiologist") {
    assignValuesFormCardiologist(card);
  } else if (card.doctor == "Dentist") {
    assignValuesFormDentist(card);
  } else if (card.doctor == "Therapist") {
    assignValuesFormTherapist(card);
  } else {
    console.log("doctor not found");
  }
}

function getDefaultUrgency(objCard, root) {
  if(objCard.urgency == "High"){
root.urgency[0].setAttribute("selected",'');
  }else if(objCard.urgency == "Normal"){
    root.urgency[1].setAttribute("selected",'');
  }else if(objCard.urgency == "Low"){
    root.urgency[2].setAttribute("selected",'');
  }
}

function getDefaultStatus(objCard, root) {
  if(objCard.status == "Open"){
root.status[0].setAttribute("selected",'');
  }else if(objCard.status == "Done"){
    root.status[1].setAttribute("selected",'');
  }
}