const calculatorScreenHistory = document.querySelector('.calculator-screen-history');
const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = ()=>{
    calculatorScreen.value = currentNumber;
}

const updateScreenHistory = ()=>{
    calculatorScreenHistory.value = `${prevNumber} ${calculationOperator} ${currentNumber}`;    
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value);
        updateScreen();
        updateScreenHistory();
    })
})

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value);
    })
})

const inputOperator = (operator)=>{
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    } else{
        calculate();
    }
    calculationOperator = operator;
    currentNumber = '0';
}

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        case '%':
            result = (parseFloat(prevNumber) * parseFloat(currentNumber)) / 100;;
            break;
        default:
            break;
    }
    currentNumber = result.toString();
    prevNumber = currentNumber;
    calculationOperator = '';
}
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', ()=>{
    calculate();
    updateScreen();
});

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen();
    updateScreenHistory();
});
const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot;
}
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen();
    updateScreenHistory();
});