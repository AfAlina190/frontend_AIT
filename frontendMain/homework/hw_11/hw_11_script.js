// Задача1:
//Есть массив строк. Вывести каждую строку в div и вывести в документ

// Заданный массив строк
const strings = ["Первая строка", "Вторая строка", "Третья строка"];

// Создаем div для каждой строки и добавляем их на страницу
strings.forEach((str) => {
    const div = document.createElement("div");
    div.textContent = str;
    document.body.appendChild(div);
});
// ===========================================================

// Задача2:
// На странице есть div с текстом и кнопка ok , сделать так , 
// чтобы кнопка красила текст в красный цвет при нажатии


// Получаем ссылку на div с текстом и кнопку
const textDiv = document.querySelector("#textDiv");
const okButton = document.querySelector("#okButton");

// Добавляем обработчик события клика на кнопку
okButton.addEventListener("click", function() {
    // Меняем цвет текста на красный
    textDiv.style.color = "red";
});
// ===========================================================

// Задача3:
// Сделать кнопку, которая добавляет карточки на странице
// в каждой карточке есть заголовок, текст и картинка 
// (url картинки можо использовать одинаковый)

// Функция для создания карточки
function createCard(title, text, imageUrl) {
    const card = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const cardText = document.createElement("p");
    const cardImage = document.createElement("img");

    cardTitle.textContent = title;
    cardText.textContent = text;
    cardImage.src = imageUrl;
    cardImage.alt = title;

    card.appendChild(cardTitle);
    card.appendChild(cardText);
    card.appendChild(cardImage);

    document.body.appendChild(card);
}

// Получаем ссылку на кнопку для добавления карточек
const addButton = document.querySelector("#addButton");

// Добавляем обработчик события клика на кнопку
addButton.addEventListener("click", function() {
    // Вызываем функцию создания карточки с заданными параметрами
    createCard("Растение", "Цветок", "https://img.freepik.com/free-photo/bright-petals-gift-love-in-a-bouquet-generated-by-ai_188544-13370.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1712448000&semt=ais");
});









