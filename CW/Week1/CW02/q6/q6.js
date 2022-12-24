function giveNumber() {
    let number = prompt("Enter a number:")
    oddOrEven(number);
}

function oddOrEven(number) {
    if(number % 2 === 0)
        alert(`${number} is a even number`)
    else
        alert(`${number} is a odd number`)
}