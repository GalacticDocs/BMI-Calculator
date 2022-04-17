RL = require "readline"

readline = RL.createInterface({
    input: process.stdin,
    output: process.stdout
})

ReadOnlyNumbers = (x) ->
    regexp = /[+-]?\d+(\.\d+)?/g
    
    return x.match(regexp)[0]

TurnIntoInt = (x) ->
    numbers = ReadOnlyNumbers(x)
    if numbers is null or numbers is "null" then throw process.stdout.write("Provided value must be type of number but  the type of the value that was provided was a string.")
    
    i = parseFloat(ReadOnlyNumbers(x))
    
    return i

ReadSingularDecimal = (str) ->
    float = parseFloat(String(str)).toFixed(1)
    
    return String(float)

readline.question("Enter your height in cm: ", (_height) -> 
    height = _height
    
    readline.question("Enter your weight in kg: ", (_weight) ->
        weight = _weight
        
        BMI = (TurnIntoInt(weight) / TurnIntoInt(height) / TurnIntoInt(height)) * 10000
        FORMATTED = ReadSingularDecimal(BMI)
        
        console.log "\nYour Body Mass Index is: #{FORMATTED}\n"
        
        if FORMATTED <= 18.5 
            console.log "Result: You are underweight."
        else if FORMATTED <= 24.9 
            console.log "Result: Awesome! You are healthy."
        else if FORMATTED <= 29.9 
            console.log "Result: You are overweight."
        else 
            console.log "Result: You are obese."))