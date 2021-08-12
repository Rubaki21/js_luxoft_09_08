class Handler {
    handleEvent(event) {
        console.log(event);
        if (event.type == "mousedown") {
            element.textContent = "+";
        }
        else if (event.type == "mouseup") {
            element.textContent = "-";
        }
    }
}

let element = document.querySelector("button");
let h = new Handler();
element.addEventListener("mousedown", h);
element.addEventListener("mouseup", h);