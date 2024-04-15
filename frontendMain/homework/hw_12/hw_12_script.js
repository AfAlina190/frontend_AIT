// Задача1:
// создать форму состоящую из логин, пароль и повторите пароль и кнопки отправить
// при нажатии на кнопку отправить производится праверка - если пароль и повторите пароль 
// совпадают - тогда пользователю выводится сообщение: данные отправлены
// иначе выводится сообщение пароль и повторите пароль не совпадают...

const form1 = document.getElementById("loginForm");

form1.addEventListener("submit", function(event) {
    event.preventDefault();

    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    const login = loginInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (login.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert("Заполните все поля");
        return;
    }

    if (password === confirmPassword) {
        alert("Данные отправлены");
    } else {
        alert("Пароль и повторите пароль не совпадают");
    }
});
// ================================================================

// Задача2:
// Написать калькулятор квадратного уравнения (дискрименант и корни)
// пользователь вводит три переменных   a, b , c
// и ему выводится ответ в x1 и  x2  в любом виде.


// Функция для решения квадратного уравнения
function solveQuadratic(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c;
    let result = [];

    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result.push(x1, x2);
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        result.push(x);
    }

    return result;
}

// Функция для вывода результата на страницу
function displayResult(event) {
    event.preventDefault();

    let form = document.getElementById("quadraticForm");
    let a = parseFloat(form.elements["a"].value);
    let b = parseFloat(form.elements["b"].value);
    let c = parseFloat(form.elements["c"].value);

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultDiv.innerText = "Пожалуйста, введите числовые значения для всех коэффициентов.";
        return;
    }

    if (a === 0) {
        resultDiv.innerText = "Коэффициент 'a' не может быть равен нулю.";
        return;
    }

    let solutions = solveQuadratic(a, b, c);

    if (solutions.length === 0) {
        resultDiv.innerText = "Уравнение не имеет действительных корней.";
    } else {
        resultDiv.innerText = "Корни уравнения: " + solutions.join(", ");
    }
}

// Назначаем обработчик события на форму
let form = document.getElementById("quadraticForm");
form.addEventListener("submit", displayResult);
