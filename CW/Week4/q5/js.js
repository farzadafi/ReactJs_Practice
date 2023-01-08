function changeStyle() {
    let pTag = document.querySelector('p');
    window.addEventListener('click', function () {
        pTag.style.fontSize = '55px'
        pTag.style.color = 'green';
        pTag.style.fontFamily = 'Ani'
    });
}