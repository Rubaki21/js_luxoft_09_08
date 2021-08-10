// let o = { x: 1, y: 2, z: 3 };
// let str = JSON.stringify(o);
// // console.log(str);
// let obj = JSON.parse(str);
// console.log(obj);
///////////////////////////////////////
// let property = "weight";
// let user = {
//     name: "Tom",
//     age: 20,
//     "is admin": true,
//     [property]: 80

// };
// console.log(user);
// let name = "Kate";
// let user = {
//     name,
//     age: 30
// }

// console.log(user);

// function createUser(name, age) {
//     return {
//         name,
//         age
//     };
// }

// let obj = createUser("Tom", 23);
// console.log(obj);
//////////////////////////////////

// let obj = {
//     x: 1,
// }
// console.log(obj);
//////////////////////////////////
// let obj_1 = {
//     x: 1,
//     y: 2,
// };

// let obj_2 = Object.create(Object);
// console.log(typeof(Object));

// let obj_2 = {};
// let obj_2 = new Object()
//////////////////////////
// let obj_2 = Object.create(obj_1);
// // obj_1.x = 9;
// // console.log(obj_2);

// obj_2.x = 10;
// console.log(obj_2.__proto__.x);
///////////////////////////////////
// let user = {
//     name: "Tom",
//     surname: "Ivanov",
//     get fullName() {
//         return this.name + ' ' + this.surname;
//     },
//     set fullName(value) {
//         let arr = value.split(" ");
//         this.name = arr[0];
//         this.surname = arr[1];
//     },
//     get age() {
//         return this._age;
//     },
//     set age(value) {
//         if (value > 120) {
//             throw "Too big number!";
//         }
//         this._age = value;
//     }
// };
// user.age = 100;
// console.log(user._age);
// user.fullName = "Alex Petrov";
// console.log(user.fullName);
//////////////////////////////////////
// let obj = {
//     x: 1,
// };
// console.log('toString' in obj);
// console.log(obj.hasOwnProperty("toString"));
//////////////////////////////////////////////
// let obj = {
//     x: 1,
//     y: 2,
// };

// // console.log(Object.keys(obj));

// // console.log(Object.values(obj));


// console.log(Object.entries(obj)[1]);
//////////////////////////////////////////
// let obj = {
//     x: 1,
//     y: 2,
//     d: 4,
// };

// // let { x: x1, y:y1, d:z } = obj;
// // console.log(x1, y1,z);

// let { x, ...rest } = obj;
// let { ...obj_2 } = obj;
// obj.x = 8;
// console.log(obj_2);
///////////////////////////////
// let x = [1, 2, 3,];
// let z = [4, 5, 6,9,];
// let y = [x,z];
// // x[0] = 9;
// console.log(y[0][1]);
// console.log(y[1]);
/////////////////////////////
// let o1 = { x: 1 };
// let o2 = { y: 2 };
// let o3 = { z: 3 };

// let clone = Object.assign({}, o1, o2, o3);

// console.log(clone);
///////////////////////////////////

// let obj = {
//     name: "Tom",
//     info: {
//         height: 180,
//         weight: 80,
//     },
// };

// console.log(JSON.parse(JSON.stringify(obj)));
////////////////////////////////////////

// let arr = [
//     [1, 2, 3],
//     4,
// ];

// // let arr_2 = arr;

// let arr_2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr_2.push(arr[i]);
// }
// arr[0][0] = 9;
// console.log(arr_2[0]);

// import copy

// copy.deepcopy()

// let point = {
//     x: 1,
//     y: 2,
//     toString() { return `(${this.x}, ${this.y})` },
//     valueOf() { return Math.hypot(this.x, this.y) },
//     toJSON: function () { return this.toString();},
// };
// // point = undefined;
// // console.log(String(point));
// // console.log(point?.toString());
// // point > 5;
// // console.log((3).toString())
// // console.log(JSON.stringify(point));

// point + 5;

// let x = 10;
// let y = 12;

// console.log("x= " + x + " " + "y= " + y);
// console.log(`x= ${x} y= ${y}`);

// f"{x}"
/////////////////////////////////////////////
// let x = [];
// t;

// let x = [];
// x.push(3);
// console.log(x);
// let t = x.pop()
// console.log(t);

//////////////////////////////////
// let x = [];
// x.unshift(2);
// x.unshift(3);

// x.shift();
// console.log(x);
/////////////////////////////////
// let x = [1, 2, 3, 44, 3, 8, 9];
// console.log(x.splice(1, 2));
// console.log(x);
// delete x[0];
// console.log(x[0]);
////////////////////////////////
// let arr = [6, 8, 9, 7, 6];
// let x = [1, 2, 3, 44, 3, 8, 9];
// x.splice(0, 3, ...arr);
// console.log(x);
////////////////////////

// let arr = [6, 8, 9, 7, 6];
// let x = arr.slice(2,5);
// arr[0] = 987;
// console.log(x);
///////////////////////////
// let arr = [6, 8, 9, 7, 6];
// arr = arr.concat([3, 4], [9, [8,9], 7]);
// console.log(arr);
/////////////////////////////
// let arr = [6, 8, 9, 7, 6];
// arr = arr.concat(...[3, 4], [9, [8, 9], 7]);
// console.log(arr);
///////////////////////////
// let arr = [];
// arr["1"] = 9;
// arr[1.0] = 8
// console.log(arr);
////////////////////////////////
    // let arr = [6, 8, 9, 7, 6];
// let res = 0;
// // arr.forEach(function (value) {
// //     res += value;
// // });
// arr.forEach((value, index, array)=>{
//     res += value;
// });
// console.log(res);
////////////////////////////////////
// let arr = [6, 8, 9, 7, 9];
// console.log(arr.indexOf(9,3));
/////////////////////////////////////
// let arr = [6, 8, 9, 7, 9];
// console.log(arr.forEach(item=> item ** 2));
// console.log(arr.find(item => item % 2 == 0));

// console.log(arr.filter(item => item % 2 == 0));
// console.log([6, 8, 9, 7, 9].map(item => item ** 2));

// let arr = [
//     {
//         name: "Tom",
//         height: 180,
//     },
//     {
//         name: "Jack",
//         height: 170,
//     },
//     {
//         name: "Ivan",
//         height: 150,
//     },
// ]
// //Найти и вывести имена всех людей, у которых рост > 160
// console.log(arr.filter(item => item.height > 160).map(person => person.name).join(", "));

// let arr = "1, 2, 3".split(", ")
// console.log(arr);
/////////////////////////////////////////////////////////////////

// let arr = [11, 6, 8, 9, 7, 9];
// // arr.sort((a, b) => a - b)
// arr.reverse()
// console.log(arr);
//////////////////////////////////////////
// console.log(typeof ([]), typeof ({}));

// console.log(Array.isArray ([]), Array.isArray  ({}));
/////////////////////////////////////

// const x = [1, 2, 3];
// x.push(55);
// console.log(x);
////////////////////////////////////
// function findByName(name, surname) {
//     // let result = [];
//     // for (let i = 0; i < employees.length; i++) {
//     //     //check
//     //     if (check()) {
//     //         result.push(employess[i]);
//     //     }
//     // }
//     // return result;
//     for(let [key, value] of Object.entries(DATA)) {} 

// }


// const DATA = {
//     employees: [
//         {
//             id: 1,
//             name: "Пафнутий",
//             surname: "Пафнутьев",
//             department: "IT"
//         },
//         {
//             id: 2,
//             name: "Дмитрий",
//             surname: "Себастьянов",
//             department: "Finance"
//         }
//     ]
// }

// for (let [_,val]  of Object.entries(DATA)) {
//     console.log(val);
// }

// console.log(Data["employees"])
///////////////////////////////////


