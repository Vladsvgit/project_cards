
// const URL ="https://ajax.test-danit.com/api/v2/cards";
// let ArrayAllCards = new Promise(
//     resolve (
//     fetch(URL, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             'Authorization': `Bearer ${token}`
//         },
//     })
//     .then(data => JSON.parse(data))
//     )
// )


// export {ArrayAllCards};

export const postVisit = () => {
    fetch("https://ajax.test-danit.com/api/v2/cards/login", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ email: 'your@email.com', password: 'password' })
})
  .then(response => response.text())
  .then(token => console.log(token))
}


