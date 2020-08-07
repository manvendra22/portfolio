/*
    Scroll reveal animations
*/

ScrollReveal(
    { delay: 200, duration: 2000 }
).reveal('.intro');

ScrollReveal(
    { delay: 1000, origin: 'top', distance: '30px', duration: 1500 }
).reveal('.links');

ScrollReveal({ mobile: false }).reveal('.nav, .dark-mode');

ScrollReveal(
    { delay: 2000, origin: 'right', distance: '1000px', mobile: true }
).reveal('.pulseBtn');

ScrollReveal({ delay: 500, origin: 'bottom', distance: '30px', viewFactor: 1, mobile: false }).reveal('.about-first');
ScrollReveal({ delay: 1000 }).reveal('.about-second');
ScrollReveal({ delay: 500, origin: 'left' }).reveal('.project-intro');
ScrollReveal({ delay: 1000, origin: 'right' }).reveal('.project-image');


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
    '--color-bg': '#151515',
    '--color-text-primary': '#bdbdc3',
    '--color-primary': '#57af7a',
    '--color-primary-light': '#89c7a2',
    '--color-highlight': '#1f4160',
    '--color-highlight-bg': '#fbe7b2',
    '--color-border': '#ddd',
    '--color-btn': '#5851ec',
    '--color-btn-bg': '#1e1e30',
    '--color-btn-shadow': 'rgba(30, 30, 48, 0.7)',
    '--color-btn-shadow-anime': 'rgba(30, 30, 48, 0)',
    '--color-icon-resume': '#5851ec',
    '--color-icon-github': '#5851ec',
    '--color-icon-linkedin': '#0077b5',
    '--color-icon-medium': '#5851ec',
    '--color-icon-twitter': '#03a9f4'
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
