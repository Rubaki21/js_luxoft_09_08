// function factorial(n) {
//     if (n == 0 || n == 1) {
//         return 1;
//     }
//     else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5));
/////////////////////////////

//Вывести числа от 0 до n
//Вывести числа от n до 0
//с помощью рек ф-ции f(n)

// function f(n) {
//     if (n >= 0) {
//         console.log(n);
//         f(n - 1);
//     }
// }

// function f(n) {
//     if (n >= 0) {
//         console.log(n);
//         f(n - 1);
//         console.log(n);
//     }
// }


// let n = 5;
// f(n);

///////////////////////////////////////////////////

// f();

// function f() {
//     console.log("!");
// }

// let f = function () {
//     console.log("!");
// }
///////////////////////////////////////////
// let sum = (x, y) => x + y;

// console.log(sum(2, 3));
////////////////////////////////////////////

// function f(x = 2, y = 3) {
//     console.log(x + y);
// }

// f(undefined);

// function f(arr = []) {
//     arr[0] = 1;
//     console.log(arr);
//     return arr;
// }

// f();
///////////////////////////////
// function max(...arr) {
//     let res = arr[0];
//     for (let item of arr) {
//         if (item > res) {
//             res = item;
//         }
//     }
//     return res;
// }
// let data = [1,2,3]
// console.log(max(...data))
// console.log(max(2, 4, 3, 5, 1));
//////////////////////////////////////////
// let x = [1, 2, 3];
// let y = [...x];
/////////////////////////////////////////
// function f([x, y]) {
//     console.log(x, y);
// }

// f([1, 2]);

// let [x, y] = [1, 2];
/////////////////////////////////////////
// function f(x) {
//     return x * 2;
// }

// let s = f;

// console.log(s(4));


// f.onclick = handler;

// let arr = [x => x * x, x => x * x * x, x => x * x * x * x];
// console.log(arr[0](3));
///////////////////////////////////////////
// const operators = {
//     add: (x, y) => x + y,
//     subtract: (x, y) => x - y,
//     multiply: (x, y) => x * y,
//     divide: (x, y) => x / y,
// };

// // console.log(operators.add(2, 3));

// function f(operation, op_1, op_2) {
//     return operators[operation](op_1, op_2);
// }

// console.log(f("add", 4, 5));


//////////////////////////////////////////
// "use strict"
// function f(x) {
//     f.counter= 0;
//     return x * 2;
// }

// counter = 0;

// for (let i = 0; i < 10; i++) {
//     f(i);
// }

// console.log(f.counter);
//////////////////////////////////////////////////
// function factorial(n) {
//     if (n > 0) {
//         if (!(n in factorial)) {
//             factorial[n] = n * factorial(n - 1);
//         }
//         return factorial[n];
//     }
// }
// // factorial[1] = 1;

// console.log(factorial(5));
// console.log(factorial(4));
///////////////////////////////////////////////////
// function f() {
//     console.log(x);
// }

// let x = 10;

// f();
//////////////////////////////////////////////
// function f() {
//     let x = "local";
//     function inner() {
//         console.log(x);
//     }
//     return inner;
// }

// let x = "global";

// let func = f();
// func();
// f()();
///////////////////////////////////////
// function counter() {
//     let c = 0;
//     return {
//         count: () => c++,
//         reset: () => c = 0
//     };
// }

// let f1 = counter();
// console.log(f1.count());
// console.log(f1.count());
// console.log(f1.count());

// let f2 = counter();
// console.log(f2.count());
// console.log(f2.count());
// console.log(f2.count());
/////////////////////////////////


// function addProperty(obj, name) {
//     let property;

//     obj[`get${name}`] = () => property;
//     obj[`set${name}`] = (value) => { property = value };
// }


// let obj = {};
// addProperty(obj, "Name");

// obj.setName("John");
// console.log(obj.getName());

/////////////////////////////////////////

// function f(y) {
//     console.log(this.x, y);
// }

// let obj_1 = { x: 2 };
// let obj_2 = { x: 3 };

// f.apply(obj_1, [2])

// f.call(obj_1, ...args);
// obj_1.f(2);


// let obj = {
//     0: "x",
//     1: "y",
//     2: "z",
//     length: 3,
// };

// console.log([].join.call(obj,", "));
////////////////////////////////////////////
// let user = {
//     name: "Tom",
//     say() {
//         console.log(`My name is ${this.name}`);
//     }
// };

// function say_outer() {
//         console.log(`My name is ${this.name}`);
//     }
// let user_2 = {
//     name: "Jack",
// };

// let say = say_outer.bind(user_2);

// // say();

// setTimeout(say, 1000);

// let f = user.say;
// console.log(user.say);
///////////////////////////////////////
// function sum(a, b) {
//     return a + b;
// }

// let f = sum.bind(null, 2, 4);

// console.log(f());
////////////////////////////////////////////

// function f(str) {
//     return str;
// }

// function deco(f) {
//     return (str) => `<h1>${f(str)}</h1>`;
// }

// let f = deco(f);
// console.log(f("hello"));
///////////////////////////////////////////

// let obj = {
//     name: "World",
//     countries: ["USA", "UK", "USSR"],

//     // show() {
//     //     this.countries.forEach(
//     //         country => console.log(`${this.name}: ${country}`));
//     // }
//     show() {
//         this.countries.forEach(function (country) {
//             console.log(`${this.name}: ${country}`);});
//     }
// }

// obj.show();

// function f(...args) {
//     console.log(arguments);
// }

// f(1, 2, 3);



