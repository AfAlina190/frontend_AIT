// Задание
// Предположим вы получили объект с данными (создайте переменную, в которой будет храниться объект) - spaceship, в котором находятся характеристики космического корабля, такие как:
// name
// manufacturer
// crew
// maxSpeed
// Необходимо отобразить их на странице.
// Стилизация на ваше усмотрение
// Дополнительная задача: Создайте кнопку "Hide Manufacturer", которая будет скрывать manufacturer корабля на странице

// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    const spaceship = {
        name: "Millennium",
        manufacturer: "Corellian Engineering Corporation",
        crew: 6,
        maxSpeed: "3,050 km/h"
    };

    // Отображение информации о корабле на странице
    function displaySpaceshipInfo() {
        document.getElementById('name').textContent = spaceship.name;
        document.getElementById('manufacturer').textContent = spaceship.manufacturer;
        document.getElementById('crew').textContent = spaceship.crew;
        document.getElementById('max-speed').textContent = spaceship.maxSpeed;
    }

    displaySpaceshipInfo();

    // Скрытие производителя по нажатию кнопки
    document.getElementById('hide-manufacturer').addEventListener('click', function() {
        const manufacturerElement = document.getElementById('manufacturer');
        manufacturerElement.style.display = (manufacturerElement.style.display === 'none') ? 'inline' : 'none';
    });
});

