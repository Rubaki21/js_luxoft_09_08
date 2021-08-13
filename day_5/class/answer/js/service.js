
/**
 * Функция находит сотрудника по его имени.
 * В случае, если имя или фамилия пустые, они игнорируются.
 * Например, findByName("","") находит всех сотрудников.
 * findByName("Иван") находит всех Иванов.
 * findByName(null,"Иванов") находит всех Ивановых
 *
 * @param name имя сотрудника
 * @param surname фамилия сотрудника
 * @returns {*} список сотрудников
 */
function findByName(name, surname) {
    let res = [];
    for (let e of DATA.employees) {
        if ((!name || e.name===name) &&
            (!surname || e.surname===surname)) {
            res.push(e);
        }
    }
    return res;
}

/**
 * Функция добавляет сотрудника по имени.
 * id присваивается автоматически, как самый большой id+1.
 * В случае, если имя или фамилия не заданы, функция выбрасывает
 * исключение с сообщением об ошибке.
 *
 * @returns {number} id добавленного сотрудника
 */
function addEmployee(name, surname) {
	if (!name || !surname ) {
		throw new Error("name and surname should be not empty");
	}
	let max = 0;
	for (let e of DATA.employees) {
		if (e.id>max) max = e.id;
	}
	let id = max+1;
	DATA.employees.push({id,name,surname});
	return id;
}

/**
 * Функция удаляет сотрудника по id
 * @param id
 */
function removeEmployee(id) {
	let index = 0;
	for (let e of DATA.employees) {
		if (e.id===id) break;
		index++;
	}
	DATA.employees.splice(index, 1);
}
/**
 * Показывает всю информацию по сотруднику employee.
 * Использует Object.keys для получения всех ключей объекта.
 * Выводит эту информацию в консоль (console.log)
 * в формате ключ=значение
 *
 * @param employee
 */
function showEmployee(employee) {
	const keys = Object.keys(employee);
	console.log("Информация о сотруднике "+employee["name"]+":");
	for (let key of keys) {
		console.log(key+ " = "+employee[key]);
	}
}

function findById(id) {
	if (employeeMap[id]) {
		return employeeMap[id];
	}
	for (const e of DATA.employees) {
		if (id==e.id) {
			employeeMap[id] = e;
			return e;
		}
	}
}
/**
 * Добавляет номер телефона.
 * Для этого используется свойство phones типа массив. 
 * Если такое свойство отвутствует, оно создается.
 * @param id
 */
function addPhone(id, phone) {
	const employee = findById(id);
	if (!employee) {
		return "Wrong id";
	}
	const phones = employee.phones;
	if (!phones) {
		employee.phones = [];
	}
	employee.phones.push(phone);
}

function setDateOfBirth(id, date) {
	const employee = findById(id);
	if (!employee) {
		return "Wrong id";
	}
	employee.dateOfBirth = date;
}

function getAge(id) {
	const employee = findById(id);
	if (!employee) {
		return "Wrong id";
	}
	let ageDiff = Date.now() - employee.dateOfBirth.getTime();
	let ageDate = new Date(ageDiff); // miliseconds from epoch
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function formatDate(date) {
	let day = date.getDate();
	if (day<10) day = '0'+day;
	let month = date.getMonth()+1;
	if (month<10) month = '0'+(month);
	let year = date.getFullYear();

	return day + '.' + month + '.' + year;
}


function getEmployeeInfo(id) {
	const e = findById(id);
	if (!employee) {
		return "Wrong id";
	}
	const phones = e.phones?
		`Список телефонов: ${e.phones}`:'';
	const age = e.dateOfBirth?
		`Возраст: ${getAge(e.id)}`:'';
	return ` 
		Имя: ${e.name}
		Фамилия: ${e.surname}
		Дата рождения: ${formatDate(e.dateOfBirth)}
		${phones} 
		${age}
	`;
}


function getEmployeeJSON(id) {
	const e = findById(id);
	if (!e) {
		return "Wrong id";
	}
	return JSON.stringify(e);
}


function setEmployeeManager(id, managerId) {
	const e = findById(id);
	e.managerRef = managerId;
}





