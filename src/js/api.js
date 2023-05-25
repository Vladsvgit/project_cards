// import { mail, pass } from "./login.js";
export let token = "";

export const getToken = (mail, pass) => {
    const tokenRequest = new Promise((resolve, reject) => {
        return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: 'AVY@gmail.com', password: 'step3AVY' }) // добавить почту и пароль
        })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                resolve(token = data);
            })
            .catch((err) => reject(err));
    })

    return tokenRequest;
};

export const createCard = (cardObj, token) => {
    // const newCard = new Promise((resolve, reject) => {

    // })
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(cardObj)
    })
        .then(response => response.json())
        .then(response => console.log(response))
};

export const deleteCardApi = (cardId) => {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    }).then((response) =>{
        if(response.ok){
            sectionCards.innerHTML = "";
            getAllCardsApi()
            // document.getElementById(`${cardId}`).remove();
        }
    } )
        .catch(error => {
            {
                console.error(error)
            }
        })
};

export const getAllCards = (token) => {
    const allCards = new Promise((resolve, reject) => {
        fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
            .then(data => {
                // console.log(data);
                resolve(data);
            })
            .catch((err) => reject(err));
    });

    return allCards
};

export const editCard = (editObj, cardId, token) => {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${cardId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editObj)
    })
        .then(response => response.json())
        .then(response => console.log(response))
};