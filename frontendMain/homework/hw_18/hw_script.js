// Создание объекта character с общими свойствами и методом
const character = {
    name: "",
    health: 100,
    level: 1,
    introduce() {
      console.log(`Hello, my name is ${this.name}, I am at level ${this.level}, and I have ${this.health} health.`);
    }
  };
  
  // Создание объекта warrior с наследованием от character и добавлением своих свойств и метода
  const warrior = Object.create(character);
  warrior.name = "Warrior";
  warrior.weapon = "Sword";
  warrior.attack = function() {
    console.log(`Warrior attacks with ${this.weapon}!`);
  };
  
  // Создание объекта wizard с наследованием от character и добавлением своих свойств и метода
  const wizard = Object.create(character);
  wizard.name = "Wizard";
  wizard.spell = "Fireball";
  wizard.castSpell = function() {
    console.log(`Wizard casts ${this.spell} spell!`);
  };
  
  // Вызов метода introduce для каждого объекта
  character.introduce();
  warrior.introduce();
  wizard.introduce();
  
  // Вызов метода attack для объекта warrior
  warrior.attack();
  
  // Вызов метода castSpell для объекта wizard
  wizard.castSpell();
  