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
        id: 1,
        name: "Пафнутий",
        surname: "Пафнутьев",
        department: "Marketing",
        salary: 1000,
        dateOfBirth: "2000-01-01"
    },
    {
        id: 1,
        name: "Пафнутий",
        surname: "Пафнутьев",
        department: "IT",
        salary: 1000,
        dateOfBirth: "2000-01-01"
    },
];

salaryDepartment = function(department) {
    let departments = DATA.employees.filter(item => item.department == department)
    return departments.reduce((a, b) => a + b.salary, 0)
}


