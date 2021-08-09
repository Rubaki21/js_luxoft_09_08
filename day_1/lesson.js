// console.log("hello");
// console.log("goodbye");

// let x = 123;
// x = "Hello"
// console.log(x)
/////////////////////////////

// let x = 123.6789;
// x = 1e-8;
// console.log(x);
// // +-/*
// let y = 2;
// console.log(y ** 3);

// console.log(5 % 2);

// console.log(0xff);
// console.log(0b101010);


// let n = 123;
// console.log(n.toString(16));
// console.log(typeof (n.toString()));

// let n = 3.1234;
// console.log(Math.round(3.1));
// console.log(n.toFixed(2));

/////////////////////////////////
// let x = 0.1;
// let y = 0.2;
// let z = x + y;
// console.log(z.toFixed(2));

////////////////////////////////////////

// let x = 3;
// let y = "hello";
// let z = y * x;
// console.log(z);

// console.log(typeof(3 / 0));

// console.log(parseInt("100px"))

// console.log(Math.random());
// console.log(Math.max(2,3,41,2))
/////////////////////////////////////////////
// let str = "Hello world";
// let str = 'Hello\' world';
// console.log(str);
// let str = `Hello\n world`;

// let x = 3;
// let y = 4;
// let str = `x = ${x} y = ${y}`
// console.log(str);
// // let str = `x = ` + x.toString() + " y = " + String(y);
// let 
// console.log(str);
/////////////////////////////////////
// let str = "Hello";
// console.log(str.length);
// str[0] = "B";
// console.log(str[0]);
/////////////////////////////////////
// let x = "Hello";
// let y = x;
// y = y + "!"
// console.log(x);
// console.log(y);
////////////////////////////
// let x = 3;
// let y = 3;
/////////////////////////////
// let str = "Hello";
// console.log(str[str.length-1]);
////////////////////////////

// let str = "Hello world!";
// console.log(str.indexOf("wo"))
///////////////////////////
// let str = "Hello world!";
// console.log(str.toLowerCase())
//////////////////////////////
// let str = "Hello world!";
// console.log(str.slice(2));

// let x = "z";
// let y = "asd";
// console.log(x > y);
/////////////////////////////////////
// console.log("z".codePointAt());
// console.log("Z".codePointAt());
// let x = "30.01.2021";
// let y = "01.12.2021";
// console.log(x > y);
//////////////////////////////////
// let str = "";
// for (let i = 4000; i < 4040; i++) {
//     str = str + String.fromCodePoint(i);
    
// }
// console.log(str);
////////////////////////////////////
// let x = 3;
// // >=, <=, <,>
// let y = 4;
// if (x == y) {
//     console.log("+");
// }
/////////////////////////////////////
// let check = true;
// Boolean(), Number(), String()
//////////////////////////////////
// let n = 100;
// console.log(n + n + "");
// console.log(typeof (n + n + ""));
// console.log("21" * "2");
// console.log("21" - "2");
// console.log(1==="1")
// console.log("91" == 91);
//////////////////////////////////////
// function square(x) {
//     console.log(x*x);
// }

// let square = function (x) {
//     console.log(x*x);
// }
// square(4);

// function foo() {
//     var a;
//     console.log(a);
//     a = 3;
// }

// foo();

// /////////////////////////////////////////
// let human = {
//     name: "Tom",
//     age: 27
// }
// human.age = 45;
// console.log(human.age);
// human.weight = 75;
// console.log(human.weight);
///////////////////////////////////////////
// let arr = [1, true, "hello"];
// console.log(arr);

////////////////////////////////////
// function foo() {
//     let a;
//     console.log(a);
//     a = 3;
// }
// let x;
// if (0) {
//     var a = 3;
// }
// console.log(a);
///////////////////////////////////////
// function foo(a) {
//     a = 6;
//     console.log(a);
    
// }

// let a = 5;
// foo(a);
// console.log(a);
//////////////////////////////////////////
// let x = 10;

// if (x > 0) {
//     console.log("+");
// }
// else if (x < 0) {
//     console.log("-");
// }
// else {
//     console.log(0);
// }
/////////////////////////////////////////////
// let age = 18;
// let x = (age >= 18) ? true : false;
// console.log(x);
//////////////////////////////////////////////
//Даны x, y. Вывести номер четверти, в которой они расположены.
// function coord (x, y) {
//     if (x > 0) {
//         if (y > 0) {
//             console.log("1 четверть");
//         } else if (y < 0) {
//             console.log("4 четверть")
//         }

//     } else if (x < 0) {
//         if (y > 0) {
//             console.log("2 четверть");
//         } else if (y < 0) {
//             console.log("3 четверть")
//         }
//     }

//     if (x == 0 && y == 0) {
//         console.log("Начало координат")
//     } else if (y == 0) {
//         console.log("Ось X")
//     } else if (x == 0) {
//         console.log("Ось Y")
//     }
// }


// let x = 0;
// let y = 0;

// coord(x,y);
////////////////////////////////////////////////////////
// if (a && b)...
// if (a || b)...
// if(x!=2)...
////////////////////////////////////////////////////////
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     ++i;
//     //i += 1;//i = i+1
// }
////////////////////////////////////////////
// let x = 10;
// let z = ++x;
// console.log(x,z);
/////////////////////////////////////////
// for (let i = 0; i < 10; i=i+1) {
//     console.log(i);
// }
///////////////////////////////////

// for (let i = 0; i < 10; i = i + 1) {
//     if (i == 5) {
//         break;
//     }
//     console.log(i);
// }
///////////////////////////////////////
// for (let i = 0; i < 10; i = i + 1) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }
///////////////////////////////////////

// function f(x) {
//     x = x * 2;
//     return x;
// }

// let z = f(10);
// console.log(z);
////////////////////////////////////
// let arr = [1, 2, 3];

// arr["a"] = 9;
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
    
// }
// arr["a"] = 9;
// for (const key in arr) {
//     console.log(key);
// }
// let arr = [1, 2, 3];
// arr[100] = 100;
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
    
// }

// let arr = new Array(100);
////////////////////////////////////////////////

// let arr = [1, 2, 3];
// arr.length = 1;
// console.log(arr);
////////////////////////////////////////////////
// let arr = [1, 2, 3];
// for (const iterator of arr) {
//     console.log(iterator);
// }
///////////////////////////////////////////////
// let arr = [1, 2, 3];
// let a = arr;
// let b = new Array(...arr)
// a[0] = 9;
// console.log(b[0]);
///////////////////////////////////////////////
// Написать ф-цию, создающую независимую копию массива
// function copy_array(arr_1){
//     let arr_2 = [];
//     for(i=0;i<arr_1.length;i++){
//         arr_2[i] = arr_1[i]; 
//     }
//     return arr_2;
// }

// let m1 = [1, 2, 3];
// let mass = copy_array(m1);
// m1[1] = 9;
// console.log(mass, m1);
//////////////////////////////////////////

// try {
//     console.log(x);
//     console.log("hello");
// }
// catch (err) {
//     console.log(err.message);
//     console.log(err.name);
//     console.log(err.stack);
// }
////////////////////////////////////////////
// let error = new Error("Smth went wrong");
// try {
//     if (1) {
//         throw new Error("Smth went wrong")
//     }
// }
// catch(err){
//     console.log(err);
// }
// finally {
//     console.log("The end");
// }
/////////////////////////////////////////////

//Написать функцию, принимающцю на вход число и считающую факториал числа.
//Выкниуть исключение при условии отрицательного числа. 
// function calc_factorial(numb){
//     let result = 1;
//     if(numb>=0){
//         for(let i = 2; i<=numb; i++){
//             result *= i; 
//         }
//         return result;
//     }
//     else if(numb<0){
//         throw new Error("Число меньше нуля");
//     }
//     else{
//         throw new Error("Это не число");
//     }
// }

// let x = 'hello';

// try{
//     console.log(calc_factorial(x));
// }
// catch(err){
//     console.log(err);
// }
//////////////////////////////////////////////////////
