const PLACEHOLDER = "employeesPlaceholder";
const ERROR_DIV = "addEmployeeFormErrorMessage";
function runUI() {

    const employeesOptions = getEmployeesOptions();
	fillSelect(document.getElementById("managerSelect"), employeesOptions);
	employeesOptions.unshift({text:"-----------",value:""});
	fillSelect(document.getElementById("managerSearch"), employeesOptions);

    showEmployees(DATA.employees);
    document.getElementById("searchButton").click();
    assignSendOnEnter("searchPane","searchEmployeesButton");
    assignSendOnEnter("addPane", "addEmployeeButton");

}


function addEmployeeUI() {
    document.getElementById("name").style.backgroundColor = '';
    document.getElementById("surname").style.backgroundColor = '';

	let errorHTML = "";
    const name = document.getElementById("name").value;
    
    if (name=="") {
        errorHTML += "- Имя сотрудника должно быть задано<br>";
        document.getElementById("name").style.backgroundColor = '#FFEEEE';
    }
    const surname = document.getElementById("surname").value;
    if (surname=="") {
        errorHTML += "- Фамилия сотрудника должна быть задана<br>";
        document.getElementById("surname").style.backgroundColor = '#FFEEEE';
    }



    document.getElementById(ERROR_DIV).innerHTML = errorHTML;
    if (errorHTML.length != 0)
        return;

    
    const id = addEmployee(name, surname);
    const managerId = document.getElementById("managerSelect").value;
    setEmployeeManager(id, managerId);

    showEmployees(DATA.employees);
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
}




function clearEmployeesPlaceholder() {
	document.getElementById(PLACEHOLDER).innerHTML = "";
}


/**
 * Данная функция ответственна за отрисовку списка задач из DATA.tasks.
 * Конечный результат надо поместить в div tasksPlaceholder.
 */
function showEmployees(employees) {
	clearEmployeesPlaceholder();
	const ul = document.createElement("ul");

	for (let employee of employees) {
		const li = document.createElement("li");
		ul.append(li);

		li.innerHTML = employee.name+" "+employee.surname;

		if (employee.managerRef) {
			let manager = findById(employee.managerRef);
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
	document.getElementById(PLACEHOLDER).append(ul);;
}


function removeEmployeeUI(id) {
    removeEmployee(id);
    showEmployees(DATA.employees);
}


function fillSelect(select, values, selectedValue) {
    for (let val of values) {
        const option = document.createElement("option");
        option.text = val.text;
        option.value = val.value;
        if (selectedValue==option.value) option.selected=true;
        select.append(option);
    }
}


function getEmployeesOptions() {
    let options = [];
    for (let e of DATA.employees) {
        options.push({text:e.name+' '+e.surname, value:e.id});
    }
    return options;
}


function searchEmployeeUI() {
    const name = document.getElementById("nameSearch").value;
    const surname = document.getElementById("surnameSearch").value;
    const managerRef = document.getElementById("managerSearch").value;

    const employees  = searchEmployees(name, surname, managerRef);
    showEmployees(employees);
}



/**
 * Активирует выбранный таб
 * @param evt событие, вызывающее активацию
 * @param id идентификатор таба
 */
function openTab(evt, id) {
 // Определяем переменные
    let i, tabcontent, tablinks;

    // Получаем все элементы с class="tabcontent" и прячем их
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Получаем все элементы с class="tablinks" и удаляем класс "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Показываем текущий таб и добавляем класс "active"
    // на кнопку, которая открывает этот таб
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
}

function assignSendOnEnter(paneId, buttonId) {
    let allInput = document.querySelectorAll("#"+paneId+" input");
    for (let input of allInput) {
        input.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.querySelector("#"+paneId+" button").click();
            }
        });
    }
}
