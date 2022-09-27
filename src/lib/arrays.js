const getNthElement = (index, array) => {
  const newIndex = index < array.length ? index : index - array.length;
  return array[newIndex];
  };

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = [...array, element];
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  const upper = [];
  strings.forEach(element => {
    upper.push(element.toUpperCase());
  });
  return upper;
};

const reverseWordsInArray = strings => {
  const reverseStr = (item) => item.split('').reverse().join('');
    return strings.map(reverseStr);
  };

const onlyEven = numbers => {
  return numbers.filter((number) => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const newArr = [...array];
  newArr.splice(index, 1);
  return newArr;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(str => /^[aeiou]/i.test(str));
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return numbers.reduce(reducer);
  };

const sortByLastLetter = strings => {
  const reverseString = (item) => item.split('').reverse().join('');
  return strings.map(reverseString).sort().map(reverseString);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
