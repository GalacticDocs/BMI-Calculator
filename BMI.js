const RL = require("readline");

const readline = RL.createInterface({
    input: process.stdin,
    output: process.stdout
});

/** @param {string} x @returns {string} */
function ReadOnlyNumbers(x) {
    const regexp = /[+-]?\d+(\.\d+)?/g;
    return x.match(regexp)[0];
}

/** @param {string} x @returns {number} */
function TurnIntoInt(x) {
    const numbers = ReadOnlyNumbers(x);
    if (numbers === null || numbers === "null") {
        throw process.stdout.write("Provided value must be type of number but  the type of the value that was provided was a string.");
    }
    const i = parseFloat(ReadOnlyNumbers(x));

    return i;
}

/** @param {number} str @returns {string} */
function ReadSingularDecimal(str) {
    const float = parseFloat(String(str)).toFixed(1);

    return String(float);
}

readline.question("Enter your height in cm: ", (_height) => {
    let height = _height;

    readline.question("Enter your weight in kg: ", (_weight) => {
        let weight = _weight;

        const BMI = (TurnIntoInt(weight) / TurnIntoInt(height) / TurnIntoInt(height)) * 10000;
        const FORMATTED = ReadSingularDecimal(BMI);

        console.log(`\nYour Body Mass Index is: ${FORMATTED}\n`);

        if (FORMATTED <= 18.5) {
            console.log("Result: You are underweight.");
        } else if (FORMATTED <= 24.9) {
            console.log("Result: Awesome! You are healthy.");
        } else if (FORMATTED <= 29.9) {
            console.log("Result: You are overweight.");
        } else {
            console.log("Result: You are obese.");
        }
    });
});