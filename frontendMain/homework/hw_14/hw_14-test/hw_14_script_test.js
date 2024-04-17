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

const spaceship = {
    name: 'Millennium Rabbit',
    manufacturer: 'Engineering Corporation',
    crew: 7,
    maxSpeed: '75 MGLT'
};

document.addEventListener("DOMContentLoaded", function() {
    // Отображение данных корабля на странице
    document.getElementById('name').textContent = spaceship.name;
    document.getElementById('manufacturer').textContent = spaceship.manufacturer;
    document.getElementById('crew').textContent = spaceship.crew;
    document.getElementById('max-speed').textContent = spaceship.maxSpeed;

    // Скрытие информации о производителе по нажатию на кнопку "Hide Manufacturer"
    const hideManufacturerBtn = document.getElementById('hide-manufacturer');
    if (hideManufacturerBtn) {
        hideManufacturerBtn.addEventListener('click', () => {
            const manufacturerInfo = document.getElementById('manufacturer');
            if (manufacturerInfo) {
                manufacturerInfo.style.display = 'none';
            }
        });
    }
});
