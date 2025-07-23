function addition(a, b) {
    let sum = a + b;
    console.log(a, "+", b, "=", sum)
}
//addition(2, 3)

function subtraction(a, b) {
    let difference = a - b;
    console.log(a, "-", b, "=", difference)
}
//subtraction(2, 3)

function multiply(a, b) {
    let product = a * b;
    console.log(a, "*", b, "=", product)
}
//multiply(2, 3)

function divide(a, b) {
    let quotient = a / b;
    console.log(a, "/", b, "=", quotient)
}
//divide(2, 3)

function expression(a, operator, b) {
    if (operator === "+") {
        let result = a + b;
        console.log(a, operator, b, "=",result)
    } else if (operator === "-") {
        let result = a - b;
        console.log(a, operator, b, "=", result)
    } else if (operator === "*") {
        let result = a * b;
        console.log(a, operator, b, "=", result)
    } else if (operator === "/") {
        let result = a / b;
        console.log(a, operator, b, "=", result)
    } else {
        console.log('Error. Please enter a valid operator "+", "-", "*", or "/".')
    }
}

//let history = [];
function updateHistory(update) {
    let history = [];
    history[0] = update;
    console.log(history);
}
updateHistory("2 / 4 = 0.5")
updateHistory("5 + 3 = 8")