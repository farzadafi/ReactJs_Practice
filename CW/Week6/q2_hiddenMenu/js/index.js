const htmlBtn = document.getElementById('htmlBtn');
const cssBtn = document.getElementById('cssBtn');
const jsBtn = document.getElementById('jsBtn');
const reactBtn = document.getElementById('reactBtn');

const htmlP = document.getElementById('htmlP');
const cssP = document.getElementById('cssP');
const jsP = document.getElementById('jsP');
const reactP = document.getElementById('reactP');
const arrayP = [htmlP, cssP, jsP, reactP];

const findTag = (e) => {
    const id = e.target.id
    const pTag = id.replace('Btn', 'P');
    const finalPTag = arrayP.filter((el) => el.id === pTag);
    return finalPTag.pop();
}

const openP = (e) => {
    const tag = findTag(e);

    if (tag.classList.contains('hidden')) {
        tag.classList.remove('hidden');
        setTimeout(function () {
            tag.classList.remove('visually-hidden');
        }, 20);
    } else {
        tag.classList.add('visually-hidden');
        tag.addEventListener('transitionend', function () {
            tag.classList.add('hidden');
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }
}

cssBtn.addEventListener('click', openP)
jsBtn.addEventListener('click', openP)
reactBtn.addEventListener('click', openP)
htmlBtn.addEventListener('click', openP)