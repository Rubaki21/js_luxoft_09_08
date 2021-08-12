function handler(event) {
    // console.log(event.currentTarget);
    // console.log(event.target);
    console.log(this);
    event.stopPropagation();
}

let div = document.querySelector("div");
let p = document.querySelector("p");
let span = document.querySelector("span");

span.addEventListener("click", handler);
p.addEventListener("click", handler);
div.addEventListener("click", handler);
