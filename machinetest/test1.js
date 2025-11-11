function calculate(event) {
    event.preventDefault();//to avoid refreshing the page
    const firstNum = Number(document.getElementById('first').value);
    const secondNum = Number(document.getElementById('second').value);
    const operator = document.getElementById('operator').value;
    switch(operator) {
        case '+':
            add(firstNum, secondNum);    
        break;
        case '-':
            subtract(firstNum, secondNum);
        break;
        case '*':
            multiply(firstNum, secondNum);
        break;
        case '/':
            divide(firstNum, secondNum);
        break;
    }
}
function add(first, second) {
    let result = first + second;
    printResult(result);
}
function subtract(first, second) {
    let result = first - second;
    printResult(result);
}
function multiply(first, second) {
    let result = first * second;
    printResult(result);
}
function divide(first, second) {
    if(second == 0) {
        window.alert('Not Possible to divide by zero');
        return;
    }
    let result = first / second;
    printResult(result);
}
function printResult(result) {
    const output = document.getElementById('result');
    output.innerHTML = result;
}