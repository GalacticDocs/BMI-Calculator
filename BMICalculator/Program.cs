using System;
using System.Text.RegularExpressions;

namespace BMICalculator
{
    class Program
    {
        private static string ReadOnlyNumbers(string x)
        {
            var regex = new Regex(@"^(?:(?:0|[1-9]\d*)(?:\.\d*)?|\.\d+)$");

            return regex.Match(x).Value;
        }

        private static decimal TurnIntoDecimal(string x)
        {
            decimal deci = decimal.Parse(x);

            return deci;
        }

        private static int TurnIntoInt(string x)
        {
            int integ = int.Parse(x);

            return integ;
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Enter your height in cm: ");
            var height = Console.ReadLine();

            Console.WriteLine("Enter your weight in kg: ");
            var weight = Console.ReadLine();

            var BMI = (TurnIntoDecimal(weight) / TurnIntoInt(height) / TurnIntoInt(height)) * 10000;
            var FORMATTED = string.Format("{0:0.#}", BMI);

            Console.WriteLine("\nYour Body Mass Index is: " + FORMATTED);

            if (TurnIntoDecimal(FORMATTED) <= TurnIntoDecimal("18.5"))
            {
                Console.WriteLine("\nResult: You are underweight.");
            }
            else if (TurnIntoDecimal(FORMATTED) <= TurnIntoDecimal("24.9"))
            {
                Console.WriteLine("\nResult: Awesome! You are healthy.");
            }
            else if (TurnIntoDecimal(FORMATTED) <= TurnIntoDecimal("29.9"))
            {
                Console.WriteLine("\nResult: You are overweight.");
            }
            else
            {
                Console.WriteLine("\nResult: You are obese.");
            }
        }
    }
}
