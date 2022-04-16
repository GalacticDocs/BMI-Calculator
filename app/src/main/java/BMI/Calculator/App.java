package BMI.Calculator;

import java.text.DecimalFormat;
import java.util.Arrays;
import java.util.Scanner;
import java.util.regex.MatchResult;
import java.util.regex.Pattern;

public class App {
    public static String ReadOnlyNumbers(String x) {
        String[] reg = Pattern.compile("[+-]?([0-9]*[.])?[0-9]+")
                .matcher(x)
                .results()
                .map(MatchResult::group)
                .toArray(String[]::new);

        String results = Arrays.toString(reg);

        if (results.isEmpty()) {
            return null;
        } else {
            return results
                    .replace("[", "")
                    .replace("]", "");
        }
    }

    public static int TurnIntoInteger(String x) {
        if (ReadOnlyNumbers(x) == null) {
            return 0;
        } else {
            return Integer.parseInt(x);
        }
    }

    public static double ReadSingularDecimal(String x) {
        if (ReadOnlyNumbers(x) == null) {
            return 0.0;
        } else {
            return Double.parseDouble(FormatDouble(Double.parseDouble(x)));
        }
    }

    public static String FormatDouble(double x) {
        DecimalFormat decimalFormat = new DecimalFormat("#.#");

        return decimalFormat.format(x);
    }

    public static void main(String[] args) {
        Scanner heightScanner = new Scanner(System.in);
        System.out.println("\nEnter your height in cm: ");
        String height = heightScanner.nextLine();

        Scanner weightScanner = new Scanner(System.in);
        System.out.println("Enter your weight in kg: ");
        String weight = weightScanner.nextLine();

        int BMI_HEIGHT = TurnIntoInteger(height);
        double BMI_WEIGHT = ReadSingularDecimal(weight);

        if (BMI_WEIGHT == 0.0) {
            System.out.println("\nCouldn't pass BMI weight properly");
        }

        double BMI = (BMI_WEIGHT / BMI_HEIGHT / BMI_HEIGHT) * 10000;
        double FORMATTED = ReadSingularDecimal(String.valueOf(BMI));

        System.out.println("\nYour Body Mass Index is: " + FORMATTED);

        if (FORMATTED <= 18.5) {
            System.out.println("\nResult: You are underweight.");
        } else if (FORMATTED <= 24.9) {
            System.out.println("\nResult: Awesome! You are healthy.");
        } else if (FORMATTED <= 29.9) {
            System.out.println("\nResult: You are overweight.");
        } else {
            System.out.println("\nResult: You are obese.");
        }
    }
}
