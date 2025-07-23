let history = [];
let equation = '';

function expression(a, operator, b) {
    if (operator === "+") {
        let result = a + b;
        equation = a + " + " + b + " = " + result;
        history.push(equation)
    } else if (operator === "-") {
        let result = a - b;
        equation = a + " - " + b + " = " + result;
        history.push(equation)
    } else if (operator === "*") {
        let result = a * b;
        equation = a + " * " + b + " = " + result;
        history.push(equation)
    } else if (operator === "/") {
        if (b == 0) {
            console.log("Error. Cannot divide by 0")
        } else {
        let result = a / b;
        equation = a + " / " + b + " = " + result;
        history.push(equation)
        }
    } else {
        console.log('Error. Please enter a valid operator "+", "-", "*", or "/".')
    }
    console.log(history);
    history.splice(0,1);
}

expression(2, "+", 7)
expression(15, "/", 43)