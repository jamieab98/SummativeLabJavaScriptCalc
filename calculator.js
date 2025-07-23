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

//Insert expressions below this line

//Insert expressions above this line

displayHistory()