// More advanced example of class with constructor:

class Human {
  name = 'No name'

  constructor(_name) {
    console.log('Calling Human constructor...')
    this.name = _name
  }

  sayHello() {
    console.log('Calling sayHello...')
    console.log(`Hello! Im ${this.name} and Im pleased to meet You!`)
  }
}

// constructor is special method, that is called when we create object with "new":

console.log('Calling new Human("Baltazar")...')
const humanBaltazar = new Human('Baltazar')

// ...and use everything what Human has to offer (so methods, properties etc):
console.log('Calling humanBaltazar.sayHello()')
humanBaltazar.sayHello()
// That will result in:
// Hello! Im Baltazar and Im pleased to meet You!


// other example with methods:
class Cat {
  name = 'No name'

  constructor() {
    console.log('Calling Cat constructor...')
  }

  rename(newName) {
    console.log('Calling rename...')
    this.name = newName
  }
  
  sayHello() {
    console.log('Calling sayHello...')
    console.log(`Im cat named ${this.name} but I can only say Meow.`)
  }
}


console.log('Calling new Cat("Garfield")...')
const catGarfield = new Cat() //'Garfield', 3, 4

console.log('Calling catGarfield.sayHello()')
catGarfield.sayHello()
// That will result in:
// Im cat named Garfield but I can only say Meow.

// we can use method in Cat class to change property value:
catGarfield.rename('Tom')


console.log('Calling catGarfield.sayHello()')
catGarfield.sayHello()
// That will result in:
// Im cat named Tom but I can only say Meow.