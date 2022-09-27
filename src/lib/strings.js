function sayHello(world) {
  return 'Hello, ' + world + '!';
}

function uppercase (abc) {
  return abc.toUpperCase(abc);
}

function lowercase (ABC) {
  return ABC.toLowerCase(ABC);
};

function countCharacters (fool) {
  return fool.length;
};

function firstCharacter (string) {
  return string.charAt(0);
};

function firstCharacters (string, n) {
  return string.substring(0, n);
};
module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
