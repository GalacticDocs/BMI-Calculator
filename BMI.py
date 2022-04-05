height = float(input("Enter your height in cm: "))
weight = float(input("Enter your weight in kg: "))

BMI = weight / (height / 100)**2

print("\nYour Body Mass Index is: {0}\n".format(BMI))

if BMI <= 18.5:
    print("Result: You are underweight.")
elif BMI <= 24.9:
    print("Result: Awesome! You are healthy.")
elif BMI <= 29.9:
    print("Result: You are overweight.")
else:
    print("Result: You are obese.")