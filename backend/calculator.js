'use strict'

var params = process.argv.slice(2);

var number1 = parseFloat(params[0]);
var number2 = parseFloat(params[1]);

var plantilla = `
    La SUM es: ${number1 + number2}
    La REST es: ${number1 - number2}
    La MULTIPLE es: ${number1 * number2}
    La DIVIDE es: ${number1 / number2}
    `;

console.log(params);

console.log(plantilla)
console.log("Hello world with JS");