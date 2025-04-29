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
            newDiv.id = "todo"
            var newP = document.createElement("p");
            const node = document.createTextNode(cookies[i]);
            newP.appendChild(node);
            newDiv.appendChild(newP);
            newDiv.onclick = function()
            {
                confirmDelete(this);
            };
            document.cookie = "texts=" + todos;
            document.getElementById("ft_list").appendChild(newDiv);
        }
    }
}

function newTodo()
{
    var hi = window.prompt("Enter your TO-DO");
    if (hi && !hi.includes(";") && !todos.includes(hi))
    {
        var newDiv = document.createElement("div");
        newDiv.id = "todo"
        var newP = document.createElement("p");
        const node = document.createTextNode(hi);
        newP.appendChild(node);
        newDiv.appendChild(newP);
        newDiv.onclick = function()
        {
            confirmDelete(this);
        };
        todos.push(hi)
        document.cookie = "texts=" + todos;
        document.getElementById("ft_list").appendChild(newDiv);
    }
}

function confirmDelete(item)
{
    var del = window.confirm("Do you want to delete this TO-DO?");
    if (del)
    {
        const index = todos.indexOf(item.firstChild.innerText);
        todos.splice(index, 1);
        document.cookie = "texts=" + todos;
        item.remove();
    }
}