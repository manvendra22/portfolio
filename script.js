/*
    Scroll reveal animations
*/

ScrollReveal(
    { delay: 200, duration: 2000 }
).reveal('.intro, .nav, .dark-mode-toggle');

ScrollReveal(
    { delay: 1000, scale: 0 }
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
    Navigation active handlers
*/

const targetSections = document.querySelectorAll('section');
const targetNavlinks = document.querySelectorAll('.nav_link')

// configure the intersection observer instance
const observerOptions = {
    // root: null,
    // rootMargin: '100px',
    threshold: 0.25
}

let observer = new IntersectionObserver(onIntersection, observerOptions);

function onIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            targetNavlinks.forEach(navlink => {
                if (navlink.attributes['data-name'].value === entry.target.id) {
                    navlink.classList.add('visible');
                } else {
                    navlink.classList.remove('visible');
                }
            })
        }
    })
}

targetSections.forEach(section => {
    observer.observe(section)
})




/*
    Dark mode theme
*/

const LIGHT = {
    '--color-bg': 'linear-gradient(rgb(255, 255, 255) 0%,rgb(255, 255, 255) 88%,rgb(244, 247, 250) 100%)',
    '--color-nav-bg': 'rgb(255, 255, 255)',
    '--color-text-primary': '#233040',
    '--color-text-secondary': '#334259',
    '--color-primary': '#57af7a',
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
    '--color-nav-bg': 'rgb(21, 21, 21)',
    '--color-text-primary': '#fff',
    '--color-text-secondary': '#bdbdc3',
    '--color-primary': '#57af7a',
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