let numbers = [6, 8, 10, 12, 43, 56, 98];

let userIds = [1230, 234, 1278, 984, 763, 900];

// 1. Add all the values of numbers and userIds array into the new newly created array named `collection`
// function sum() {
//   let collection = [];
//   let longerLength =
//     numbers.length >= userIds.length ? numbers.length : userIds.length;
//   for (let i = 0; i < longerLength; i++) {
//     let num = i >= numbers.length ? 0 : numbers[i];
//     let usrId = i >= userIds.length ? 0 : userIds[i];
//     collection[i] = num + usrId;
//   }
//   console.log(collection);
// }
function insert() {
  let collection = [];
  for (let i = 0; i < numbers.length; i++) {
    collection[i] = numbers[i];
  }
  for (let m = 0; m < userIds.length; m++) {
    collection[numbers.length + m] = userIds[m];
  }
  console.log(collection);
}

// 2. Add all the even numbers from both arrays numbers and userIds into a newly created array named `evenCollection`
function insertEven() {
  let evenCollection = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenCollection.push(numbers[i]);
    }
  }
  for (let m = 0; m < userIds.length; m++) {
    if (userIds[m] % 2 == 0) {
      evenCollection.push(userIds[m]);
    }
  }
  console.log(evenCollection);
}
// 3. Add all the odd numbers from both arrays numbers and userIds into a newly created array named `oddCollection`

function insertOdd() {
  let oddCollection = [];
  for (let number of numbers) {
    if (number % 2 != 0) {
      oddCollection.push(number);
    }
  }
  for (let userId of userIds) {
    if (userId % 2 != 0) {
      oddCollection.push(userId);
    }
  }
  console.log(oddCollection);
}

insertOdd();

/*
  @param means parameter

 4. Write a function named times which accets two parameter and return an array.

  @param times (number)
  @param character (string)
  @return array

  Example:
    times(5, 'c'); // ['c', 'c', 'c', 'c', 'c']
    times(2, 'a'); // ['a', 'a']
    times(0); // []
    times(5); // ['test', 'test', 'test', 'test', 'test']
*/

function times(n = 0, char = "test") {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr[i] = char;
  }
  // Your code
  return newArr;
}

// Uncomment the code below and test the output

console.log(times(5, "c")); // ['c', 'c', 'c', 'c', 'c']
console.log(times(2, "a")); // ['a', 'a']
console.log(times(0)); // []
console.log(times(5)); // ['test', 'test', 'test', 'test', 'test']

/*

 5. Write a function named revert which reverts the element of the input array.

  @param arr (array)
  @return array

  Example:
    revert([1, 2, 3, 4]); // [4, 3, 2, 1]
    revert(['a', 'd', 'c', 'b']); // ['b', 'c', 'd', 'a']
    revert(['Ryan', 'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/

function revert(arr) {
  // your code
  let reverseArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr;
}

// Uncomment the code below and test the output
console.log(revert([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(revert(["a", "d", "c", "b"])); // ['b', 'c', 'd', 'a']
console.log(revert(["Ryan", "John", "Bran"])); //['Bran', 'John', 'Ryan']

/*

 6. Write a function named clear which remove all of these values (false, undefined, empty string, 0, null) and returns a new array

  @param arr (array)
  @return array

  Example:
    clear([1, 2, 3, 4, '', 0, null, undefined]); // [4, 3, 2, 1]
    clear(['a', undefined, 'd', 0,  'c', 'b']); // ['b', 'c', 'd', 'a']
    clear(['Ryan', null, 0,  'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/

function clear(arr) {
  let newArr = [];
  let newArrReverse = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] !== false &&
      arr[i] !== undefined &&
      arr[i] !== "" &&
      arr[i] !== 0 &&
      arr[i] !== null
    ) {
      newArr.push(arr[i]);
    }
  }
  for (let n = newArr.length - 1; n >= 0; n--) {
    newArrReverse.push(newArr[n]);
  }
  return newArrReverse;
}

// Uncomment the code below and test the output
console.log(clear([1, 2, 3, 4, "", 0, null, undefined])); // [4, 3, 2, 1]
console.log(clear(["a", undefined, "d", 0, "c", "b"])); // ['b', 'c', 'd', 'a']
console.log(clear(["Ryan", null, 0, "John", "Bran"])); //['Bran', 'John', 'Ryan']

/*

 6. Write a function named arrayToObj which accepts an array and return an object
 where the key will be the index of array and value will be the element of the array.

  @param arr (array)
  @return object

  Example:
    arrayToObj([1, 2, 3, 4]); // {0: 1, 1: 2, 2: 3, 3: 4}
    arrayToObj(['a', undefined, 'd']); // {0: 'a', 1: undefined, 2: 'd'}
    arrayToObj(['Ryan', 'John']); // {0: 'Ryan', 1: 'John'}
*/

function arrayToObj(arr) {
  let thisObj = {};
  for (let i = 0; i < arr.length; i++) {
    thisObj[i] = arr[i];
  }
  return thisObj;
}

// Uncomment the code below and test the output
console.log(arrayToObj([1, 2, 3, 4])); // {0: 1, 1: 2, 2: 3, 3: 4}
console.log(arrayToObj(["a", undefined, "d"])); // {0: 'a', 1: undefined, 2: 'd'}
console.log(arrayToObj(["Ryan", "John"])); // {0: 'Ryan', 1: 'John'}
