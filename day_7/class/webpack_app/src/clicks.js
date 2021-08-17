function count() {
    let counter = 0;
    let isDestroyed = false;
    let listener = () => counter++;
    document.addEventListener("click", listener);
    return {
        destroy() {
            document.removeEventListener("click", listener);
            isDestroyed = true;
        },
        getData() {
            if (isDestroyed) {
                return "The clicker is already destroyed"
            }
            return counter;
        }
    }
}
globalThis.count = count();