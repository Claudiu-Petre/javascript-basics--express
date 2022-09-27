
const createPerson = (name, age) => ({
    name,
    age,
  });
  createPerson('John', 78);


const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65 ? true : false;
};

const getAges = people => {
  let ages = people.map(person => person.age);
  return ages;
};

const findByName = (name, people) => {
  let person = people.find(obj => obj.name === name);
  return person;
};

const findHondas = cars => {
  let car = cars.filter(obj => obj.manufacturer === 'Honda');
  return car;
};

const averageAge = people => {
  let totalAge = 0;
  for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
  }
    return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
    return {
    name: name,
    age: age,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    }
  };
  };

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
