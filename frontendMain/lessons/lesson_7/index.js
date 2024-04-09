//вывод в консоль информации
//console.log("hello world333")

//создание простейшей переменной
let s = 'hello';
s = 1;

const s1 = 111;

console.log(s);

//числовой тип
let a = 1;

//переменная сирокового типа
let b = 'hello';

// переменная булевого типа
let c = true;

//копирование по значению
let first = 1;
let second = first;

first = 2;

//console.log(first);
//console.log(second);

//пустое значение (null)
let a1 = null;

//console.log(a1);

//переменная со значением ( undefind) не определено
let a2;
console.log(a2);

//ветвление
//if (tru) {
    //make it
//}elseP{
    //make it
//}

// let a3 = '10';

// if (a3 == 10) {
//     console.log('a3 = 10');
// } else {
//     console.log('false');

// }

//---------------------

// let a3 = '10';
// if (a3 === 10) {
//   console.log("a3 = 10");
// } else {
//   console.log("не равно");
// }


let a4 = 1;
let a5 = 2;

// console.log(a4 + a5);

let res = a4 + a5;
// console.log(res);

let res2 = 'hello' + 5;
console.log(res2);


let aa = '2';
let bb = 3;
let res3 = aa + bb;
console.log(res3);

//-----------------------

let day = 'monday';
switch (day) {
    case 'monday':
        console.log('monday');
        break;
    case 'tuesday':
        console.log('tuesday');
        break;
    default:
        console.log('undefined day of week');
        break;
}


//----------оператор ветвления тот же что и sweitch
if (day ==='monday') {
    console.log('MONDAY');
} else if (day === 'tuesday') {
    console.log('tuesday');
} else {
    console.log('undefind day of week');
}