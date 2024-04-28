function delay(value) {
    return new Promise((resolve, reject) => {
      // Проверяем, является ли аргумент числом
      if (typeof value === 'number') {
        // Задержка в 5 секунд
        setTimeout(() => {
          // Разрешаем промис и возвращаем удвоенное значение аргумента
          resolve(value * 2);
        }, 5000);
      } else {
        // Если аргумент не является числом, отклоняем промис с текстом ошибки
        reject(new Error("The argument is not a number"));
      }
    });
  }
  
  // Пример использования функции delay
  delay(10)
    .then(result => {
      console.log("Resolved:", result); // Ожидается 20 через 5 секунд
    })
    .catch(error => {
      console.error("Rejected:", error.message);
    });
  
  delay("test")
    .then(result => {
      console.log("Resolved:", result);
    })
    .catch(error => {
      console.error("Rejected:", error.message); // Ожидается "The argument is not a number"
    });
  