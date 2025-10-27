let buttonsDiv = document.querySelector(".buttons");
let screen = document.querySelector("#display");
function showNumbers(buttons, output) {
    buttons.addEventListener("click", (e) => {
        target = e.target;
        if (target.classList.contains("blue-button")) output.value += target.textContent;
    });
}
function clearScreen(buttons ,output) {
    buttons.addEventListener("click", (e) => {
        target = e.target;
        if (target.id === "clear") {
            let text = output.value;
            output.value = text.slice(0, -1);
        };
    });
}
showNumbers(buttonsDiv, screen);
clearScreen(buttonsDiv, screen);