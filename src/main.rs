extern crate regex;
use std::io;

fn read_only_numbers(x: &str) -> String {
	let re = regex::Regex::new("[+-]?([0-9]*[.])?[0-9]+").unwrap();
	let res = re.is_match(&x);

	if res == true {
		let reg = regex::Regex::new("^[a-zA-Z]+$").unwrap();
		let reg_as_str = reg.as_str();

		return x.replace(reg_as_str, "");
	} else {
		println!("Couldn't read the numbers for the string as it didn't include any numbers");

		return String::new();
	}
}

fn turn_into_int(val: String) -> f64 {
	if read_only_numbers(val.as_str()) != "" {
		let value = val.trim().parse().unwrap();

		return value;
	} else {
		return 0.0;
	}
}

fn read_singular_decimal(x: f64) -> String {
	let deci = format!("{:.1}", x);

	return deci;
}

fn main() {
	println!("\nEnter your height in cm: ");
	let mut height = String::new();
	io::stdin()
		.read_line(&mut height)
		.expect("Failed to read input");

	println!("Enter your weight in kg: ");
	let mut weight = String::new();
	io::stdin()
		.read_line(&mut weight)
		.expect("Failed to read input");

	let bmi_height = turn_into_int(height);
	let bmi_weight = turn_into_int(weight);

	if bmi_weight == 0.0 {
		println!("\nCouldn't pass BMI weight properly");
	}

	let bmi = (bmi_weight / bmi_height / bmi_height) * 10000.0;
	let formatted = read_singular_decimal(bmi);

	println!("\nYour Body Mass Index is: {BMI}", BMI=formatted);

	let format = turn_into_int(formatted);

	if format <= 18.5 {
		println!("\nResult: You are underweight.");
	} else if format <= 24.9 {
		println!("\nResult: Awesome! You are healthy.");
	} else if format <= 29.9 {
		println!("\nResult: You are overweight.");
	} else {
		println!("\nResult: You are obese.");
	}
} 