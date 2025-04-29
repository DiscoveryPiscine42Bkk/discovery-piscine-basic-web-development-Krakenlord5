$(document).ready(function () {
    $("button").click(function (e) { 
        buttonClick($(this).text());
    });
    $("#tryme").click(function (e) { 
        calculate();
    });
    $("#reset").click(function (e) { 
        reset();
    });
});

var enterFirst = true;
var enterSecond = false;
var operator = "";
var firstNum = "";
var secondNum = "";

function buttonClick(text)
{
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const ops = ["+", "-", "*", "/", "%"];

    if (numbers.includes(text))
    {
        if (enterFirst)
        {
            firstNum += text;
        }
        else if (enterSecond)
        {
            secondNum += text;
        }
    }
    else if (ops.includes(text))
    {
        if (enterFirst && firstNum != "")
        {
            enterFirst = false;
            enterSecond = true;
            operator = text;
        }
    }

    $("#left").text(firstNum.toString());
    $("#op").text(operator.toString());
    $("#right").text(secondNum.toString());
}

function calculate()
{
    if ((operator === "/" || operator === "%") && secondNum == 0)
    {
        console.log("It's over 9000!");
        alert("It's over 9000!");
    }
    else if (firstNum)
    {
        var result; 
        if (!secondNum)
        {
            result = parseInt(firstNum);
        }
        else
        {
            switch (operator)
            {
                case "+":
                {
                    result = parseInt(firstNum) + parseInt(secondNum)
                    break;
                }
                case "-":
                {
                    result = parseInt(firstNum) - parseInt(secondNum)
                    break;
                }
                case "*":
                {
                    result = parseInt(firstNum) * parseInt(secondNum)
                    break;
                }
                case "/":
                {
                    result = parseInt(firstNum) / parseInt(secondNum)
                    break;
                }
                case "%":
                {
                    result = parseInt(firstNum) % parseInt(secondNum)
                    break;
                }
            }
        }

        console.log(result);
        alert(result);
    }
    reset();
}

function reset()
{
    operator = "";
    firstNum = "";
    secondNum = "";
    enterFirst = true;
    enterSecond = false;
    $("#left").text("");
    $("#op").text("");
    $("#right").text("");
}