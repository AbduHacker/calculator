let buttonsDiv = document.querySelector(".buttons");
let screen = document.querySelector("#display");
function showNumbers(buttons, output) {
    buttons.addEventListener("click", (e) => {
        target = e.target;
        if (target.classList.contains("blue-button")) output.value += target.textContent;
    })
}
showNumbers(buttonsDiv, screen);