// const btn = document.getElementById("btn1");
// console.log(btn);

// // =================================================
// const heading1 = document.createElement("h1");
// console.log(heading1);

// // =================================================
// // создадим заголовок
// const heading = document.createElement("h2");

// // создадим тексовый узел
//  heading_text = document.createTextNode("ПРОДОЛЖИМ ИЗУЧАТЬ JS");

// // прикрепим к заголовку текст
// heading.appendChild(heading_text);

// // рикрепим готовы заголовок к body документа
// document.body.appendChild(heading);

// // ==================================================

// let div2 = document.createElement('h2');
// h2.innerText = 'WE ARE DOING GOOD';

// // =================================================

// const banana = document.getElementById('banana');
// banana.style.color = "orange";
// // =================================================

// let el = document.createElement("div3");
// div.innerText =  "YOU ARE THE BEST";
// el.textContent = "Just text";


const list = document.querySelector(".list");

const newTechnologies = ["React", "TyprScript","Node.js"];
const markup = newTechnologies.map((technology)=>`<li class="list-item new">${technology}</li>`).join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");




