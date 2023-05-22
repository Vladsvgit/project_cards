export {renderAllCards};



// {title,discription,urgency,fullName,pressure,bpi,heartIll,lastVisitDate,age,doctor,id}
const obj111 = {
  age: "32",
  bpi: "12",
  doctor: "Cardiologist",
  fullName: "Artem Lyasenko",
  heartIllness: "Ok",
  id: 170513,
  pressure: "120/80",
  title: "Heart ill",
  urgency: "High",
};

const obj222 = {
  age: "44",
  bpi: "12",
  doctor: "Cardiologist",
  fullName: "Makar Pupko",
  heartIllness: "Ok",
  id: 270533,
  pressure: "120/80",
  title: "Heart ill",
  urgency: "High",
};

const arr = [obj111, obj222];



function renderCardiologist(root, objectCard) {
  let {
    fullName,
    id,
    title,
    discription,
    urgency,
    pressure,
    bpi,
    heartIll,
    age,
  } = objectCard;
  root.insertAdjacentHTML(
    "beforeend",
    `<div class="block-card card">
  <button class="block-cards__close btn">x</button>
<ul>
<li class="full-name">Fullname : ${fullName}</li>
<li class="doctor">Doctor : Cardiologist</li>
<li id="${id}" class="displNone">${id}</li>
<li>
  <ul class="block-cards__sublist displNone">
    <li class="title">Title : ${title}</li>
    <li class="discription">Discription : ${discription}</li>
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
<button class="block-cards__hide displNone">Show less</button>
</div>
`
  );
};

function renderDentist(root, objectCard) {
  let {
    fullName,
    id,
    title,
    discription,
    urgency,
    lastVisitDate,
  } = objectCard;
  root.insertAdjacentHTML(
    "beforeend",
    `<div class="block-card card">
  <button class="block-cards__close btn">x</button>
<ul>
<li class="full-name">Fullname : ${fullName}</li>
<li class="doctor">Doctor : Dentist</li>
<li id="${id}" class="displNone">${id}</li>
<li>
  <ul class="block-cards__sublist displNone">
    <li class="title">Title : ${title}</li>
    <li class="discription">Discription : ${discription}</li>
    <li class="urgency">Urgency : ${urgency}</li>
    <li class="lastVisitDate">${lastVisitDate}</li>
  </ul>
</li>
</ul>
<button class="block-cards__edit btn">edit</button>
<button class="block-cards__show btn">show more</button>
<button class="block-cards__hide displNone">Show less</button>
</div>
`
  );
}

function renderTherapist(root, objectCard) {
  let {
    fullName,
    id,
    title,
    discription,
    urgency,
    age,
  } = objectCard;
  root.insertAdjacentHTML(
    "beforeend",
    `<div class="block-card card">
  <button class="block-cards__close btn">x</button>
<ul>
<li class="full-name">Fullname : ${fullName}</li>
<li class="doctor">Doctor : Therapist</li>
<li id="${id}" class="displNone">${id}</li>
<li>
  <ul class="block-cards__sublist displNone">
    <li class="title">Title : ${title}</li>
    <li class="discription">Discription : ${discription}</li>
    <li class="urgency">Urgency : ${urgency}</li>
    <li class="age">Age : ${age}</li>
  </ul>
</li>
</ul>
<button class="block-cards__edit btn">edit</button>
<button class="block-cards__show btn" onclick= "">show more</button>
<button class="block-cards__hide displNone">Show less</button>
</div>
`
  );

}

function showHide(element) {
  element.classList.toggle("displNone");

}

 function renderAllCards(arrayCards, root) {
  arrayCards.forEach((element) => {
    if (element.doctor === "Cardiologist") {
      renderCardiologist(root, element);
    }else if (element.doctor === "Dentist") {
      renderDentist(root, element);
    }else if (element.doctor === "Therapist") {
      renderTherapist(root, element);
    }
  });
}
// let cardd = document.querySelector()
sectionCards.addEventListener("click", (e) => {
  let elem = e.target.closest(".block-card")
  console.log(elem);
  let subtext = elem.querySelector(".block-cards__sublist")
  console.log(subtext);
  subtext.classList.toggle("displNone")
}
)




// ArrayAllCards();
// renderAllCards(arr, sectionCards);