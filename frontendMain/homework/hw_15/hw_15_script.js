//1) Есть массив чисел - нужно выбрать все числа больше 5 (использовать функцию высшего порядка)

const numbers = [1, 6, 3, 8, 10, 4];
const numbersGreaterThan5 = numbers.filter((number) => number > 5);
console.log(numbersGreaterThan5); // Output: [6, 8, 10]

//2) Есть массив продуктов: каждый продукт - это объект с полями: имя, цена, производитель значения можно задать на свое усмотрение написать функцию фильтрации продуктов цена выше 5000
const products1 = [
  { name: 'Телефон', price: 7000, manufacturer: 'Samsung' },
  { name: 'Ноутбук', price: 15000, manufacturer: 'Apple' },
  { name: 'Телевизор', price: 4000, manufacturer: 'Sony' }
];

const expensiveProducts = products1.filter(product => product.price > 5000);
console.log(expensiveProducts); 

//3)* Сверстать страничку с продуктами из предыдущей задачи продукты отображаются один за другим - верстка на ваше усмотрение добавить инпут куда пользователь может ввести цену - после ввода продукты фильтруются по цене меньше или равно указанной пользователем.

const products = [
  { name: "Телефон", price: 7000, manufacturer: "Samsung" },
  { name: "Ноутбук", price: 15000, manufacturer: "Apple" },
  { name: "Телевизор", price: 4000, manufacturer: "Sony" },
];

const renderProducts = (products) => {
  const productsList = document.getElementById("productsList");
  productsList.innerHTML = "";
  products.forEach((product) => {
    const productCard = document.createElement("article");
    productCard.classList.add("product");
    productCard.innerHTML = `
                    <h2>${product.name}</h2>
                    <p><strong>Цена:</strong> ${product.price} руб.</p>
                    <p><strong>Производитель:</strong> ${product.manufacturer}</p>
                `;
    productsList.appendChild(productCard);
  });
};

renderProducts(products);

document.getElementById("priceFilter").addEventListener("input", (event) => {
  const priceFilterValue = parseInt(event.target.value);
  const filteredProducts = products.filter(
    (product) => product.price <= priceFilterValue
  );
  renderProducts(filteredProducts);
});




