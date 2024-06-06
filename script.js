let operator = ' ';
let inputValue = ' ';
let resultValue = ' ';


// Store HTML components
// Display
let input = document.querySelector('.input');
let result = document.querySelector('.result');
// Buttons
let allClear = document.querySelector('.all-clear');
let  operators = document.querySelectorAll('.operator');
let  numbers = document.querySelectorAll('.number');
let decimal = document.querySelector('.decimal');
let equalSign = document.querySelector('.equal');

// Event Listeners
allClear.addEventListener("click", function() {
    inputValue = ' ';
    resultValue = ' ';
    input.textContent = '0';
    result.textContent = '';
});

numbers.forEach( (number) => number.addEventListener("click", function(e){
    numberAction(e.target.textContent);
}));

operators.forEach( (op) => op.addEventListener("click", function(e){
    operaterAction(e.target.textContent);
}));

// functions
function numberAction(num) {
    if (inputValue.length <= 20) {
    inputValue += num;
    };
    input.textContent = inputValue;
};

function operaterAction(op) {
    if (inputValue !== ' ' && !inputValue.endsWith(' ')) {
        operator = op;
        inputValue += ' ' + operator + ' ';
        input.textContent = inputValue;
    }
};

// Main operator functions
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const divide = (a, b) => a / b;

