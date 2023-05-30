import { createBtn, unloginBtn, filterVisit, loginWind, mainConternt, backGroundShadow, sectionCards, token } from "./constant.js";
import { renderAllCards } from "./renderCard.js";
import { getToken, getAllCards } from "./api.js";

export let dataBase = [];
export function login() {

    loginWind.onclick = ((e) => {
        console.log("Login BTN");
        const emailForm = document.querySelector('.login__email').value;
        const passwordForm = document.querySelector('.login__password').value;
        e.preventDefault();
        if (token === "") {
            getToken(emailForm, passwordForm)
                .then(data => {
                    localStorage.setItem('token', data);
                    if (token !== "Incorrect username or password") {
                        createBtn.classList.remove("displNone");
                        unloginBtn.classList.remove("displNone");
                        loginWind.classList.add("displNone");
                        filterVisit.classList.remove("displNone");
                        backGroundShadow.classList.add("displNone");
                        getAllCards(token)
                            .then((data) => {
                                dataBase = [...data];
                                renderAllCards(dataBase, sectionCards);
                                if (dataBase.length === 0) {
                                    noCardsMessage("No items have been added")
                                }
                                // console.log(data.length);
                            })
                            .catch(err => console.log(err))
                    } else {
                        alert("Incorrect username or password");
                        e.target.reset();
                    }
                })
        }


        // getAllCards(token)
        // .then((data) => {
        //     dataBase = [...data];
        //     renderAllCards(dataBase, sectionCards);
        //     if (dataBase.length === 0) {
        //         noCardsMessage("No items have been added")
        //     }
        //     // console.log(data.length);
        // })
        // .catch(err => console.log(err))

        // .catch((e) => console.log (e, "Please login again"))
        //console.log(getToken(emailForm, passwordForm));
        //siteLogin(e, emailForm, passwordForm);
        // if(emailForm.trim() !== '' && passwordForm.trim() !== ''){   // закоментировано для тестов не удалять
        //     siteLogin(e,emailForm, passwordForm );
        // }else{
        //     alert("Values cannot be empty");
        //     e.target.reset();
        // }
    })
}

function siteLogin(e, email, password) {
    fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'AVY@gmail.com', password: 'step3AVY' })
        // body: JSON.stringify({ email: 'augze@mailto.plus', password: 'qwe111' })
        // body: JSON.stringify({ email: `${email}`, password: `${password}` })   //  конечное
    })
        .then(response => response.text())
        .then(data => {
            const token = data;
            localStorage.setItem('token', token);
            if (localStorage.getItem("token") !== "Incorrect username or password") {
                createBtn.classList.remove("displNone");
                unloginBtn.classList.remove("displNone");
                loginWind.classList.add("displNone");
                filterVisit.classList.remove("displNone");
                backGroundShadow.classList.add("displNone");
                getAllCardsApi(token)
            } else {
                alert("Incorrect username or password");
                e.target.reset();
            }
        })
        .catch(() => alert("Please login again"))
};

export function noCardsMessage(message) {
    const firstMessage = document.createElement("div");
    firstMessage.classList.add("main__message");
    firstMessage.textContent = message;
    mainConternt.append(firstMessage);
}
// export function getAllCards(token) {
//     fetch("https://ajax.test-danit.com/api/v2/cards", {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     }).then(response => response.json())
//         .then((data) => {
//             console.log(data);
//             dataBase = [...data];
//             renderAllCards(dataBase);
//             if (dataBase.length === 0) {
//                 noCardsMessage("No items have been added")
//             }
//         })
//         .catch(err => console.log(err))
//         // .catch(() => noCardsMessage("Error loading database"))
//
// }
