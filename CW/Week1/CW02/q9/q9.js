function getNumber() {
    let number = prompt("Enter your number:")
    calcSum(number);
}

const calcSum = (num) => {
    let array = num.split("");
    let sum = 0;
    for (const i in array) {
        sum += Number(array[i])
    }
    alert(`sum for each element of your number is ${sum}`)
}