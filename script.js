AOS.init({
    disable: 'tablet'
});



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