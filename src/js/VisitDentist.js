import {Visit} from "./Visit.js";
import {sectionCards} from './constant.js';
export class VisitDentist extends Visit {
<<<<<<< HEAD
    constructor(title, description, urgency, fullName, status, lastVisitDate) {
        super(title, description, urgency, fullName, status);
        this.lastVisitDate = lastVisitDate
    }
    sendToServer() {
        console.log(this);
        fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(this)
        })
            .then(response => response.json())
            .then(response => console.log(response))
=======
    constructor(doctor, title, description, urgency, fullName, lastVisitDate, status, id) {
        super(doctor, title, description, urgency, fullName, status, id);
        this.lastVisitDate = lastVisitDate
    }
    renderCard(){
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
                <li class="lastVisitDate">Last visit date : ${this.lastVisitDate}</li>
              </ul>
            </li>
            </ul>
            <button class="block-cards__edit btn">edit</button>
            <button class="block-cards__show btn">show more</button>
            <button class="block-cards__hide btn displNone">Show less</button>
            </div>
            `);
        const deleteBtn = document.querySelector('.block-cards__close')

        // const deleteBtn = document.querySelector(`#${this.id} .block-cards__close`)
        // deleteBtn.addEventListener('click', () => {
        //     super.deleteVisit()
        // });
>>>>>>> develop-main
    }

};