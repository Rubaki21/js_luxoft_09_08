function f(event) {
    let href = event.target.getAttribute("href");
    alert(href);
    event.preventDefault();
}

let ul = document.querySelector("ul");
ul.addEventListener("click", f);