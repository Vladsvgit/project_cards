import { Visit } from "./Visit.js";
import { sectionCards } from "./constant.js";
export class VisitCardiologist extends Visit {
  constructor(
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
  ) {
    super(doctor, title, description, urgency, fullName, status, id);
    this.pressure = pressure;
    this.bodyIndex = bodyIndex;
    this.heartIll = heartIll;
    this.age = age;
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
        `
    );
    // const deleteBtn = document.querySelector(`#${this.id} .block-cards__close`)
    // deleteBtn.addEventListener('click', () => {
    //     super.deleteVisit()
    // });
  }

  renderSendForm(root) {
    root.insertAdjacentHTML(
      "beforeend",
      `<form class="main__createVisit send-form">
            <div class="send-form__title">
            <h1 ">Doctor : Cardiologist</h1>
            </div>

            <div>
               <label for="status">Status:</label>
               <select  name="status">
                    <option class="filterVisits__status__item" value="Open">Open</option>
                    <option class="filterVisits__status__item" value="Done">Done</option>
               </select>
            </div>
    
            <div class="main__createVisit__title ">
                <label for="title">Aim of visit:</label>
                <input type="text" name="title" value= "${this.title}" required>
            </div>

            <div class="main__createVisit__description ">
                <label for="description">Short description visit: </label>
                <input type="text" name="description" value= "${this.description}" required>
            </div>

            <div class="main__createVisit__urgency ">
                <label for="Urgency">Urgency </label>
                <select class="createVisit__urgency__status" name="urgency">
                    <option class="createVisit__urgency__item" value="High">High</option>
                    <option class="createVisit__urgency__item" value="Normal">Normal</option>
                    <option class="createVisit__urgency__item" value="Low">Low</option>
                </select>
            </div>

            <div class="main__createVisit__name ">
                <label for="name">Enter your name: </label>
                <input type="text" name="fullName" value= "${this.fullName}" required>
            </div>

            <div class="main__createVisit__pressure ">
                <label for="pressure">Pressure : </label>
                <input type="text" name="pressure" value= "${this.pressure}" required>
            </div>

            <div class="main__createVisit__bmi ">
                <label for="bmi">Enter your BMI: </label>
                <input type="text" name="bodyIndex" value= "${this.bodyIndex}" required>
            </div>

            <div class="main__createVisit__heartIll ">
                <label for="heartIll">Enter your diseases of the cardiovascular system: </label>
                <input type="text" name="heartIll" value= "${this.heartIll}" required>
            </div>

            <div class="main__createVisit__age ">
                <label for="age">Enter your age: </label>
                <input type="number" name="age" value= "${this.age}" required>
            </div>
            
            <div class="main__createVisit__btnBlock">
                <button class="main__createVisit__btn " type="submit" > Submit </button>
            </div>

        </form>`
    );
  }
}
