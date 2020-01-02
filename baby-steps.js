// Exercise 2 of 13

let output = process.argv;
let sum = 0;

for (let i = 2; i < output.length; i++) {
    sum += +output[i];
}

console.log(sum);