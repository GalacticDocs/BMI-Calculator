const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter your height in cm: ", (_height) => {
    let hgh = _height;

    readline.question("Enter your weight in kg: ", (_weight) => {
        let wgh = _weight;

        const height = parseFloat(hgh);
        const weight = parseFloat(wgh);

        const BMI = weight / (height / 100) ** 2;

        console.log(`\nYour Body Mass Index is: ${BMI}\n`);

        if (BMI <= 18.5) {
            console.log("Result: You are underweight.");
        } else if (BMI <= 24.9) {
            console.log("Result: Awesome! You are healthy.");
        } else if (BMI <= 29.9) {
            console.log("Result: You are overweight.");
        } else {
            console.log("Result: You are obese.");
        }
    });
});