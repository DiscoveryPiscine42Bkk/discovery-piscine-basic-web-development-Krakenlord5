$(document).ready(function() {
    getCookies();
    $("#new").click(function(e) {
        newTodo();
    });
});

var todos = [];

function getCookies()
{
    const theCookie = document.cookie;
    const allCookie = theCookie.split('=')[1];
    if (allCookie)
    {
        const cookies = allCookie.split(',');
        for (var i = 0; i < cookies.length; ++i)
        {
            todos.push(cookies[i]);
            var newDiv = document.createElement("div");
            $(newDiv).attr("id", "todo");
            var newP = document.createElement("p");
            $(newP).text(cookies[i]);
            $(newDiv).append(newP);
            $(newDiv).click(function(e) {
                confirmDelete(this)
            });
            $("#ft_list").append(newDiv);
        }
        document.cookie = "texts=" + todos;
    }
}

function newTodo()
{
    var hi = prompt("Enter your TO-DO");
    if (hi && !hi.includes(";") && !todos.includes(hi))
    {
        todos.push(hi);
        var newDiv = document.createElement("div");
        $(newDiv).attr("id", "todo");
        var newP = document.createElement("p");
        $(newP).text(hi);
        $(newDiv).append(newP);
        $("#ft_list").append(newDiv);
        document.cookie = "texts=" + todos;
        $(newDiv).click(function(e) {
            confirmDelete(this)
        });
    }
}

function confirmDelete(item)
{
    var del = confirm("Do you want to delete this TO-DO?");
    if (del)
    {
        const index = todos.indexOf($(item).children().text());
        todos.splice(index, 1);
        document.cookie = "texts=" + todos;
        $(item).remove();
    }
}