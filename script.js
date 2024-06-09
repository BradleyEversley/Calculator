// GLOBAL VARIABLES
/* #region Main */
let operator = '';
let inputValue = '';
let resultValue = '';
/* #endregion */

// STORE HTML COMPONENTS
/* #region Main */
let input = document.querySelector('.input');
let result = document.querySelector('.result');
/* #endregion */

// Buttons
/* #region Main */
let allClear = document.querySelector('.all-clear');
let operators = document.querySelectorAll('.operator');
let numbers = document.querySelectorAll('.number');
let decimal = document.querySelector('.decimal');
let equalSign = document.querySelector('.equal');
/* #endregion */

// EVENT LISTENERS
/* #region Main */
allClear.addEventListener("click", function() {
    inputValue = '';
    resultValue = '';
    operator = '';
    input.textContent = '0';
    result.textContent = '';
});

numbers.forEach(number => number.addEventListener("click", function(e) {
    numberAction(e.target.textContent);
}));

operators.forEach(op => op.addEventListener("click", function(e) {
    operatorAction(e.target.textContent);
}));

equalSign.addEventListener("click", function() {
    compute();
});
/* #endregion */

// FUNCTIONS
/* #region Main */
function numberAction(num) {
    if (inputValue.length <= 20) {
        inputValue += num;
    }
    input.textContent = inputValue;
}

function operatorAction(op) {
    if (op === '%') {
        computePercentage();
    } else if (inputValue !== '' && !inputValue.endsWith(' ')) {
        operator = op;
        inputValue += ' ' + operator + ' ';
        input.textContent = inputValue;
    }
}

function compute() {
    // Split the input value by space to extract operands and operator
    let [firstOperand, operator, secondOperand] = inputValue.split(' ');

    // Convert string operands to float
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);

    // Ensure both operands are valid numbers
    if (isNaN(firstOperand) || isNaN(secondOperand)) {
        return;
    }

    // Perform the computation based on the operator
    switch (operator) {
        case '+':
            resultValue = firstOperand + secondOperand;
            break;
        case '-':
            resultValue = firstOperand - secondOperand;
            break;
        case 'x':
            resultValue = firstOperand * secondOperand;
            break;
        case '/':
            resultValue = firstOperand / secondOperand;
            break;
        default:
            resultValue = 'Error';
    }

    // Only update the result display, keep input unchanged to show full expression
    result.textContent = resultValue.toString();
}

function computePercentage() {
    // Ensure input value is not empty
    if (inputValue !== '') {
        // Convert input value to float
        let number = parseFloat(inputValue);

        // Ensure the number is valid
        if (!isNaN(number)) {
            // Compute the percentage
            resultValue = parseFloat((number / 100).toFixed(5));

            // Update both input and result to show the percentage calculation result
            inputValue = resultValue.toString();
            input.textContent = inputValue * 100 + '%';
            result.textContent = resultValue;
        }
    }
}
/* #endregion */