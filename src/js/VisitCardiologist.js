import { Visit } from "./Visit.js";

export class VisitCardiologist extends Visit {
    constructor(title, description, urgency, fullName, status, pressure, bodyIndex, heartIll, age) {
        super(title, description, urgency, fullName, status);
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
                status: "Open",
                pressure: this.pressure,
                bpi: this.bodyIndex,
                heartIllness: this.heartIll,
                age: this.age
            })
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }

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
}