import { createBtn, unloginBtn, filterVisit, loginWind, mainConternt, createVisitWind, backGroundShadow } from "./constant.js";

export const login = () => {
    console.log("login");
    loginWind.addEventListener("submit", (e) => {
        e.preventDefault();

        async function siteLogin() {
            const tokenRequest = await new Promise((resolve, reject) => {
                fetch("https://ajax.test-danit.com/api/v2/cards/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: 'AVY@gmail.com', password: 'step3AVY' })
                })
                    .then(response => response.text())
                    .then(token => {
                        resolve(localStorage.setItem('token', token));
                    })
                    .catch(()=> reject("Please login again"))
                })

            const visits = await fetch("https://ajax.test-danit.com/api/v2/cards", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(response => response.json())
                // .then(data => console.log(data))
                .then((data) => {
                    console.log(data);
                    if (data.length === 0) {
                        const firstMessage = document.createElement("div");
                        firstMessage.classList.add("main__message");
                        firstMessage.textContent = "No items have been added"
                        mainConternt.append(firstMessage);
                    }
                    console.log(data.length);
                })
                .then(() => {
                    createBtn.addEventListener("click", () => {
                        createVisitWind.classList.remove("displNone");
                    })
                })
                .catch(err => console.log(err))

            await Promise.all([tokenRequest, visits])
                .then(() => {
                    if (localStorage.getItem("token") !== "Incorrect username or password") {
                        createBtn.classList.remove("displNone");
                    unloginBtn.classList.remove("displNone");
                    loginWind.classList.add("displNone");
                    filterVisit.classList.remove("displNone");
                    backGroundShadow.classList.add("displNone");
                    } else {
                        alert ("Incorrect username or password");
                        e.target.reset();
                    }
                })
        }
        siteLogin();
    })
}