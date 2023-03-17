import './style.css'
import {debounce} from "lodash/function.js";

const main = document.querySelector('main')
const modal = document.getElementById('modal')
const form = document.querySelector('form')
const days = document.getElementById('days')
const workday = document.getElementById('workday')
const boxform = document.getElementById('boxform')
const expertise = document.getElementById('expertise')
const search = document.getElementById('search')

let targetDocor
let data = []

async function getInfo(endPoint) {
    const req = await fetch(`http://localhost:3001/${endPoint}`)
    const response = await req.json()
    data = response
    return response
}

getInfo("doctors").then(res => render(res))

// getInfo("doctors").then(res=>getDays(res))
async function postInfo(obj) {
    const req = await fetch(`http://localhost:3001/turn`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    })

}


function getDays(params) {
    Array.from(days.children).forEach(day => {
        if (!params.includes(day.innerHTML)) {
            day.disabled = true
            day.classList.remove('bg-slate-400')
        }

    })

}

function render(params) {
    main.innerHTML = ""
    params.forEach(doctor => {
        main.innerHTML += ` <div id=${doctor.id} class="bg-card-color p-5 space-y-3 shadow-md rounded-md flex flex-col justify-center  ">
    <svg class="mx-auto"  width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1_32)">
      <circle cx="43.5" cy="41.5" r="32.5" fill="#ADADAD"/>
      </g>
      <path d="M43.5 39.3333L55.8842 58.8333H31.1158L43.5 39.3333Z" fill="#F3F3F3"/>
      <ellipse cx="43.5" cy="28.0667" rx="9.1" ry="9.53333" fill="#F3F3F3"/>
      <defs>
      <filter id="filter0_d_1_32" x="0" y="0" width="87" height="87" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_32"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="6"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_32"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_32" result="shape"/>
      </filter>
      </defs>
      </svg>

    <div><span> نام پزشک :</span><span id="name"> ${doctor.name} </span></div>
    <div><span> تخصص : </span><span id="expertise">${doctor.Expertise.name}</span></div>
    <button class=" px-6 py-2 rounded-full text-white bg-btn-color "  > رزرو پزشک</button>
    
  </div>`
    });
}


main.addEventListener('click', (e) => {

    if (!e.target.matches('button')) return
    const doctorID = e.target.closest('div').id
    targetDocor = data.find(doctor => doctor.id === +doctorID)
    document.getElementById('nameform').innerHTML = targetDocor.name
    document.getElementById('expertiseform').innerHTML = targetDocor.Expertise.name
    form.querySelector('#error').classList.add("hidden")
    modal.classList.remove('hidden')
    modal.classList.add('flex')

    getDays(targetDocor.workTime)

})

days.addEventListener("click", (e) => {
    const {target} = e
    workday.innerHTML = target.innerHTML
})

form.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log(form.nameinput);
    const name = form.nameinput.value
    const lastName = form.lastnameinput.value
    const tel = form.telinput.value
    if (!name || !lastName || !tel) {
        form.querySelector('#error').classList.remove("hidden")
        return
    }
    const obj = {
        name,
        lastName,
        tel,
        doctor: targetDocor.id,
        reserve: workday.innerHTML
    }
    postInfo(obj)
    modal.classList.add('hidden')
    modal.classList.remove('flex')
    form.reset()

})

modal.addEventListener("click", (e) => {
    if (!e.target.matches('div>*')) {
        modal.classList.add('hidden')
        modal.classList.remove('flex')
    }
    console.log(e.target.matches('#boxform'));

})

expertise.addEventListener("change", (e) => {
    const value = e.target.value
    if (value === 'all') {
        const result = getInfo(`doctors`)
        result.then(result => {
            render(result)
        })
    } else {
        const result = getInfo(`doctors?Expertise.name=${value}`)
        result.then(result => {
            render(result)
        })
    }
})

search.addEventListener("input", debounce((e) => {
    const value = e.target.value
    const result = getInfo(`doctors?q=${value}`)
    result.then(result => {
        render(result)
    })
}, 1000))










