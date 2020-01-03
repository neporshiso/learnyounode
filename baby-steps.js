/* BABY STEPS (Exercise 2 of 13)

  Write a program that accepts one or more numbers as command-line arguments  
  and prints the sum of those numbers to the console (stdout).  
  
*/

let output = process.argv;
let sum = 0;

for (let i = 2; i < output.length; i++) {
    sum += +output[i];
}

console.log(sum);