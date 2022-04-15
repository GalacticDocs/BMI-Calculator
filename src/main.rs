use regex::Regex;

fn ReadOnlyNumbers(x: &str) -> &str {
	let re = Regex::new("^(?:(?:0|[1-9]\d*)(?:\.\d*)?|\.\d+)$").unwrap();
	
}

fn TurnIntoInt() {}

fn ReadSingularDecimal() {}

fn main() {
	
}