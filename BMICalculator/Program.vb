Imports System.Text

Module Program
    Function ReadOnlyNumbers(x As String) As String
        Dim regexp As New RegularExpressions.Regex("[+-]?\d+(.\d+)?")
        Return regexp.Match(x).Value
    End Function

    Function TurnIntoInt(x As String) As Integer
        Dim numbers As String = ReadOnlyNumbers(x)

        If numbers = "null" OrElse numbers = "" Then
            Throw New Exception("Provided value must be type of number but the type of the value that was provided was a string.")
        End If

        Dim i As Integer = CInt(Val(ReadOnlyNumbers(x)))
        Return i
    End Function

    Function ReadSingularDecimal(str As String) As String
        Dim result As Double = CDbl(str)
        result = Math.Round(result, 1)

        Return CStr(result)
    End Function

    Sub Main(args As String())
        Console.WriteLine("Enter your height in cm: ")
        Dim height As String = Console.ReadLine()

        Console.WriteLine("Enter your weight in kg: ")
        Dim weight As String = Console.ReadLine()

        Dim BMI As Double = (TurnIntoInt(weight) / TurnIntoInt(height) / TurnIntoInt(height)) * 10000
        Dim FORMATTED As String = String.Format("{0:0.#}", BMI)

        Console.WriteLine("")
        Console.WriteLine("Your Body Mass Index is: " + FORMATTED)

        If TurnIntoInt(FORMATTED) <= TurnIntoInt("18.5") Then
            Console.WriteLine("")
            Console.WriteLine("Result: You are underweight.")
        ElseIf TurnIntoInt(FORMATTED) <= TurnIntoInt("24.9") Then
            Console.WriteLine("")
            Console.WriteLine("Result: Awesome! You are healthy.")
        ElseIf TurnIntoInt(FORMATTED) <= TurnIntoInt("29.9") Then
            Console.WriteLine("")
            Console.WriteLine("Result: You are overweight.")
        Else
            Console.WriteLine("")
            Console.WriteLine("Result: You are obese.")
        End If
    End Sub
End Module
