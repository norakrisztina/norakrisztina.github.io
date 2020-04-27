function addButtonHandler () {
    let newTodo = $("input").val();
/*    
    console.log (newTodo);
    console.log ("addButtonHandler meghivodtam");
*/
    
    if ($("li").length < 14) {
        $('ul').append(
            "<li>\
            <p class='listitem'>" + newTodo + "</p>\
            <button class='btn' id='trash'><i class='fas fa-trash fa-lg'></i></button>\
            <button class='btn' id='circle'><i class='far fa-check-circle fa-lg'></i></button>\
            </li>"
        );
        $("input").val("");
        
    } else {
        alert ("ToDo List is full!");
    }

    

}

function circleIconHandler (event) {
/*    
    console.log ("circleIconHandler meghivodtam");
    console.log (event.data);
    console.log (event);
    console.log (event.target);
    console.log (event.currentTarget);
    console.log (event.currentTarget.previousElementSibling);
*/
    event.target.style.color = "white";
    event.target.style.background = "#EE82EE";
    event.target.style.border = "#EE82EE";
    event.currentTarget.previousElementSibling.previousElementSibling.style.color = "#C0C0C0";
}

function trashIconHandler (event) {
/*
    console.log ("trashIconHandler meghivodtam");
    console.log (event.data);
    console.log (event);
    console.log (event.target);
    console.log (event.currentTarget);
    console.log (event.currentTarget.parentElement);
    console.log (event.currentTarget.parentNode);
*/
    event.currentTarget.parentNode.remove();

}

$("#first").on ("click", addButtonHandler);

$("ul").on ("click", "li>#circle", "akarmi", circleIconHandler);
$("ul").on ("click", "li>#trash", "semmi", trashIconHandler);

