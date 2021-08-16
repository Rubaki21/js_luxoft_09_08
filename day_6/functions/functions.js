// let arr = [2, 4, 3, 2];
// let res = arr.filter(item => item % 2 == 0);
// console.log(res);
/////////////////////////////////////////////
// let arr = [2, 4, 3, 2, 5, 6, 4];
// let res = arr.reduce((sum, item) => sum + item, 0);
// //1 sum = 0, item = 2 => 2
// //2 sum = 2, item = 4 => 6
// //3 sum = 6, item = 3 => 9
// let res = arr.reduce((sum, item) => sum + item);
// //1 sum = 2, item = 4 => 6
// //2 sum = 6, item = 3 => 9
// console.log(res);
//////////////////////////////////////////////
// sum(2)(2)=>4
// sum(2,2)=>4

// function sum(a) {
//     return function (b) {
//         console.log(a + b);
//     }
// }

// let f = sum(2);
// f(3);
// sum(2)(3);

// let sum = a => b => a + b;
// console.log(sum(2)(3));
//////////////////////////////////////////////
data = [
    {
        id: 1,
        name: "Пафнутий",
        surname: "Пафнутьев",
        department: "IT",
        salary: 1000,
        dateOfBirth: "2000-01-01"
    },
    {
        id: 2,
        name: "Пафнутий",
        surname: "Пафнутьев",
        department: "Marketing",
        salary: 1000,
        dateOfBirth: "2000-01-01"
    },
    {
        id: 3,
        name: "Пафнутий",
        surname: "Пафнутьев",
        department: "IT",
        salary: 1000,
        dateOfBirth: "2000-01-01"
    },
    {
        id: 4,
        name: "Пафнутий",
        surname: "Пафнутьев",
        department: "IT",
        salary: 3000,
        dateOfBirth: "2000-01-01"
    },
];

// function sum(dep) {
//     return data.filter(item => item.department == dep)
//                .map(item => item.salary)
//                .reduce((res, salary)=>res+salary);
// }

// function sum(dep) {
//     return data.filter(item => item.department == dep)
//                .reduce((res, item)=>res+item.salary, 0);
// }


// console.log(sum("IT"));


// -	avgSalaryInDep(dep) - средняя зарплата в департаменте
// -	maxSalaryInDep(dep) - самая большая зарплата в департаменте
// -	depWithMaxSalary() - департамент с самой большой средней зарплатой
// -	depEmployees(dep) - список всех сотрудников департамента
//     - employeesWithSalaryMoreThan(salary) – список всех сотрудников с зарплатой,
//         превышающей указанную
// avgSalaryInDep(dep) // средняя зарплата в департаменте
// function avgSalaryInDep(dep) {
//     let res = data.filter(item => item.department == dep)
//         .map(item => item.salary)
//     return res.reduce((a, b) => a + b) / res.length
// }

// // maxSalaryInDep(dep) // самая большая зарплата в департаменте
// function maxSalaryInDep(dep) {
//     let res = data.filter(item => item.department == dep)
//         .map(item => item.salary)
//     return Math.max(...res)
// }

// // depWithMaxSalary() // департамент с самой большой средней зарплатой
// function depWithMaxSalary() {
//     let allDepartments = []
//     data.forEach(element => {
//         if(!allDepartments.includes(element.department)) {
//             allDepartments.push(element.department)
//         }
//     });


//     let resultDepartmets = {};

//     allDepartments.forEach(dep => {
//         let avg = avgSalaryInDep(dep);
//         resultDepartmets[dep] = avg
//     })

//     // resultDepartmets = {"IT": 2000, "Marketing": 1500}

//     let max = Math.max(...Object.values(resultDepartmets)) 
//     departments = []
//     for(const [dep, sal] of Object.entries(resultDepartmets)) {
//         if(sal == max) {
//             departments.push(dep) 
//         }
//     }

//     return departments;
    
// }


// // depEmployees(dep) // список всех сотрудников департамента
// function depEmployees(dep) {
//     return data.filter(item => item.department == dep).map(item => item.name)
// }

// // employeesWithSalaryMoreThan(salary) // список всех сотрудников с зарплатой,
// function employeesWithSalaryMoreThan(dep) {
//     return data.filter(item => item.department == dep).map(item => {
//         if(item.hasOwnProperty('salary')) {
//             return item.name
//         }
//     })
// }

// // employeesWithSalaryMoreThan(salary) // список всех сотрудников с зарплатой, превышающей указанную
// function employeesWithSalaryMoreThan(salary) {
//     return data.filter(item => item.salary > salary).map(item => item.name)
// }



// console.log(depWithMaxSalary());

// let arr = [1, 2, 3];
// arr[0] = 5;

// let str = "hello";
// str[0] = 'H';

// let arr_1 = [1, 2, 3];
// let arr_2 = [1, 2, 3];
// console.log(arr_1[0] == arr_2[0]);

// console.log(2 === "2");

// let arr_1 = [1, 2, 3];
// let b = arr_1;
// let arr_2 = [3, 4, 5];
// arr_1 = arr_2;
// console.log(arr_1);

// let user_1 = {
//     name: "Tom",
//     age: 20
// };

// let user_2 = Object.assign({}, user_1, {"age": 21});
// console.log(user_1);

// let user_1 = {
//     name: "Tom",
//     age: 20
// };

// let user_2 = {...user_1, name : "jack" };
// console.log(user_1);
///////////////////////////////////////////////
// let obj = {
//     a: 1,
//     b: 2,
//     toString() {
//         return `a:${this.a}, b:${this.b}`
//     }
// };

// function f_1(obj) {
//     obj.a *= 2;
//     return obj.a;
// }

// function f_2(a) {
//     a *= 2;
//     return a;
// }


// console.log(f_2(obj.a));
// console.log(String(obj));
// console.log(f_2(obj.a));
// for (let index = 0; index < 1000000; index++) {
//     let _ = 1 * index;
// }
// console.log(obj);
// console.log(f_1(obj));
// console.log(obj);
// console.log(f_1(obj));

/////////////////////////////////////////
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    toString() {
        return `a:${this.a}, b:${this.b}`
    }
};

function show(a, b, c, d) {
    
}
function show(obj) {
    
}
