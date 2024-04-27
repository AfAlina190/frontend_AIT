const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');

btn.addEventListener('click', (e) => {
   if (input.value ==='') return;
   createDeleteElement(input.value);
   input.value = '';
});

function createDeleteElement(value) {
    console.log(value);
    
    const li = document.createElement('li');
    li.className = 'li';
    li.textContent = value;

    const deleteBtn = document.createElement('button'); // Переименована переменная btn
    deleteBtn.className = 'btn'; // Исправлено имя класса
    deleteBtn.textContent = 'Delete'; // Исправлен текст кнопки
    li.appendChild(deleteBtn);

    result.appendChild(li);
}

