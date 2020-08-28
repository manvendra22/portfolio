/*
    Navigation active handlers
*/

const homeTarget = document.querySelector('#home');
const aboutTarget = document.querySelector('#about');
const projectsTarget = document.querySelector('#projects');
const targetElements = document.querySelectorAll('.nav_link')

// configure the intersection observer instance
const intersectionObserverOptions = {
    root: null,
    // rootMargin: '100px',
    threshold: 0.1
}

// initialize the observer with handlers
var homeObserver = new IntersectionObserver(onHomeIntersection, intersectionObserverOptions);
var aboutObserver = new IntersectionObserver(onAboutIntersection, intersectionObserverOptions);
var projectsObserver = new IntersectionObserver(onProjectsIntersection, intersectionObserverOptions);

// provide the observer with a target
homeObserver.observe(homeTarget);
aboutObserver.observe(aboutTarget);
projectsObserver.observe(projectsTarget);

const intersectionValues = []

function onHomeIntersection(entries) {
    entries.forEach(entry => {
        intersectionValues[0] = entry.intersectionRatio
        checkIntersectionValues()
        // targetElements[0].classList.toggle('visible', entry.intersectionRatio > 0);
    });
}

function onAboutIntersection(entries) {
    entries.forEach(entry => {
        intersectionValues[1] = entry.intersectionRatio
        checkIntersectionValues()
        // targetElements[1].classList.toggle('visible', entry.intersectionRatio > 0);
    });
}

function onProjectsIntersection(entries) {
    entries.forEach(entry => {
        intersectionValues[2] = entry.intersectionRatio
        checkIntersectionValues()
        // targetElements[2].classList.toggle('visible', entry.intersectionRatio > 0);
    });
}

function checkIntersectionValues() {
    const max = Math.max(...intersectionValues)
    const maxIndex = intersectionValues.findIndex(value => value === max)

    targetElements?.[0]?.classList.remove('visible');
    targetElements?.[1]?.classList.remove('visible');
    targetElements?.[2]?.classList.remove('visible');

    targetElements?.[maxIndex]?.classList.add('visible');
}


/*
    Scroll reveal animations
*/

ScrollReveal(
    { delay: 200, duration: 2000 }
).reveal('.intro, .nav, .dark-mode-toggle');

ScrollReveal(
    { delay: 2000, scale: 0 }
).reveal('.pulseBtn');

ScrollReveal({ delay: 200, origin: 'bottom', distance: '50px', scale: 1, viewFactor: 1, mobile: false }).reveal('.about-first');
ScrollReveal({ delay: 700 }).reveal('.about-second');
ScrollReveal({ delay: 0, origin: 'left' }).reveal('.project-intro');
ScrollReveal({ delay: 500, origin: 'right' }).reveal('.project-image');


/*
    Cloudinary responsive images
*/

const cl = new cloudinary.Cloudinary({ cloud_name: 'dracarys' })
cl.responsive()


/*
    Dark mode theme
*/

const LIGHT = {
    '--color-bg': 'linear-gradient(rgb(255, 255, 255) 0%,rgb(255, 255, 255) 88%,rgb(244, 247, 250) 100%)',
    '--color-nav': 'rgb(255, 255, 255)',
    '--color-text-primary': '#233040',
    '--color-text-secondary': '#334259',
    '--color-primary': '#57af7a',
    '--color-primary-light': '#89c7a2',
    '--color-secondary': '#5851ec',
    '--color-highlight': '#ffeaa7;',
    '--color-highlight-text': '#334259',
    '--color-border': '#ddd',
    '--color-footer': 'rgb(244, 247, 250)',
    '--color-btn-bg': '#e5edff',
    '--color-btn-shadow': 'rgba(230, 237, 255, 0.7)',
    '--color-btn-shadow-anime': 'rgba(230, 237, 255, 0)',
    '--color-icon-resume': '#250902',
    '--color-icon-github': '#171515',
    '--color-icon-linkedin': '#0077b5',
    '--color-icon-medium': '#212121',
    '--color-icon-twitter': '#03a9f4'
}

const DARK = {
    '--color-bg': 'linear-gradient(rgb(21, 21, 21) 0%,rgb(21, 21, 21) 88%,rgb(10, 13, 16) 100%)',
    '--color-nav': 'rgb(21, 21, 21)',
    '--color-text-primary': '#fff',
    '--color-text-secondary': '#bdbdc3',
    '--color-primary': '#57af7a',
    '--color-primary-light': '#89c7a2',
    '--color-secondary': '#5851ec',
    '--color-highlight': '#ffeaa7',
    '--color-highlight-text': '#334259',
    '--color-border': '#ddd',
    '--color-footer': 'rgb(10, 13, 16)',
    '--color-btn-bg': '#1e1e30',
    '--color-btn-shadow': 'rgba(30, 30, 48, 0.7)',
    '--color-btn-shadow-anime': 'rgba(30, 30, 48, 0)',
    '--color-icon-resume': '#5851ec',
    '--color-icon-github': '#5851ec',
    '--color-icon-linkedin': '#0077b5',
    '--color-icon-medium': '#5851ec',
    '--color-icon-twitter': '#03a9f4'
}

const checkbox = document.getElementById("darkModeToggle");

function changeTheme() {
    let theme = LIGHT

    if (checkbox.checked == true) {
        theme = DARK
    }

    Object.keys(theme).forEach(key => {
        const value = theme[key];
        document.documentElement.style.setProperty(key, value)
    });
}
