const body= document.querySelector('body')
const btn = document.querySelector('button')
const skills = document.getElementById('skills')
const projects = document.getElementById('projects')
const skillsa = document.getElementById('skillsarea')
const dark=() =>{

    if(body.getAttribute('data-mode') === 'light') {
        body.setAttribute('data-mode', 'dark')
    } else {
        body.setAttribute('data-mode', 'light')
    }
}

btn.addEventListener('click', dark)
// Darkmode
const change= () => {


if(projects.getAttribute('data-mode') === 'active')
projects.setAttribute('data-mode', 'non')
skills.setAttribute('data-mode', 'active')
}
skills.addEventListener('click', change)

const changetwo = () => {
    if(skills.getAttribute('data-mode') === 'active')
    skills.setAttribute('data-mode', 'non')
    projects.setAttribute('data-mode', 'active')
}

projects.addEventListener('click', changetwo)

// buttons