function giveAnswers() {
    let question = "2+12=?"
    let answers = prompt("2+12=?")
    question = question.substring(0, question.length - 1);
    alert(question + answers)

    question = question.substring(0, question.length - 1);
    const myArray = question.split("+");
    if(Number(myArray[0]) + Number(myArray[1]) === Number(answers))
        alert("true")
    else
        alert("false")
}