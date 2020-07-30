/*
    Scroll reveal animations
*/

ScrollReveal(
    { delay: 0, duration: 2000 }
).reveal('.intro');

ScrollReveal(
    { delay: 0, duration: 2000 }
).reveal('.nav');

ScrollReveal(
    { delay: 1500, duration: 1500 }
).reveal('.pulseBtn');

ScrollReveal({ delay: 500, duration: 2000, origin: 'bottom', distance: '30px', viewFactor: 1, mobile: false }).reveal('.about-first');
ScrollReveal({ delay: 1500, duration: 2000 }).reveal('.about-second');
ScrollReveal({ delay: 500, duration: 2000, origin: 'left' }).reveal('.project_intro');
ScrollReveal({ delay: 1500, duration: 2000, origin: 'right' }).reveal('.project_image');

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
    Dark mode theme
*/

const LIGHT = {
    '--color-bg': '#fff',
    '--color-text-primary': '#1f4160',
    '--color-primary': '#57af7a',
    '--color-primary-light': '#89c7a2',
    '--color-highlight': '#1f4160',
    '--color-highlight-bg': '#fbe7b2',
    '--color-border': '#ddd',
    '--color-btn': '#5851ec',
    '--color-btn-bg': '#e5edff'
}

const DARK = {
    '--color-bg': '#151515',
    '--color-text-primary': '#bdbdc3',
    '--color-primary': '#57af7a',
    '--color-primary-light': '#89c7a2',
    '--color-highlight': '#1f4160',
    '--color-highlight-bg': '#fbe7b2',
    '--color-border': '#ddd',
    '--color-btn': '#5851ec',
    '--color-btn-bg': '#e5edff'
}

function changeTheme() {
    let currentMode = localStorage.getItem('mode') || 'DARK'
    let theme = DARK
    let nextMode = 'LIGHT'
    let image_url = 'images/sun.svg'

    if (currentMode === 'LIGHT') {
        theme = LIGHT
        nextMode = 'DARK';
        image_url = 'images/moon.svg'
    }

    document.querySelector('.dark-mode').src = image_url
    Object.keys(theme).forEach(key => {
        const value = theme[key];
        document.documentElement.style.setProperty(key, value)
    });

    localStorage.setItem('mode', nextMode)
}
