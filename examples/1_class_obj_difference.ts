const perritos = {
  name: 'John',
  age: '23',
  bread: 'Pug',
  color: 'White',
};
console.log('const name', perritos.name);

class Dogs {
  name = 'John2';
  age = '23';
  bread = 'Pug';
  color = 'White';
}

const dogs = new Dogs();

console.log('class name', dogs.name);
