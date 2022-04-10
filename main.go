package main

import (
	"fmt"
	"regexp"
	"strconv"
)

func ReadOnlyNumbers(x string) string {
	re := regexp.MustCompile(`^(?:(?:0|[1-9]\d*)(?:\.\d*)?|\.\d+)$`)
	return re.FindString(x)
}

func TurnIntoInt(x string) float64 {
	i, err := strconv.ParseFloat(ReadOnlyNumbers(x), 32)
	if err != nil {
		fmt.Println(err.Error())
	}

	return i
}

func ReadSingularDecimal(str float64) string {
	float := strconv.FormatFloat(str, 'f', 1, 64)

	return float
}

func main() {
	fmt.Print("Enter your height in cm: ")

	var height string
	fmt.Scanln(&height)

	fmt.Print("Enter your weight in kg: ")

	var weight string
	fmt.Scanln(&weight)

	var (
		BMI       float64 = (TurnIntoInt(weight) / TurnIntoInt(height) / TurnIntoInt(height)) * 10000
		FORMATTED string  = ReadSingularDecimal(BMI)
	)

	fmt.Print("\n\nYour Body Mass Index is: ")
	fmt.Print(FORMATTED)

	if TurnIntoInt(FORMATTED) <= float64(18.5) {
		fmt.Println("\n\nResult: You are underweight.")
	} else if TurnIntoInt(FORMATTED) <= float64(24.9) {
		fmt.Println("\n\nResult: Awesome! You are healthy.")
	} else if TurnIntoInt(FORMATTED) <= float64(29.9) {
		fmt.Println("\n\nResult: You are overweight.")
	} else {
		fmt.Println("\n\nResult: You are obese.")
	}
}
