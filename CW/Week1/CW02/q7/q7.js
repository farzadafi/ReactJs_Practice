function getNumbers() {
    let numberOne = prompt("Enter number one:")
    let numberTwo = prompt("Enter number two:")
    let numberThree = prompt("Enter number three:")
    const numbers = [numberOne, numberTwo, numberThree];
    calcMin(numbers);
    calcMax(numbers);
}

function calcMin(numbers) {
    let min = numbers[0];
    for (const i in numbers) {
        if(numbers[i] < min)
            min = numbers[i]
    }
    alert(`min number is ${min}`)
}

function calcMax(numbers) {
    let min = numbers[0];
    for (const i in numbers) {
        if(numbers[i] > min)
            min = numbers[i]
    }
    alert(`max number is ${min}`)
}
