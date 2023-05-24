import { Visit } from "./Visit.js";
// import{editCard} from "./api.js";
import {createVisitForm} from "./constant.js";
import {renderCreateVisitForm} from "./createvisit.js";

export class VisitCardiologist extends Visit {
    constructor(title, description, urgency, fullName, pressure, bodyIndex, heartIll, age, id = null) {
        super(title, description, urgency, fullName, id);
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
      <li class="description">description : ${description}</li>
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

    sendForm(root) {
        root.insertAdjacentHTML(
            "beforeend",
        `<form action="" method="get" class="main__createVisit">
            <div class="main__createVisit__doctor">
                <label for="Doctor">Doctor </label>
                <select class="main__createVisit__doctors">
                    <option class="main__createVisit__doc" value="hide">-- Choose doctor --</option>
                    <option class="main__createVisit__doc" value="Cardiologist" selected >Cardiologist</option>
                    <option class="main__createVisit__doc" value="Dentist">Dentist</option>
                    <option class="main__createVisit__doc" value="Therapist">Therapist</option>
                </select>
            </div>

            <div class="main__createVisit__title ">
                <label for="title">Aim of visit:</label>
                <input type="text" name="title" value= ${this.title} required>
            </div>

            <div class="main__createVisit__description ">
                <label for="description">Short description visit: </label>
                <input type="text" name="description" value= ${this.description} required>
            </div>

            <div class="main__createVisit__urgency ">
                <label for="Urgency">Urgency </label>
                <select class="createVisit__urgency__status" name="urgency">
                    <option class="createVisit__urgency__item" value="No selected">-- Please select --</option>
                    <option class="createVisit__urgency__item" value="High">High</option>
                    <option class="createVisit__urgency__item" value="Normal">Normal</option>
                    <option class="createVisit__urgency__item" value="Low">Low</option>
                </select>
            </div>

            <div class="main__createVisit__name ">
                <label for="name">Enter your name: </label>
                <input type="text" name="name" value= ${this.fullName} required>
            </div>

            <div class="main__createVisit__pressure ">
                <label for="pressure">Pressure : </label>
                <input type="text" name="pressure" value= ${this.pressure} required>
            </div>

            <div class="main__createVisit__bmi ">
                <label for="bmi">Enter your BMI: </label>
                <input type="text" name="bmi" value= ${this.bodyIndex} required>
            </div>

            <div class="main__createVisit__heartIll ">
                <label for="heartIll">Enter your diseases of the cardiovascular system: </label>
                <input type="text" name="heartIll" value= ${this.heartIll} required>
            </div>

            <div class="main__createVisit__age ">
                <label for="age">Enter your age: </label>
                <input type="number" name="age" value= ${this.age} required>
            </div>
            
            <div class="main__createVisit__btnBlock">
                <button class="main__createVisit__btn " type="submit"> Submit </button>
                <button class="main__cancelVisit__btn " type="reset"> Cancel </button>
            </div>

        </form>`
        )
    
    //     createVisitForm.classList.remove("displNone");
    //     renderCreateVisitForm("Cardiologist");
    //     createVisitForm.titleInput.value = this.title;
    //     createVisitForm.descriptionInput.value = this.description;
    //     createVisitForm.urgencyInput.value = this.urgenc
    //  .title.value = title this.description.value, target.urgency.value, target.name.value, target.pressure.value, target.bmi.value, target.heartIll.value, target.age.value);
    //         editCard();
    }
}

