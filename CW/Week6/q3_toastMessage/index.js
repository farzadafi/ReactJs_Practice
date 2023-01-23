const click = document.getElementById('click');
const toastDiv = document.getElementById('toast-div');
const toastBtn = document.getElementById('toast-btn')
const progressBar = document.getElementById('progress-bar');

click.addEventListener('click', () => {
    toastDiv.style.top = '10%';
    progressBar.style.width = "100%";
    setInterval(function () {
        toastDiv.style.top = '-10%';
        progressBar.style.width = "0";
    }, 3000);
});

toastBtn.addEventListener('click', () => {
    toastDiv.style.top = '-10%'
    progressBar.style.width = "0";
});