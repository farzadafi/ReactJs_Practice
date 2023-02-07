const add = (function (number) {
    let counter = 0;
    console.log(number)
    return function () {counter += 1; return counter}
})();

function counter(number) {
    let count = 0;
    return function () {count += 1;return count}
}

counter(1).call();
console.log(counter(1).call())