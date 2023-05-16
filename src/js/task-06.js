const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {

    const inputValueLength = inputEl.value.length;
    const inputElementLength = inputEl.getAttribute("data-length");

    if (inputValueLength === Number(inputElementLength)) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
})

