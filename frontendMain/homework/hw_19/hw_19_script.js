// Задание
// Создайте базовый класс Transport, представляющий транспортное средство. У транспортного средства должны быть следующие свойства:
// make (марка)
// model (модель)
// year (год выпуска)
// Добавьте в класс Transport метод displayMainInfo(), который выводит всю информацию о транспортном средстве в консоль.
// Создайте два подкласса, расширяющих класс Transport:
// Car - представляет автомобиль. Дополнительные свойства:
// numDoors (количество дверей)
// isConvertible (является ли кабриолетом)
// Motorcycle - представляет мотоцикл. Дополнительные свойства:
// numWheels (количество колес)
// hasSideCar (имеет ли боковую коляску)
// Создайте по два экземпляра для классов Car и Motorcycle
// Для демонстрации результатов вызовите метод displayMainInfo() для каждого экземпляра (4 вызова).

// Создание базового класса Transport
class Transport {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayMainInfo() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
  }
  
  // Создание подкласса Car
  class Car extends Transport {
    constructor(make, model, year, numDoors, isConvertible) {
      super(make, model, year);
      this.numDoors = numDoors;
      this.isConvertible = isConvertible;
    }
  }
  
  // Создание подкласса Motorcycle
  class Motorcycle extends Transport {
    constructor(make, model, year, numWheels, hasSideCar) {
      super(make, model, year);
      this.numWheels = numWheels;
      this.hasSideCar = hasSideCar;
    }
  }
  
  // Создание экземпляров для классов Car и Motorcycle
  const car1 = new Car("Toyota", "Camry", 2022, 4, false);
  const car2 = new Car("Tesla", "Model S", 2023, 2, true);
  const motorcycle1 = new Motorcycle("Harley-Davidson", "Sportster", 2021, 2, false);
  const motorcycle2 = new Motorcycle("BMW", "R1250GS", 2020, 2, true);
  
  // Вызов метода displayMainInfo() для каждого экземпляра
  car1.displayMainInfo();
  car2.displayMainInfo();
  motorcycle1.displayMainInfo();
  motorcycle2.displayMainInfo();
  