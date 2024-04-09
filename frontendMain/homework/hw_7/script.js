let a = 12;
a = 22;
console.log(a);
console.log("================");

let table = true;
console.log(table);
console.log("================");

const door = 'open';
console.log(door);
console.log('================');

let goal = 3;
let win = goal;

goal = 20;

console.log(goal);
console.log(win);
console.log("================");

const planets1 = ['Earth', 'Mars', 'Venus'];
console.log(planets1[0]); // 'Earth'
console.log(planets1[1]); // 'Mars'
console.log(planets1[2]); // 'Venus'
console.log("================");

let num = [10,20,30,40,50,60,70,80,90,100];
console.log(num[0]); 
console.log(num[1]); 
console.log(num[2]);
console.log(num[3]); 
console.log(num[4]); 
console.log(num[5]);
console.log(num[6]); 
console.log(num[7]); 
console.log(num[8]);
console.log(num[9]);
console.log("================");

const mixed = ['apple', 10, true]; // масив з елементами разных типов
console.log(mixed[0]);
console.log(mixed[1]);
console.log(mixed[2]);
console.log("================");

const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];//переопределение массива
planets[0] = 'Jupiter';
planets[2] = 'Neptune';
console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']
console.log("================");

let arrNum = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(arrNum[0]);
console.log(arrNum[1]);
console.log(arrNum[2]);
console.log(arrNum[3]);
console.log(arrNum[4]);
console.log(arrNum[5]);
console.log(arrNum[6]);
console.log(arrNum[7]);
console.log(arrNum[8]);
console.log(arrNum[9]);
let reversedArray = arrNum.reverse();

console.log(reversedArray);
console.log("================");

let aa = 5;

let b = aa;
console.log(aa); // 5
console.log(b); // 5   Присвоєння за значенням, у пам'яті буде створено ще одну ячейку, в яку буде скопійовано значення 5


a1 = 10;
console.log(a1); // 10
console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія
console.log("================");

const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(Boolean(emptyArray)); // true
console.log(Boolean(nonEmptyArray)); // true

if (emptyArray) {
  console.log("if is in progress");
} else {
  console.log("else is not performed");
}

if (nonEmptyArray) {
  console.log("if is in progress");
} else {
  console.log("else is not performed");
}
console.log("================");


console.log("================");