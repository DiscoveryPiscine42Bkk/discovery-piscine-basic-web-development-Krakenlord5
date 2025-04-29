var enterFirst = true;
var enterSecond = false;
var operator = "";
var firstNum = "";
var secondNum = "";

window.setInterval(expressLoneliness, 30000);

function clickEvent(btn)
{
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const ops = ["+", "-", "*", "/", "%"];

    const text = btn.innerText; 
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

    document.getElementById("left-display").innerText = firstNum;
    document.getElementById("op").innerText = operator;
    document.getElementById("right-display").innerText = secondNum;
}

function compute()
{
    if ((operator === "/" || operator === "%") && secondNum == 0)
    {
        console.log("It's over 9000!");
        window.confirm("It's over 9000!");
    }
    else
    {
        var result; 
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

        console.log(result);
        window.confirm(result);
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
    document.getElementById("left-display").innerText = "";
    document.getElementById("op").innerText = "";
    document.getElementById("right-display").innerText = "";
}

function expressLoneliness()
{
    window.confirm("Pls use me...");
}