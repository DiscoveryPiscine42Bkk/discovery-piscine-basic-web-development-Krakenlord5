$(document).ready(function() {
    $("button").click(function() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        $("body").css("background-color", "rgb(" + r + ", " + g + ", " + b + ")")
        $(this).hide("slow")
    });
});