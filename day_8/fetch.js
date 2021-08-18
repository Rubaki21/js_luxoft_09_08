// const url = 'https://jsonplaceholder.typicode.com/users';
// function sendRequest(method, url, body = null) {
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: {"Content-type": "application/json"}
//     })
//         .then(response => response.json())
//         .then(text => console.log(text))
//         .catch(err => console.log(err));
// }

// async function sendRequest(method, url, body = null) {
//     try {
//         const response = await fetch(url, {
//             method: method,
//             body: JSON.stringify(body),
//             headers: { "Content-type": "application/json" }
//         });
//         const text = await response.json();
//         return console.log(text);
//     } catch (err) {
//         return console.log(err);
//     }
// }
// let body = {
//     name: "Jack",
//     age: 34
// };
// // sendRequest("GET", url, body = null);
// sendRequest("POST", url, body = body);

//async/await