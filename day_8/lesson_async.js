// console.log("1");
// setTimeout(() => console.log("after 2s"), 2000);
// console.log("2");
/////////////////////////////////////////
// function f1() {
//     console.log("f1");
//     f2();
// }
// function f2() {
//     console.log("f2");
// }
// function f() {
//     console.log("f");
//     f1();
//     f2();
// }

// f();
/////////////////////////////////////////////
// console.log("start...")
// setTimeout(() => {
//     console.log("getting data...");
//     const data = {
//         port: 5000,
//         name: "express",
//         ready: false
//     };
//     setTimeout(() => {
//         data.ready = true;
//         console.log("Data received", data);
//     }, 1000)
// },2000);
//////////////////////////////////////////
// console.log("start...");
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("getting data...");
//         const data = {
//             port: 5000,
//             name: "express",
//             ready: false
//         };
//         resolve(data);
//     },2000)   
// });

// p1.then(() => console.log("promise resolved"));
// p1.then(data => {
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.ready = true;
//             console.log("Data received", data);
//             resolve(data);
//         }, 1000)
//     });
//     p2.then(data => console.log(data));
// })






// setTimeout(() => {
//         data.ready = true;
//         console.log("Data received", data);
//     }, 1000)
// },2000);
////////////////////////////////////////
// console.log("start...");
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("getting data...");
//         const data = {
//             port: 5000,
//             name: "express",
//             ready: false
//         };
//         resolve(data);
//     },2000)   
// });


// p1.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.ready = true;
//             console.log("Data received", data);
//             resolve(data);
//         }, 1000)
//     })  
// })
// .then(data1 => console.log(data1))
// .catch(err => console.log(err))
// .finally(() => console.log("finally"));

///////////////////////////////////////////////////
// setTimeout(() => console.log("after 0s"),0);
// console.log("1");
// console.log("2");
// for (let index = 0; index < 10000; index++) {
//     console.log(1000);
// }
/////////////////////////////////////////////////
// const delay = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms);
//     })
// };



// for (let index = 0; index < 5; index++) {
//     // console.log(1000);
//     delay(1000*index).then(() => console.log(index));
// }
// delay(2000).then(() => console.log("after 2000ms"));
////////////////////////////////////////////////
// const delay = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms);
//     })
// };

// Promise.all([delay(2000), delay(5000)]).then(() => console.log("finish"));
// Promise.race([delay(2000), delay(5000)]).then(() => console.log("finish"));
///////////////////////////////////////////////////////////////
// const delay = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms);
//     })
// };
// let url = "https://jsonplaceholder.typicode.com/todos";

// function get(url) {
//     console.log("start...");
//     return delay(3000).then(() => fetch(url)).then(response => response.json())
//         .then(json => console.log(json)).catch(err => console.log(err));
// }

// async function get(url, n) {
//     try {
//         console.log("start...", n);
//         await delay(3000);
//         console.log("after delay...", n);
//         const response = await fetch(url);
//         console.log("after fetch...", n);
//         const json = await response.json();
//         console.log("after json...", n);
//         console.log(json);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// get(url, 1);
// get(url, 2);
// for (let index = 0; index < 10; index++) {
//     console.log(10000);
// }
// get(url, 3);
// get(url, 4);
//////////////////////////////////////////////////

// function* gen() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let g = gen();

// console.log(g.next());
// console.log("hello");
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
///////////////////////////////////////
// function* gen() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// // for (const item of gen()) {
// //     console.log(item);
// // }

// console.log([9, 8, 7, ...gen()]);

/////////////////////////////////////////////
// function* gen(n) {
//     let i = 0;
//     while (i<n){
//         yield i;
//         i++;
//     }
// }

// let g = gen(1000);

// for (const item of g) {
//     console.log(item);
// }
////////////////////////////////////////////////

//?????????????? ?????????? Employee ?? ????????????????????: name, surname, salary
//1)	???????????????? ?????????? bonus() ?? Employee,
// ?????????????? ???????????? ???????????????????? Promise,
//     ???????????????????? ?????????????????? ???????????????? ???????????? ?? ?????????????????? 0???1000;
// ?????????? ???????????? ???????? ???????????????? ?????????? ???????????????? ?? 1000ms
//     (?????? ?????????????????? ???????????????? ?????? ?????????????????? ?? ??????????????)

// 2) ???????????????? ?????????? total() ?? Employee ?????????????? ???????????? ?????????????????? ?????????? ???????????? ??
// ???????????????? ?? ?????????????? ?????????? Promise
//3) ?????????????? ???????????? Employee. ???????????????????? ?????????? ?????????? ??????????????????????(total). 
//???????????? ???????????????????? ???? ???????? ????????????????



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Employee {
    constructor(name, surname, salary) {
        this.name = name;
        this.surname = surname;
        this.salary = salary;
    }

    bonus() {
        return new Promise(resolve => setTimeout(() => resolve(getRandomInt(1000)), 1000));
    }

    total() {
        // let salary = this.salary;
        // return this.bonus()
        //     .then(data => new Promise((resolve, reject) => setTimeout(() => resolve(this.salary + data), 0)))
        return new Promise(resolve => this.bonus().then(res => resolve(res + this.salary)));
    }
}


// [new Employee("John", "Smith", 2000), new Employee("Ivan", "Ivanov", 5000)]
//     .forEach(e => e.total().then(data => console.log(data)));
// let arr = [new Employee("John", "Smith", 2000), new Employee("Ivan", "Ivanov", 5000)]
// for (const item of arr) {
//     item.total().then(res => console.log(res));
// }

//3*) ?????????????? ???????????? Employee. ???????????????????? ?????????? ?????????? ??????????????????????(total)DOM. 
//???????????? ???????????????????? ???? ???????? ????????????????
//4)	???????????????? ?????????? bonus() ?? ???????????? Employee ??????, ?????????? ???? ???????????????? Promise ?? ????????????, ???????? ?????????? ???????????? 700
//5)	???????????????? ?????????? total() ?? Employee, ?????????????? ???????????????????????? ???????????????????? ?? bonus(). 
//???????????? ?????????? ???????????? ???????????????????? ?????????????????? ????????????(bonus().then), ?? ?????????? ?????????????????????? ???????????????? ???? ???????????? ???????????? ?? ????????????????????
//???? ?????? Promise.
//?? ???????????? ???????????????????? ?? ???????????? bonus() ?????????? total() ???????????? ?????????? ?????????????????????? ????????????????????.
//6)	???????????????? ?????????????????? ???? ???????????? ???????????? ?????????????????????? (???????????? ?? Promise),
//?????????????? ???????? ??????????????????, ?????????????? ?????????? ????????????????
//???????????????????????????? ?????????????????????????? ???????????? ?????????????? ?????? ???????????????????? ?? ???????????? ????????????????????:
//7)?????????????????????? ?????????????????? async/await ?? main.js ?????? ???????????? ???? ???????????? ???????????? ?????????????????????? ?? ??????????????.
//8)???????????????????? ?????????? total() ?? ???????????????????????????? ???????????????????? async/await.

// [new Employee("John", "Smith", 2000), new Employee("Ivan", "Ivanov", 5000)]
// .forEach(e => e.total().then(total => {
//     let div = document.createElement('div');
//     let html = `${e.name} ${e.surname}: salary ${e.salary}, total ${total}`;
//     div.innerHTML = html;
//     document.getElementById('container').append(div);
// }));
