// let range = {
//     from: 0,
//     to: 10
// }

// let human = {
//     name: "Tom",
//     age : 43,
// }

// function human(name, age) {
//     let r = Object.create(human.methods);
//     r.name = name;
//     r.age = age;
//     return r;
// }

// human.methods = {
//     show() {
//         console.log(`${this.name} ${this.age}`);
//     }
// }

// let a = human("Tom", 23);
// a.show();


// function Human(name, age) {
//     // let r = Object.create(human.methods);
//     // this = {};
//     this.name = name;
//     this.age = age;
//     // this.show = function() {
//     //     console.log(`${this.name} ${this.age}`);
//     // }
//     // return this;
//     // return r;
// }

// Human.prototype = {
//     show() {
//         console.log(`${this.name} ${this.age}`);
//     }
// }

// let a = new Human("Tom", 23);
// a.show();



// class Human {
//     // name = "Tom";

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
    
//     get age() {
//         return this._age;
//     }

//     set age(value) {
//         if (value >= 0) {
//             this._age = value;
//         }
//         else {
//             console.log("Error");
//             this._age = 0;
//         }
        
//     }

//     show() {
//         console.log(`${this.name} ${this.age}`);
//     }
// }

// let a = new Human("Jack",23);
// // a.age = -60;
// a.show();

// console.log(a.#name);
///////////////////////////////////////
//Создать класс Круг с атрибутом r. 
//Написать методы, считающие площадь и периметр круга
// class Сircle {
//     constructor(r) {
//         this.r = r;
//     }
//     get r() {
//         return this._r;
//     }
//     set r(value) {
//         if (value >= 0) {
//             this._r = value;
//         }
//         else {
//             console.log("Сircle: Error");
//             this._r = 0;
//         }
//     }
//     square() {
//         return Math.PI*this._r*this._r;
//     }
//     perimeter() {
//         return 2*Math.PI*this._r;
//     }
// }
// let circle_1 = new Сircle(2);
// console.log(circle_1.square(), circle_1.perimeter());
////////////////////////////////////////
//Создать массив с кругами(динамически(радиусы - рандомные числа)).
//Отсортировать массив по площади кругов и вывести.
// class Circle {
//     constructor(r) {
//         this.r = r;
//     }
//     get r() {
//         return this._r;
//     }
//     set r(value) {
//         if (value >= 0) {
//             this._r = value;
//         }
//         else {
//             console.log("Сircle: Error");
//             this._r = 0;
//         }
//     }
//     square() {
//         return Math.PI*this._r*this._r;
//     }
//     perimeter() {
//         return 2*Math.PI*this._r;
//     }
//     show() {
//         console.log(`${this._r}: ${this.square()}`);
//     }
// }

// [Math.random(), Math.random(), Math.random()]
//     .map(item => new Circle(item))
//     .sort((a, b) => a.square() - b.square())
//     .filter(circle =>circle.square()>1)
//     .forEach(circle=>circle.show());
//////////////////////////////////////////////////
// class Animal{
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }

//     show() {
//         console.log(`${this.name} ${this.color}`)
//     }
// }

// class Cat extends Animal{
//     constructor(owner) {
//         // super(name, color);
//         this.owner = owner;
//     }

//     show() {
//         super.show();
//         console.log(`${this.owner}`);
//     }

//     mey() {
//         console.log("MEY!!!");
//     }
// }

// let murka = new Cat("Murka", "grey", "Ivan");
// murka.show();
// murka.mey();
//////////////////////////////////////////
//Создать Иерархию классов: Figure, Circle, Rectangle, Triangle
//S, P, Show
// class Figure {
    
//     show() {
//         console.log(`Square: ${this.getSquare()}; Perimeter: ${this.getPerimeter()}`)
//     }
// }

// class Circle extends Figure {
//     constructor(r) {
//         super();
//         this.r = r;
//     }

//     getSquare() {
//         return Math.PI * Math.pow(this.r, 2);
//     }
//     getPerimeter() {
//         return 2 * Math.PI * this.r;
//     }
// }

// class Rectangle extends Figure {
//     constructor(a, b) {
//         super();
//         this.a = a;
//         this.b = b;
//     }

//     getSquare() {
//         return this.a * this.b;
//     }
//     getPerimeter() {
//         return 2 * (this.a + this.b);
//     }
// }

// class Triangle extends Figure {
//     constructor(a, b, c) {
//         super();
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }

//     getSquare() {
//         return 0.5 * this.a * this.b;
//     }
//     getPerimeter() {
//         return this.a + this.b + this.c;
//     }
// }

// const circle = new Circle(3);
// const rectangle = new Rectangle(5, 6);
// const triangle = new Triangle(2, 3, 5)

// circle.show()
// rectangle.show()
// triangle.show()
///////////////////////////////////////////////////
// class MyMath{
//     static PI = 3.14;
//     static E = 2.71;
//     static CircleSquare(r) {
//         return MyMath.PI * r ** 2;
//     }
// }

// console.log(MyMath.CircleSquare(3));
/////////////////////////////////////////////////////
// class X{
//     n = 10;
//     constructor(n = 10) {
//         this.n = n;
//     }

//     show() {
//         console.log(this.n);
//     }
// }
// let o = new X();
// o.show();
///////////////////////////////////////////////
// "use strict"
// let user = {
//     name: "Tom"
// };

// Object.defineProperty(user, "name", {
//     "writable": false,
//     "configurable": false
// });

// user.name = "Jack";
// delete user.name;
// console.log(user.name);
// console.log(JSON.stringify(Object.getOwnPropertyDescriptor(user, "name")));
///////////////////////////////////////////////////



