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
            let res = getRandomInt(1000);
            return new Promise((resolve, reject) => {
                setTimeout(() => res < 700 ? resolve(res) : reject(res), 1000);
            });
    }

    total() {
        return this.bonus()
            .then(data => new Promise(resolve => resolve(this.salary + data)))
            .catch(error => Promise.reject("wrong bonus"));
    }

    // async totalAsync() {
    //     return await this.bonus() + this.salary;
    // }
}

let ul = document.getElementById("container");
[new Employee("John", "Smith", 2000), new Employee("Ivan", "Ivanov", 5000)]
    .forEach(e => {
        let li = document.createElement("li");
        li.textContent = e.name + " " + e.surname;
        ul.append(li);
        e.total()
            .then(data => {
                li.textContent += " " + data;
            })
            .catch(error => {
                li.textContent += " " + error;
            })
    });