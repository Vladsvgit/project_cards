import { sectionCards } from './constant.js';

export { renderAllCards };

function renderCardiologist(root, objectCard) {
  let {
    fullName,
    id,
    title,
    description,
    urgency,
    pressure,
    bpi,
    heartIll,
    age,
  } = objectCard;
  root.insertAdjacentHTML(
    "beforeend",
    `<div class="block-card card" id="${id}">
  <button class="block-cards__close btn">x</button>
<ul>
<li class="full-name">Fullname : ${fullName}</li>
<li class="doctor">Doctor : Cardiologist</li>
<li id="${id}" class="displNone">${id}</li>
<li>
  <ul class="block-cards__sublist displNone">
    <li class="title">Title : ${title}</li>
    <li class="description">Description : ${description}</li>
    <li class="urgency">Urgency : ${urgency}</li>
    <li class="pressure">Pressure : ${pressure}</li>
    <li class="bodyIndex">BodyIndex : ${bpi}</li>
    <li class="heartIll">HeartIll : ${heartIll}</li>
    <li class="age">Age : ${age}</li>
  </ul>
</li>
</ul>
<button class="block-cards__edit btn">edit</button>
<button class="block-cards__show btn">show more</button>
<button class="block-cards__hide btn displNone">Show less</button>
</div>
`
  );
};

function renderDentist(root, objectCard) {
  let {
    fullName,
    id,
    title,
    description,
    urgency,
    lastVisitDate,
  } = objectCard;
  root.insertAdjacentHTML(
    "beforeend",
    `<div class="block-card card" id="${id}">
  <button class="block-cards__close btn">x</button>
<ul>
<li class="full-name">Fullname : ${fullName}</li>
<li class="doctor">Doctor : Dentist</li>
<li id="${id}" class="displNone">${id}</li>
<li>
  <ul class="block-cards__sublist displNone">
    <li class="title">Title : ${title}</li>
    <li class="description">Description : ${description}</li>
    <li class="urgency">Urgency : ${urgency}</li>
    <li class="lastVisitDate">Last visit date : ${lastVisitDate}</li>
  </ul>
</li>
</ul>
<button class="block-cards__edit btn">edit</button>
<button class="block-cards__show btn">show more</button>
<button class="block-cards__hide btn displNone">Show less</button>
</div>
`
  );
}

function renderTherapist(root, objectCard) {
  let {
    fullName,
    id,
    title,
    description,
    urgency,
    age,
  } = objectCard;
  root.insertAdjacentHTML(
    "beforeend",
    `<div class="block-card card" id="${id}">
  <button class="block-cards__close btn">x</button>
<ul>
<li class="full-name">Fullname : ${fullName}</li>
<li class="doctor">Doctor : Therapist</li>
<li>
  <ul class="block-cards__sublist displNone">
    <li class="title">Title : ${title}</li>
    <li class="description">Description : ${description}</li>
    <li class="urgency">Urgency : ${urgency}</li>
    <li class="age">Age : ${age}</li>
  </ul>
</li>
</ul>
<button class="block-cards__edit btn">edit</button>
<button class="block-cards__show btn" onclick= "">show more</button>
<button class="block-cards__hide btn displNone">Show less</button>
</div>
`
  );

}

// function showHide(element) {
//   element.classList.toggle("displNone");
//}

function renderAllCards(arrayCards, root) {
  arrayCards.forEach((element) => {
    if (element.doctor === "Cardiologist") {
      renderCardiologist(root, element);
    } else if (element.doctor === "Dentist") {
      renderDentist(root, element);
    } else if (element.doctor === "Therapist") {
      renderTherapist(root, element);
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
