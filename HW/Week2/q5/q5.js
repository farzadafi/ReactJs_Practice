start()

function start() {
    let answers1 = prompt("Enter farzad name:")
    let answers2 = prompt("Enter farzad afshar lastname:")
    let answers3 = prompt("Enter farzad afshar zarandi city:")
    let answers4 = prompt("Enter farzad afshar kermani province:")

    let answers = [answers1, answers2, answers3, answers4];
    let key = ['farzad', 'afshar', 'zarand', 'kerman']

    let sum = 0;
    let i = 0;
    for (const string of key) {
        if (answers[i] === string)
            sum++;
        i++;
    }

    alert(`your point is ${sum}`)
}