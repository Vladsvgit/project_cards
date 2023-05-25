import {sectionCards} from './constant.js';

import {VisitCardiologist} from "./VisitCardiologist.js";
import {VisitDentist} from "./VisitDentist.js";
import {VisitTherapist} from "./VisitTherapist.js";

export function renderAllCards(arrayCards) {
  arrayCards.forEach((element) => {
    if (element.doctor === "Cardiologist") {
      const visitCardiologist = new VisitCardiologist(element.doctor, element.title, element.description, element.urgency, element.fullName, element.pressure, element.bodyIndex, element.heartIll, element.age, element.status, element.id)
      visitCardiologist.renderCard();
    } else if (element.doctor === "Dentist") {
      const visitDentist = new VisitDentist(element.doctor, element.title, element.description, element.urgency, element.fullName, element.lastVisitDate, element.status, element.id)
      visitDentist.renderCard();
    } else if (element.doctor === "Therapist") {
      const visitTherapist = new VisitTherapist(element.doctor, element.title, element.description, element.urgency, element.fullName, element.age, element.status, element.id)
      visitTherapist.renderCard();
    }
  });
}

sectionCards.addEventListener("click", (e) => {
      if (e.target.classList.contains("block-cards__show") || e.target.classList.contains("block-cards__hide")) {
        let elem = e.target.closest(".block-card");

        let subtext = elem.querySelector(".block-cards__sublist");
        let btnMore = elem.querySelector(".block-cards__show");
        let btnLess = elem.querySelector(".block-cards__hide");

        subtext.classList.toggle("displNone");
        btnMore.classList.toggle("displNone");
        btnLess.classList.toggle("displNone");
      }
    }
)
