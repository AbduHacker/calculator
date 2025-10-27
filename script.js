function showNumbers() {
    buttonsDiv.addEventListener("click", (e) => {
        target = e.target;
        if (target.classList.contains("blue-button")) {
            screen.value += target.textContent;
            if (!(expression.operator)) expression.operand1 = screen.value;
            else if (expression.operator) expression.operand2 = (screen.value) ? screen.value : "empty";
        }
    });
}
function clearNumber() {
    buttonsDiv.addEventListener("click", (e) => {
        let target = e.target;
        if (target.id === "clear") {
            let text = screen.value;
            screen.value = text.slice(0, -1);
        };
    });
}
function clearAll() {
    buttonsDiv.addEventListener("click", (e) => {
        let target = e.target;
        if (target.id === "clear-all") {
            screen.value = "";
            expression.operand1 = "";
            expression.operand2 = "";
            expression.operator = "";
        }
    });

}

function calculate() {
    let operand1 = expression.operand1;
    let operand2 = expression.operand2;
    let operator = expression.operator;
    if (+operand2 === 0) {
                expression.evaluated = "Error";
                return;
    }
    switch (operator) {
        case "+":
            expression.evaluated = (+operand1) + (+operand2);
            break;
        case "-":
            expression.evaluated = (+operand1) - (+operand2);
            break;
        case "×":
            expression.evaluated = (+operand1) * (+operand2);
            break;
        case "÷":
            expression.evaluated = (+operand1) / (+operand2);
            break;
    }
    expression.operand1 = "";
    expression.operand2 = "";
    expression.operator = "";
    expression.evaluated = Math.round(expression.evaluated * 100) / 100;
}
function operators() {
    buttonsDiv.addEventListener("click", (e) => {
        let target = e.target;
        if (target.classList.contains("operator")) {
            let operand1 = expression.operand1;
            let operand2 = expression.operand2;
            let operator = expression.operator;
            if (operand1 && operand2 && operator) {
                calculate();
                expression.operand1 = expression.evaluated;
                expression.operator = target.textContent;
                screen.value = "";
            } else if (!operator) {
                expression.operand1 = screen.value;
                screen.value = "";
                expression.operator = target.textContent;
            }
        }
    });
}
function result() {
    buttonsDiv.addEventListener("click", (e) => {
        let target = e.target;
        if (target.id === "equal-sign") {
            let operand1 = expression.operand1;
            let operator = expression.operator;
            let operand2 = expression.operand2;
            if (operand1 && operator) {
                console.log("hello");
                expression.operand2 = screen.value;
                calculate();
                screen.value = expression.evaluated;
            }
        }
    })
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
calculate();
operators();
result();