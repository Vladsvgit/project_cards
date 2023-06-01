import { sectionCards } from "./constant.js";
import { renderAllCards } from "./renderCard.js";
import { noCardsMessage, token } from "./login.js";
export let dataBase = [];

export const getToken = (mail, pass) => {
  fetch("https://ajax.test-danit.com/api/v2/cards/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: `${email}`, password: `${password}` })
    //body: JSON.stringify({ email: "AVY@gmail.com", password: "step3AVY" }), // добавить почту и пароль
  })
    .then((response) => response.text())
    .then((token) => console.log(token));
};

export const createCardApi = (cardObj) => {
  fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(cardObj),
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .then(() => {
      sectionCards.innerHTML = "";
      getAllCardsApi(localStorage.getItem("token"));
    });
};

export const deleteCardApi = (cardId) => {
  fetch(`https://ajax.test-danit.com/api/v2/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        sectionCards.innerHTML = "";
        getAllCardsApi(localStorage.getItem("token"));

        // document.getElementById(`${cardId}`).remove();
      }
    })
    .catch((error) => {
      {
        console.error(error);
      }
    });
};



export function getAllCardsApi(token) {
  fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dataBase = [...data];
      if (dataBase.length === 0) {
        noCardsMessage("No items have been added");
      } else {
        renderAllCards(dataBase);
      }
    })
    .catch((err) => console.log(err));
  // .catch(() => noCardsMessage("Error loading database"))
}

export const editCard = (editObj, cardId, token) => {
  fetch(`https://ajax.test-danit.com/api/v2/cards/${cardId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(editObj),
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .then((response) => {
      sectionCards.innerHTML = "";
      getAllCardsApi(localStorage.getItem("token"));
    })
    .catch((error) => {
      {
        console.error(error);
      }
    });
};
