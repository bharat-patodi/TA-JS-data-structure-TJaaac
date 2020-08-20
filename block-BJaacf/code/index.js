// 1. Create an array named numbers and store 5 number values in it
let numbers = [2, 3, 4, 1, 5];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
let newSum = 0;
for (let i = 0; i < numbers.length; i++) {
  newSum += numbers[i];
}
console.log(newSum / numbers.length);

// 4. Find the highest number in the array and print it to the console using console.log()
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
}
console.log(max);

// 5. Find the lowest number in the array and print it to the console using console.log()
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (min > numbers[i]) {
    min = numbers[i];
  }
}
console.log(min);

// 6. Find the even numbers in the array and print them to the console using console.log()
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    console.log(numbers[i]);
  }
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 == 0) {
    console.log(numbers[i]);
  }
}
// 9. Log all the element of the array one by one
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// 10. Find all the number in the array that is divisible by 3
let isDivisibleBy3 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 == 0) {
    isDivisibleBy3.push(numbers[i]);
  }
}
console.log(isDivisibleBy3);
