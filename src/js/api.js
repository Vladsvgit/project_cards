

const URL ="https://ajax.test-danit.com/api/v2/cards";
let ArrayAllCards = fetch(URL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
})
.then(console.log(Data))

// function getRequest() {}

export {ArrayAllCards};
