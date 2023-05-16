const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", () => {
    const inputValue = inputEl.value + "px";
    spanEl.style.fontSize = inputValue;
})
