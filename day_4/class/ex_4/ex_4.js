function handler(event) {
    if (event.target.tagName == "TD") {
        tdSelect = highlight(event.target);
    }
}

function highlight(td) {
    if (tdSelect) {
        tdSelect.classList.remove("highlight");
    }
    td.classList.add("highlight");
    return td;

}

let tdSelect = null;

let table = document.querySelector("table");

table.addEventListener("click", handler);
