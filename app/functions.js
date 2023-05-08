const arrayLength = (arrayExample) => {
  let length = 0;
  while (arrayExample[length] !== undefined) 
  length++;
  return length;
};

const arrayPush = (arrayExample, ...arguments) => {
  for (let i = 0; i < arguments.length; i++) {
    arrayExample[arrayExample.length] = arguments[i];
  }
  return arrayExample;
}

let myArray = [];

module.exports {
  arrayLength,
  arrayPush,
} 
