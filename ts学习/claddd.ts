abstract class Animal {
  eat(food: string): void {
    console.log(food);
  }
  abstract like(action: string): void
}

class Dog extends Animal {
  like(action: string): void {
    console.log(`${action} ${this.eat}`);
  }
}
const dog = new Dog();
dog.eat('狗粮');
dog.like('撒');
