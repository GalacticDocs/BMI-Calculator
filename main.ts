import RL from "readline";

const readline = RL.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ReadOnlyNumbers(x: string): string {
    const regexp = /[+-]?\d+(\.\d+)?/g;
    // @ts-ignore
    return x.match(regexp)[0];
}

function TurnIntoInt(x: string): number {
    const numbers = ReadOnlyNumbers(x);
    if (numbers === null || numbers === "null") {
        throw process.stdout.write("Provided value must be type of number but  the type of the value that was provided was a string.");
    }
    const i = parseFloat(ReadOnlyNumbers(x));

    return i;
}

function ReadSingularDecimal(str: number): string {
    const float = parseFloat(String(str)).toFixed(1);

    return String(float);
}

readline.question("Enter your height in cm: ", (_height: string) => {
    let height = _height;

    readline.question("Enter your weight in kg: ", (_weight: string) => {
        let weight: string = _weight;

        const BMI: number = (TurnIntoInt(weight) / TurnIntoInt(height) / TurnIntoInt(height)) * 10000;
        const FORMATTED: string = ReadSingularDecimal(BMI);

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
