/**
 * Функция удаляет сотрудника по id
 * @param employees
 * @param id
 */
function removeEmployee(employees, id) {
    return employees.filter(employee => employee.id !== id);
}

function addEmployee(employees, name, surname) {
	if (!name || !surname ) {
		throw new Error("name and surname should be not empty");
	}
	let max = 0;
	for (let e of employees) {
		if (e.id>max) max = e.id;
	}
	let id = max+1;

    let copyEmploeesString = JSON.stringify(employees);
    let emploeesStorage = JSON.parse(copyEmploeesString).push({id,name,surname});
	
	return [id, emploeesStorage];
}

function addPhone(employees, id, phone) {

    let copyEmploeesString = JSON.stringify(employees);
    let emploeesStorage = JSON.parse(copyEmploeesString)

	const employee = findById(emploeesStorage,id);
	if (!employee) {
		return "Wrong id";
	}
    
	const phones = employee.phones;
	if (!phones) {
		employee.phones = [];
	}
	employee.phones.push(phone);

    
    return emploeesStorage;
}

employess = addPhone()

function findById(employees, id) {
	for (const e of employees) {
		if (id==e.id) {
			return e;
		}
	}
}



function showEmployees(employees) {
	clearEmployeesPlaceholder();
	let resultHtml = showEmployeesView(employees);
	document.getElementById(PLACEHOLDER).append(resultHtml);
}

function showEmployeesView(employees) {

    const ul = document.createElement("ul");

	for (let employee of employees) {
		const li = document.createElement("li");
		ul.append(li);

		li.innerHTML = employee.name+" "+employee.surname;

		if (employee.managerRef) {
			const managerSpan = document.createElement("span");
			const managerSelect = document.createElement("select");
			fillSelect(managerSelect, getEmployeesOptions(), employee.managerRef);
			managerSelect.addEventListener('change',
				() => employee.managerRef=managerSelect.value);
			managerSpan.innerHTML = " <b>Руководитель:</b> ";
			li.append(managerSpan);
			li.append(managerSelect);
		}


		const removeButton = document.createElement("button");
		removeButton.innerHTML = "X";
		removeButton.addEventListener('click',
			() => removeEmployeeUI(employee.id));
		li.append(removeButton);

	}

    return ul;
}



