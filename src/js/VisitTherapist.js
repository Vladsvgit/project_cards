import {Visit} from "./Visit.js";
import {sectionCards} from './constant.js';
export class VisitTherapist extends Visit {
    constructor(doctor, title, description, urgency, fullName, age, status, id) {
        super(doctor, title, description, urgency, fullName, status, id);
        this.age = age
    }

    renderCard() {
        sectionCards.insertAdjacentHTML(
            "beforeend",
            `<div class="block-card card" id="${this.id}">
              <button class="block-cards__close btn">x</button>
            <ul>
            <li class="full-name">Fullname : ${this.fullName}</li>
            <li class="doctor">Doctor : ${this.doctor}</li>
            <li>
              <ul class="block-cards__sublist displNone">
                <li class="title">Title : ${this.title}</li>
                <li class="description">Description : ${this.description}</li>
                <li class="urgency">Urgency : ${this.urgency}</li>
                <li class="age">Age : ${this.age}</li>
              </ul>
            </li>
            </ul>
            <button class="block-cards__edit btn">edit</button>
            <button class="block-cards__show btn" onclick= "">show more</button>
            <button class="block-cards__hide btn displNone">Show less</button>
            </div>
            `);
        // const deleteBtn = document.querySelector(`#${this.id} .block-cards__close`)
        // deleteBtn.addEventListener('click', () => {
        //     super.deleteVisit()
        // });
    }

};