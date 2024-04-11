//Цикл while

let a = 0;
while(a<10){
    

//пропуститьодну итерацию цикла
    if (a===5) {

        a++;
        continue
    }
    
    console.log(a);

    a++;

    //досрочный выпад из цикла
    if (a === 5){
        break
    }
}

//==================================================================
let str1 = 'hello world';
//длина строки
console.log(str1.length);

for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]); 
    
}
//==================================================================

let firstLetter = str1[0];
console.log(firstLetter);
//==================================================================

const str2 = 'hello world';
//приведениесстроки к верхнему регистру
const res = str2.toUpperCase();
console.log(res);
console.log(str2);

//приведение строки к нижнему регитру
const res2 = str2.toLocaleLowerCase();
console.log(res2);
//=================================================================

const str3 = 'hello world';
const res3 = str3.substring(0,4);
console.log(res);

//=================================================================
//получить индекс подстроки в строке
const str4 = 'hello world';
const res4 = str4.indexOf('world');
console.log(res4);
//=================================================================
//заполнить строку вначале значением х если длина строки ментше 10
const str5 = '111';
const res5 = str5.padStart(10, 'x');
console.log(res5);
//==================================================================
// разделить строку по указанному символу (в данном случае пробел)
const str6 = 'hello world';
const res6 = str6.split(' ');
console.log(res6);

//==================================================================
