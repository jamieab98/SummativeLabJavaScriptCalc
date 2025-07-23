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
            equation = "Error. Cannot divide by 0";
            history.push(equation);
        } else {
        let result = a / b;
        equation = a + " / " + b + " = " + result;
        history.push(equation)
        }
    } else {
        console.log('Error. Please enter a valid operator "+", "-", "*", or "/".')
    }
}
function displayHistory() {
    if (history == ""){
        console.log("History is empty");
    } else {
        console.log(history);
    }
}

expression(2, "+", 7)
expression(15, "/", 43)
//expression(41, "/", 0)
//expression(-51, "-", 3)
displayHistory()

