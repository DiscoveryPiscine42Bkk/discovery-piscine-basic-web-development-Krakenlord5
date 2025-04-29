$(document).ready(function() {
    $("#balloon").click(function(e) {
        increaseSize();
    });
    $("#balloon").mouseleave(function(e) {
        decreaseSize();
    })
});

function increaseSize()
{
    var newWidth = parseInt($("#balloon").css("width").slice(0, -2)) + 10;
    var newHeight = parseInt($("#balloon").css("height").slice(0, -2)) + 10;
    if (newWidth > 420)
    {
        newWidth = 200;
        newHeight = 200;
    }
    $("#balloon").css("width", newWidth.toString() + "px");
    $("#balloon").css("height", newHeight.toString() + "px");

    const currentCol = $("#balloon").css("background-color");

    if (currentCol === "rgb(255, 0, 0)") { $("#balloon").css("background-color", "rgb(0, 255, 0)")}
    else if (currentCol === "rgb(0, 255, 0)") { $("#balloon").css("background-color", "rgb(0, 0, 255)")}
    else { $("#balloon").css("background-color", "rgb(255, 0, 0)")}
}

function decreaseSize()
{
    if ($("#balloon").css("width").slice(0, -2) > 200)
    {
        const newWidth = parseInt($("#balloon").css("width").slice(0, -2)) - 5;
        const newHeight = parseInt($("#balloon").css("height").slice(0, -2)) - 5;
        $("#balloon").css("width", newWidth.toString() + "px");
        $("#balloon").css("height", newHeight.toString() + "px");

        const currentCol = $("#balloon").css("background-color");

        if (currentCol === "rgb(255, 0, 0)") { $("#balloon").css("background-color", "rgb(0, 0, 255)")}
        else if (currentCol === "rgb(0, 0, 255)") { $("#balloon").css("background-color", "rgb(0, 255, 0)")}
        else { $("#balloon").css("background-color", "rgb(255, 0, 0)")}
    }
}