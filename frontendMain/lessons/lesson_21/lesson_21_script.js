// Пример callback hell в JavaScript
function requestData(callback) {
    setTimeout(() => {
        console.log("Запрос данных...");
        callback('данные');
    }, 1000);
}

function parseData(data, callback) {
    setTimeout(() => {
        console.log("Анализ данных: " + data);
        callback('анализированные данные');
    }, 1000);
}

function processData(processedData, callback) {
    setTimeout(() => {
        console.log("Обработка данных: " + processedData);
        callback('обработанные данные');
    }, 1000);
}

function displayData(data) {
    setTimeout(() => {
        console.log("Отображение данных: " + data);
    }, 1000);
}

// Вызов функций с вложенными обратными вызовами
requestData(function (data) {
    parseData(data, function (processedData) {
        processData(processedData, function (finalData) {
            displayData(finalData);
        });
    });
});

// ================================================================================

// const p1 = new Promise(....)

// debugger;

// // простой пример промиса
// const p1 = new Promise((resolve, reject) => {
//     console.log('Загрузка данных');
//     resolve('Загруженные данные');
// });

// // вызов объекта промиса
// p1
//     .then(data => {
//         console.log('Анализ данных');
//         return 'Проанализированные даныне';
//     })
//     .then((data) => {
//         console.log('Обработка данных');
//         return 'Обработанные данные';
//     });

// console.log('END');

// -----------------

// простой пример промиса c timeout
// const p1 = new Promise((resolve, reject) => {
//     console.log('Начало загрузки данных...');
//     setTimeout(() => {
//         resolve('Загруженыне данные');
//     }, 1000);
// });

// // вызов объекта промиса
// p1
//     .then(data => {
//         console.log('Анализ данных: ', data);
//         return 'Проанализированные даныне';
//     })
//     .then((data) => {
//         console.log('Обработка данных');
//         return 'Обработанные данные';
//     });

// -------------

// // простой пример с reject
// const p1 = new Promise((resolve, reject) => {
//     console.log('Начало загрузки данных...');
//     setTimeout(() => {
//         // resolve('Загруженыне данные');
//         reject('Ошибка загрузки данных');
//     }, 1000);
// });

// // вызов объекта промиса
// p1
//     .then(data => {
//         console.log('Анализ данных: ', data);
//         return 'Проанализированные даныне';
//     }).then((data) => {
//         console.log('Обработка данных');
//         return 'Обработанные данные';
//     }).catch((err) => {
//         console.log('ERROR1111: ', err);
//     })

// ----------------

// // пример с reject с try catch (так часто пишут когда создают промисы сами)
// const p1 = new Promise((resolve, reject) => {
//     console.log('Начало загрузки данных...');
//     setTimeout(() => {
//         try {
//             console.log('Начало загрузки данных...');
//             // throw new Error('Ошибка загрузки данных');
//             resolve('Данные');
//         } catch (err) {
//             reject(err);
//         }

//     }, 1000);
// });

// // вызов объекта промиса
// p1
//     .then(data => {
//         console.log('Анализ данных: ', data);
//         // ошибка в блоке try - переводит выполненике кода в ближайший бок catch
//         throw new Error('error then 1'); //!!!!!
//         return 'Проанализированные даныне';
//     }).then((data) => {
//         console.log('Обработка данных');
//         return 'Обработанные данные';
//     }).catch((err) => {
//         console.log('ERROR1111: ', err);
//     })

// ---------------

const calculateAsync = (v1, v2) => {

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof v1 !== 'number' || typeof v2 !== 'number') {
                rej('Должны быть числа');
            } else {
                res(v1 + v2);
            }
        }, 1000);
    });
}

calculateAsync(1, 'helo')
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log('ERROR1111', err);
    });

    // =======================================================================

    // Пример использования промисов вместо callback hell в JavaScript
function requestData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Запрос данных...");
            resolve('данные');
        }, 1000);
    });
}

function parseData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Анализ данных: " + data);
            resolve('анализированные данные');
        }, 1000);
    });
}

function processData(processedData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Обработка данных: " + processedData);
            resolve('обработанные данные');
        }, 1000);
    });
}

function displayData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Отображение данных: " + data);
            resolve();
        }, 1000);
    });
}

// Цепочка промисов для последовательного выполнения задач
requestData()
    .then(parseData)
    .then(processData)
    .then(displayData)
    .catch((error) => {
        console.error("Произошла ошибка:", error);
    });
// =========================================================================

// синтаксис try catch
// try {
//     console.log('success');
// } catch (error) {
//     console.log('error');
// }

// пример с ошибкой
// const a = undefined;

// try {
//     console.log('start');
//     a.name = 100
//     console.log('success');
// } catch (error) {
//     console.log('error11111: ', error.message);
// }

// -----------------


// пример с finally (отработает всегда)
// const a = undefined;

// try {
//     console.log('start');
//     a.name = 100
//     console.log('success');
// } catch (error) {
//     console.log('error11111: ', error.message);
// } finally {
//     console.log('finally');
// }

// -----------------------

// const calculate = (a, b) => {

//     if (typeof a !== 'number' || typeof b !== 'number') {
//         // выбрасываем исключение сами
//         throw new Error('аргументы должны быть числами');
//     }

//     return a + b;
// }


// const res = calculate(1, 'test');
// console.log(res);

// ---------------------------

// const calculate = (a, b) => {

//     if (typeof a !== 'number' || typeof b !== 'number') {
//         // выбрасываем исключение сами
//         // выбрасываем как исключение число (так не нужно делать)
//         throw 1111;
//     }

//     return a + b;
// }


// const res = calculate(1, 'test');
// console.log(res);

// ----------------------
// const calculate = (a, b) => {

//     if (typeof a !== 'number' || typeof b !== 'number') {
//         // throw new Error('xxxxxx');
//         // выброс ошибки как объект
//         throw {
//             type: 'my-error',
//             description: 'xxxxxxx'
//         }
//     }

//     return a + b;
// }


// const res = calculate(1, 'test');
// console.log(res);

// -----------------------

// const calculate = (a, b) => {

//     if (typeof a !== 'number' || typeof b !== 'number') {    
//         // выброс ошибки с доп полями    
//         const error1 = new Error('произошла ошибка111');

//         error1.type = 'my-error';
//         error1.description = 'xxxxxxxxxx';

//         throw error1;
//     }

//     return a + b;
// }


// const res = calculate(1, 'test');
// console.log(res);

// -----------------

// фабричный метод созданя объекта ошибки
// const createError = ({ name, description, type, }) => {
//     const error1 = new Error('произошла ошибка111');
//     error1.name = name;
//     error1.description = description;
//     error1.type = type;
// }


// const calculate = (a, b) => {

//     if (typeof a !== 'number' || typeof b !== 'number') {
//         const error = createError({ name: 'err', description: 'descr', type: 'type1' });
//         throw error;
//     }

//     return a + b;
// }


// const res = calculate(1, 'test');
// console.log(res);


// ----------------

const calculate = (a, b) => {

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('а и b должны быть числами');
    }

    return a + b;
}


try {
    const res = calculate(1, 'test');
    console.log(res);
} catch (err) {
    console.log('ERROR1111: ', err.message);
    // проброс ошибки выше
    throw new Error('обработать ошибку не удалось, попробуйте снова');
}

console.log('END SUCCESS');








