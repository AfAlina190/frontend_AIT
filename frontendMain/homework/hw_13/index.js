
// const firstNumInput = document.getElementById('firstNum');
// const secondNumInput = document.getElementById('secondNum');

// let sign = null;

// // подписка на событие кнопок цифр
// const numButtons = document.getElementsByClassName('num');
// for (let i = 0; i < numButtons.length; i++) {
//     numButtons[i].addEventListener('click', (e) => {

//         if (!sign) {
//             firstNumInput.value += e.target.innerText;
//         } else {
//             secondNumInput.value += e.target.innerText;
//         }
//     });
// }

// // подписка на событие математических знаков
// const signButtons = document.getElementsByClassName('sign');
// for (let i = 0; i < signButtons.length; i++) {
//     signButtons[i].addEventListener('click', (e) => {
//         sign = e.target.innerText;
//     });
// }

// // Подписка на событие кнопок операций
// const operationButtons = document.getElementsByClassName('operation');
// for (let i = 0; i < operationButtons.length; i++) {
//     operationButtons[i].addEventListener('click', (e) => {
//         sign = e.target.innerText;
//     });
// }
 
// // Подписка на событие кнопки AC (очистки)
// const acButton = document.getElementById('ac');
// acButton.addEventListener('click', () => {
//     firstNumInput.value = '';
//     secondNumInput.value = '';
// });

// // подписка события кнопки равно
// const resBtn = document.getElementById('res');
// resBtn.addEventListener('click', () => {
//     const firstVal = parseInt(firstNumInput.value);
//     const secondVal = parseInt(secondNumInput.value);
//     const res = calculate(firstVal, secondVal, sign);
//     console.log(res);

//     firstNumInput.value = ''; // Очистка значений инпутов после нажатия на кнопку "равно"
//     secondNumInput.value = '';
// });


// const calculate = (a, b, sign) => {
//     switch (sign) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return a / b;
//         case '%':
//             return a % b;
//         case '^':
//             return Math.pow(a, b);
//         default:
//             return "Неверная операция";
//     }
// }

// // const res = calculate(1, 2, '+');
// // console.log(res);


const display = document.getElementById('display');
let expression = '';

document.querySelectorAll('.num').forEach(button => {
    button.addEventListener('click', () => {
        expression += button.textContent;
        display.value = expression;
    });
});

document.querySelectorAll('.operation').forEach(button => {
    button.addEventListener('click', () => {
        const lastChar = expression[expression.length - 1];
        if (!lastChar || /[+\-*/]/.test(lastChar)) {
            return;
        }
        expression += button.textContent;
        display.value = expression;
    });
});

document.querySelector('.ac').addEventListener('click', () => {
    expression = '';
    display.value = '';
});

document.querySelector('.res').addEventListener('click', () => {
    const operatorIndex = expression.search(/[+\-*/]/);
    if (operatorIndex === -1 || operatorIndex === expression.length - 1) {
        display.value = 'Error';
        return;
    }
    const operator = expression[operatorIndex];
    const operands = expression.split(operator);
    const num1 = parseFloat(operands[0]);
    const num2 = parseFloat(operands[1]);
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                display.value = 'Error';
                return;
            }
            result = num1 / num2;
            break;
    }
    display.value = result;
    expression = '';
});
