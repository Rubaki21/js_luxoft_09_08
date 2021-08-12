window.onload = () => {
    function f(event) {
        console.log("f");
        console.log(event);
    }

    function d(event) {
        console.log("d");
        console.log(event);
    }

    let elem = document.querySelector("button");

    elem.onclick = f;

    // elem.onclick = d;

    // elem.addEventListener("click", f);
    // setTimeout(()=>elem.removeEventListener("click", f),3000)
    // elem.addEventListener("click", d);
}