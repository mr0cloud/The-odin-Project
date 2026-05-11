let operand1 = "";
let operand2 = "";
let operation = "";
let result = "";
let isDisplayed = false;

function summation(operand1, operand2) {
    return operand1 + operand2;
}

function subtraction(operand1, operand2) {
    return operand1 - operand2;
}

function division(operand1, operand2) {
    if (operand2 == 0) {
        return "Error! cannot divide by zero"
    }
    return operand1 / operand2;
}

function multiplication(operand1, operand2) {
    return operand1 * operand2;
}


function operator(operand1, operand2, operation) {
    if (operation == "+") {
        return summation(operand1, operand2);
    }
    else if (operation == "-") {
        return subtraction(operand1, operand2);
    }
    else if (operation == "/") {
        return division(operand1, operand2);
    }
    else {
        return multiplication(operand1, operand2);
    }
}

const buttons = document.querySelectorAll("button");
const resultArea = document.querySelector("#numArea");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.id;

        if (value == "clear") {
            operand1 = "";
            operand2 = "";
            operation = "";
            resultArea.textContent = "";
            isDisplayed = false;
        }
        else if (value == "equal") {
            result = operator(Number(operand1), Number(operand2), operation);
            resultArea.textContent = Number(result.toFixed(3)).toString();
            isDisplayed = true;
        }
        else if (isDisplayed) {
            isDisplayed = false;
            operand1 = result;
            operand2 = "";
            operation = "";

            if (["+", "-", "x", "/"].includes(value)) {
                operation = value;
                resultArea.textContent += ` ${operation} `;
            }
            else if (operand2 === "") {
                operand2 = value;
                resultArea.textContent += ` ${operand2}`;
            }
            else {
                operand2 += value;
                resultArea.textContent += value;
            }
        }
        else if (!isDisplayed) {
            if (operand1 === "") {
                operand1 = value;
                resultArea.textContent = `${operand1} `;
            }
            else if (["+", "-", "x", "/"].includes(value)) {
                operation = value;
                resultArea.textContent += ` ${operation} `;
            }
            else if (operation === "") {
                operand1 += value;
                resultArea.textContent = `${operand1} `;
            }
            else if (operand2 === "") {
                operand2 = value;
                resultArea.textContent += ` ${operand2}`;
            }
            else {
                operand2 += value;
                resultArea.textContent += value;
            }
        }
    })
})
