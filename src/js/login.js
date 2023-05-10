import { loginBtnReg, createBtn, unloginBtn, filterVisit } from "./constant.js";

export const login = () => {
    console.log("login");
    loginBtnReg.addEventListener("click", (e) => {
        e.preventDefault();

        async function siteLogin() {
            const tokenRequest = await fetch("https://ajax.test-danit.com/api/v2/cards/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: 'AVY@gmail.com', password: 'step3AVY' })
            })
                .then(response => response.text())
                .then(data => console.log(data))
                .then(token => {
                    localStorage.setItem('token', token)
                    //console.log(token);
                })
                .catch((err) => alert("Please login again"));

            const visits = await fetch("https://ajax.test-danit.com/api/v2/cards", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/text',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(response => response.json())
                .then(data => console.log(data))
                .then((data) => {
                    if (data.length === 0) {
                        alert("No items have been added");
                    }
                    console.log(data.length);
                })
                .then(() => {
                    createBtn.addEventListener("click", () => {
                        document.querySelector(".createVisit").classList.toggle("displNone")
                    })
                })
                .catch(err => alert(err))

            Promise.all([tokenRequest, visits])
                .then(() => {
                    createBtn.classList.remove("displNone");
                    unloginBtn.classList.remove("displNone");
                    loginWind.classList.add("displNone");
                    filterVisit.classList.remove("displNone");


                })
        }
        siteLogin();
    })
}