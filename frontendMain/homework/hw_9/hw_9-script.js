// Задача 1
// У вас есть массив чисел [2, 4, 6, 8, 10]. 
// Напишите программу для удвоения каждого значения в массиве и вывода
// результата в консоль. 

let arrNum = [2,4,6,8,10];

for ( let i = 0; i < arrNum.length; i++) {
    const element = arrNum [i] * 2;
    console.log(element);
}
console.log('--------------------------');

// ============================================================================
// Задача 2
// Есть массив чисел (любых) - массив вобратном порядке.


let arrNum1 = [1,2,3,4,5,6,7,8,9];
console.log('Исходный массив: ' + '|' + arrNum1 + '|');

console.log('--------------------------');

if (arrNum1.length >= 2) {
    arrNum1.reverse();
    
    console.log('Массив в обратном порядке: ' + '|' + arrNum1 + '|');
    
}else {
    console.log('Не достаточно елементов в массиве ');
}
console.log('--------------------------');

// ============================================================================
// Задача 2
// Есть массив чисел (любых) - поменять первое и последий элемент 
//массива местами

let arrNum2 = [1,2,3,4,5,6,7,8,9];

let temp = arrNum2[0];


arrNum2[0] = arrNum2[arrNum2.length - 1];

arrNum2[arrNum2.length - 1] = temp;

console.log('Массив со сменой первого и последнего элемента: '  + '|' + arrNum2 + '|'); 
console.log('--------------------------');

// ============================================================================

//Задача 3
//Есть массив чисел (любых) если в массиве есть хотябы одно число равное 
//5 - вывести  в консоль сообщение: "5 Найдено" если нет вывести в консоль
 //сообщение "5 Отсутствует"

let arrNum3 = [12,34,56,778,9,5,33,57,43,98];

let found = false;

for (let i = 0; i < arrNum3.length; i++) {
    
    if (arrNum3[i] === 5) {
        found = true;
        break;
        
    }
}

if (found) {
    console.log("5 Найдено");
} else {
    console.log("5 Отсутствует");
}
console.log('--------------------------');

// ============================================================================
// Задача 2*
// У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите программу для вычисления среднего значения элементов массива и вывода результата в консоль.
// Для решения задач использовать цикл for

let arrNum4 = [10, 15, 20, 25, 30];
let sum = 0;

for (let i = 0; i < arrNum4.length; i++) {
  sum += arrNum4[i];
}

let average = sum / arrNum4.length;
console.log("Среднее значение элементов массива: ", average);
console.log('--------------------------');

