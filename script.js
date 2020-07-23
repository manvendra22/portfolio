const homeTarget = document.querySelector('#home');
const skillsTarget = document.querySelector('#skills');
const projectsTarget = document.querySelector('#projects');
const blogTarget = document.querySelector('#blog');
const targetElements = document.querySelectorAll('.nav_link')

// configure the intersection observer instance
const intersectionObserverOptions = {
    root: null,
    // rootMargin: '100px',
    threshold: 0.5
}

// initialize the observer with handlers
var homeObserver = new IntersectionObserver(onHomeIntersection, intersectionObserverOptions);
var skillsObserver = new IntersectionObserver(onSkillsIntersection, intersectionObserverOptions);
var projectsObserver = new IntersectionObserver(onProjectsIntersection, intersectionObserverOptions);
var blogObserver = new IntersectionObserver(onBlogIntersection, intersectionObserverOptions);

// provide the observer with a target
homeObserver.observe(homeTarget);
skillsObserver.observe(skillsTarget);
projectsObserver.observe(projectsTarget);
blogObserver.observe(blogTarget);

const intersectionValues = []

function onHomeIntersection(entries) {
    entries.forEach(entry => {
        intersectionValues[0] = entry.intersectionRatio
        checkIntersectionValues()
        // targetElements[0].classList.toggle('visible', entry.intersectionRatio > 0);
    });
}

function onSkillsIntersection(entries) {
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

function onBlogIntersection(entries) {
    entries.forEach(entry => {
        intersectionValues[3] = entry.intersectionRatio
        checkIntersectionValues()
        // targetElements[3].classList.toggle('visible', entry.intersectionRatio > 0);
    });
}

function checkIntersectionValues() {
    const max = Math.max(...intersectionValues)
    const maxIndex = intersectionValues.findIndex(value => value === max)

    if (targetElements[0] && targetElements[1] && targetElements[2] && targetElements[3]) {
        targetElements[0].classList.remove('visible');
        targetElements[1].classList.remove('visible');
        targetElements[2].classList.remove('visible');
        targetElements[3].classList.remove('visible');

        targetElements[maxIndex].classList.add('visible');
    }
}