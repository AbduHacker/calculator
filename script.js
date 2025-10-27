function showNumbers() {
    buttonsDiv.addEventListener("click", (e) => {
        target = e.target;
        if (target.classList.contains("blue-button")) screen.value += target.textContent;
    });
}
function clearNumber() {
    buttons.addEventListener("click", (e) => {
        let target = e.target;
        if (target.id === "clear") {
            let text = screen.value;
            output.value = text.slice(0, -1);
        };
    });
}
function clearAll() {
    buttonsDiv.addEventListener("click", (e) => {
        let target = e.target;
        if (target.id === "clear-all") {
            screen.value = "";
        }
    });

}

function calculate() {
    let operand1 = expression.operand1;
    let operand2 = expression.operand2;
    let operator = expression.operator;
    switch (operator) {
        case "+":
            expression.evaluated = +operand1 + +operand2;
            break;
        case "-":
            expression.evaluated = +operand1 + +operand2;
            break;
        case "×":
            expression.evaluated = +operand1 * +operand2;
            break;
        case "÷":
            expression.evaluated = +operand1 / +operand2;
            break;
    }
}
let buttonsDiv = document.querySelector(".buttons");
let screen = document.querySelector("#display");
let expression = {
    operand1 : "",
    operator : "",
    operand2 : "",
    evaluated : "",
}
showNumbers();
clearNumber();
clearAll();