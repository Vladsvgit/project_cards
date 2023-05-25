import { Visit } from "./Visit.js";
import {sectionCards} from './constant.js';
export class VisitCardiologist extends Visit {
<<<<<<< HEAD
    constructor(title, description, urgency, fullName, status, pressure, bodyIndex, heartIll, age) {
        super(title, description, urgency, fullName, status);
=======
    constructor(doctor, title, description, urgency, fullName, pressure, bodyIndex, heartIll, age, status,  id) {
        super(doctor, title, description, urgency, fullName,status , id);
>>>>>>> develop-main
        this.pressure = pressure;
        this.bodyIndex = bodyIndex;
        this.heartIll = heartIll;
        this.age = age
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
            <li class="status">Status : ${this.status}</li>
            <li class="pressure">Pressure : ${this.pressure}</li>
            <li class="bodyIndex">BodyIndex : ${this.bodyIndex}</li>
            <li class="heartIll">HeartIll : ${this.heartIll}</li>
            <li class="age">Age : ${this.age}</li>
          </ul>
        </li>
        </ul>
        <button class="block-cards__edit btn">edit</button>
        <button class="block-cards__show btn">show more</button>
        <button class="block-cards__hide btn displNone">Show less</button>
        </div>
        `);
        // const deleteBtn = document.querySelector(`#${this.id} .block-cards__close`)
        // deleteBtn.addEventListener('click', () => {
        //     super.deleteVisit()
        // });

    }

<<<<<<< HEAD
    renderCardiologist(root, objectCard) {
        let { fullName, id, title, description, urgency, pressure, bpi, heartIll, age } = objectCard;
        root.insertAdjacentHTML(
            "beforeend",
            `<ul class="block-cards__cards-list">
  <li class="full-name">Fullname : ${fullName}</li>
  <li class="doctor">Doctor : Cardiologist</li>
  <li id="${id}" class="displNone">${id}</li>
  <li>
    <ul class="block-cards__sublist ">
      <li class="title">Title : ${title}</li>
      <li class="description">Description : ${description}</li>
      <li class="urgency">Urgency : ${urgency}</li>
      <li class="pressure">Pressure : ${pressure}</li>
      <li class="bodyIndex">BodyIndex : ${bpi}</li>
      <li class="heartIll">HeartIll : ${heartIll}</li>
      <li class="age">Age : ${age}</li>
    </ul>
  </li>
  <button class="block-cards__close">x</button>
  <button class="block-cards__edit">edit</button>
  <button class="block-cards__show">show more</button>
</ul>`
        );
    }
=======
>>>>>>> develop-main
}