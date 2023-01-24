//write this function with arrow

function ask(question, yes, no) {
    if( confirm(question)) yes();
    else no();
}

ask("Do you agree?",
    function() { alert("You agreed.");},
    function() { alert("you canceled the execution.");});
