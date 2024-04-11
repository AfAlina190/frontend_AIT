let arr11 = [1,2,3,4];
console.log(arr11);
console.log('=================');
let arr5 = [1,2,3];
let arr6 = arr5;
arr5 = [11,22,33];
console.log(arr6);
console.log('=================');
const arr2 = [1,2,3,4];

 console.log(arr2[0]);
 console.log(arr2[1]);
 console.log('=================');
 //удалить
 arr2 .slice(0);
 console.log(arr2);

 const arr33 = [11,222,33,444];
 const res = arr33.join(';\n');
 console.log(res);
 console.log('=================');

 const arr44 = [1,2,3,4];
 arr44[1] = 222;
 console.log(arr44);
 console.log('=================');

 let d = arr44.length;
console.log(d);
 console.log('=================');

 let t = {
    name: 'bob',
    age: 22,
 }
 console.log('==================Циклы=================');

// let bb = 1;
// bb ++
// console.log(bb);

const arr66 = [11,22,33,44];

for (let i = 0; i < arr66.length; i++) {
    console.log(arr66[i]);
    
 }

console.log('----------------------');

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5){
        break;
    }
    
}
console.log('----------------------');
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5){
        continue;
    }
    console.log(i);
}