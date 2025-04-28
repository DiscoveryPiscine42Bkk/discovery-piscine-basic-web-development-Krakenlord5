function clickBalloon()
{
    const balloon = document.getElementById("balloon");
    // change size
    var newWidth = balloon.offsetWidth + 10;
    var newHeight = balloon.offsetHeight + 10;
    if (newWidth > 420)
    {
        newWidth = 200;
        newHeight = 200;
    }
    balloon.style.width = newWidth.toString() + "px";
    balloon.style.height = newHeight.toString() + "px";

    // change col
    const currentCol = window.getComputedStyle(balloon).backgroundColor;
    var newCol;

    if (currentCol === "rgb(255, 0, 0)") { newCol = "rgb(0, 255, 0)"}
    else if (currentCol === "rgb(0, 255, 0)") { newCol = "rgb(0, 0, 255)"}
    else { newCol = "rgb(255, 0, 0)"}

    balloon.style.backgroundColor = newCol;
}

function leaveBalloon()
{
    const balloon = document.getElementById("balloon");
    if (balloon.offsetWidth > 200)
    {
        var newWidth = balloon.offsetWidth - 5;
        var newHeight = balloon.offsetHeight - 5;
        balloon.style.width = newWidth.toString() + "px";
        balloon.style.height = newHeight.toString() + "px";
    }
    // change col
    const currentCol = window.getComputedStyle(balloon).backgroundColor;
    var newCol;

    if (currentCol === "rgb(255, 0, 0)") { newCol = "rgb(0, 0, 255)"}
    else if (currentCol === "rgb(0, 0, 255)") { newCol = "rgb(0, 255, 0)"}
    else { newCol = "rgb(255, 0, 0)"}

    balloon.style.backgroundColor = newCol;
}