let message = 'hallo';
message = 'jupiter';

console.log(message);
console.log('=================================');

let arrNum2 = [2, 4, 55, 66];
let temp = arrNum2[0];

arrNum2[0] = arrNum2[arrNum2.length - 1];
arrNum2[arrNum2.length - 1] = temp;

console.log(arrNum2);
console.log('=================================');

let arrNum3 = [333, 35, 4, 5, 66, 44];

let found = false;

for (i = 0; i < arrNum3.length; i++) {

    if (arrNum3[i] === 5) {
        found = true;
        break;
    }

}
if (found) {
    console.log('includ 5');
} else {
    console.log('not includ 5');
}

console.log('=================================');
let age = prompt('Сколько тебе лет', 100);

console.log('=================================');

let value = true;
alert(typeof value);
console.log('=================================');
value = String(value);
alert(typeof value); 

console.log('=================================');

// Задача 4 Задача4* :
// Есть массив чисел - отсортировать его методом пузырька.

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arrayToSort = [5, 3, 8, 1, 2];
let sortedArray = bubbleSort(arrayToSort);
console.log("Результат задания №4:", sortedArray);
 


console.log('=================================');

console.log('=================================');

console.log('=================================');


console.log('=================================');
