import {sectionCards, token} from "./constant.js";
import {renderAllCards} from "./renderCard.js";
import {noCardsMessage} from "./login.js";
export let dataBase = [];

export const getToken = (mail, pass) => {
    fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'AVY@gmail.com', password: 'step3AVY' }) // добавить почту и пароль
    })
        .then(response => response.text())
        .then(token => console.log(token))
};

export const createCardApi = (cardObj) => {
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

// export const getAllCards = () => {
//     fetch("https://ajax.test-danit.com/api/v2/cards", {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     }).then(response => response.json())
//         // .then(data => console.log(data))
//         .then((data) => {
//             console.log(data);
//             dataBase = [...data];
//             renderAllCards(dataBase, sectionCards);
//             if (dataBase.length === 0) {
//                 noCardsMessage("No items have been added")
//             }
//             // console.log(data.length);
//         })
//         .catch(err => console.log(err))
// };

export function getAllCardsApi() {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.json())
        .then((data) => {
            console.log(data);
            dataBase = [...data];
            if (dataBase.length === 0) {
                noCardsMessage("No items have been added")
            } else {
                renderAllCards(dataBase);
            }
        })
        .catch(err => console.log(err))
    // .catch(() => noCardsMessage("Error loading database"))

}

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
        .then((response) =>{
                sectionCards.innerHTML = "";
                getAllCardsApi(response)
        } )
            .catch(error => {
                {console.error(error)}
            })
};