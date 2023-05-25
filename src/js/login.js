import { createBtn, unloginBtn, filterVisit, loginWind, mainConternt, backGroundShadow, sectionCards } from "./constant.js";
import { renderAllCards } from "./renderCard.js";
import { getToken, token, getAllCards } from "./api.js";

export let dataBase = [];
export function login() {

    loginWind.onclick = ((e) => {
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

export function noCardsMessage(message) {
    const firstMessage = document.createElement("div");
    firstMessage.classList.add("main__message");
    firstMessage.textContent = message;
    mainConternt.append(firstMessage);
}
