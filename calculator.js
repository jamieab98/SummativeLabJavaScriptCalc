/*function addition(a, b) {
    let sum = a + b;
    console.log(a, "+", b, "=", sum)
}
addition(2, 3)

function subtraction(a, b) {
    let difference = a - b;
    console.log(a, "-", b, "=", difference)
}
subtraction(2, 3)

function multiply(a, b) {
    let product = a * b;
    console.log(a, "*", b, "=", product)
}
multiply(2, 3)

function divide(a, b) {
    let quotient = a / b;
    console.log(a, "/", b, "=", quotient)
}
divide(2, 3)
*/

let history = [];
let equation = '';

function expression(a, operator, b) {
    if (operator === "+") {
        let result = a + b;
        equation = a + " + " + b + " = " + result;
        history.push(equation)
    } else if (operator === "-") {
        let result = a - b;
        history.push(a, operator, b, "=", result)
    } else if (operator === "*") {
        let result = a * b;
        history.push(a, operator, b, "=", result)
    } else if (operator === "/") {
        if (b == 0) {
            console.log("Error. Cannot divide by 0")
        } else {
        let result = a / b;
        history.push(a, operator, b, "=", result)
        }
    } else {
        console.log('Error. Please enter a valid operator "+", "-", "*", or "/".')
    }
    //let historySpaceSeparated = history.join(' ');
    console.log(history);
}

expression(2, "+", 7)
expression(15, "+", 43)
//let listOfNames = [];
//listOfNames.push("Austin");
//listOfNames.push("A + B = C");
//console.log(listOfNames)