
const addJobBtn = document.getElementById('addJobBtn');
let cardBody = document.getElementById('cardBody');
let finishedCardBody = document.getElementById('finishCardBody');
const jobCounter = document.getElementById('jobCounter');
const removeAllJobs = document.getElementById('removeAllJobsBtn');
let finishedJob = [];
let counter = 0;
let array = [];

addJobBtn.addEventListener('click', () => {
    ++counter;
    array.push(createJob());
    renderJobs(array);
    jobCounter.innerText = `${array.length}`
})

const createJob = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'bg-secondary d-flex align-items-center btn gap-1 text-white')
    const image = createImage();
    div.append(image);
    const span = createSpan();
    div.append(span);
    div.setAttribute('onclick', `finishJob(this)`);
    div.setAttribute('id', `job${counter - 1}`);
    return div;
}

const createImage = () => {
    const image = document.createElement('img');
    image.src = './image/file-earmark-text.svg'
    return image;
}

const createSpan = () => {
    const span = document.createElement('span');
    span.innerText = `Job ${counter}`;
    return span;
}

const finishJob = (element) => {
    const newArray = array.filter(a => {
        return a.id !== element.id;
    })
    const finishElement = array.filter(a => {
        return a.id === element.id;
    })
    finishedJob.push(finishElement.pop());
    array = newArray;
    jobCounter.innerText = `${newArray.length}`;
    renderJobs(newArray);
    renderFinishedJob(finishedJob);
}

const renderJobs = jobs => {
    cardBody.innerHTML = '';

    for (const arrayElement of jobs) {
        cardBody.appendChild(arrayElement);
    }
}

const renderFinishedJob = (finishedJobArray) => {
    finishedCardBody.innerHTML = '';

    for (const finishedJobElement of finishedJobArray) {
        finishedCardBody.appendChild(finishedJobElement);
    }
}

removeAllJobs.addEventListener('click', () => {
    const response = confirm("Are you sure to delete all finished jobs?");
    if (response) {
        finishedJob = [];
        finishedCardBody.innerHTML = '';
    }
})