//Mobile Menu

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navItems = document.querySelector('.nav-items');

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close() {
    mainMenu.style.top = '-120%';
}

//escape key closes mobile menu
document.addEventListener('keydown', function (event) {
    const { key } = event;
    if (key === "Escape") {
        mainMenu.style.top = '-120%';
    }
});

//clicking anywhere closes mobile menu
mainMenu.addEventListener('click', clickClose);

function clickClose() {
    mainMenu.style.top = '-120%';
};


//INTERSECTION OBSERVER

const faders = document.querySelectorAll('.sun-ani, .graph-ani');


const appearOptions = {
    threshold: .325
}

const appearOnScroll = new IntersectionObserver
    (function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
        appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

const workFaders = document.querySelectorAll('.slide-right');

const appearOptions2 = {
    threshold: .4
}

const appearOnScroll2 = new IntersectionObserver
    (function (
        entries2,
        appearOnScroll2
    ) {
        entries2.forEach(entry2 => {
            if (!entry2.isIntersecting) {
                return;
            } else {
                entry2.target.classList.add('appear-work');
                appearOnScroll2.unobserve(entry2.target);
            }
        })
    },
        appearOptions2);

workFaders.forEach(workFader => {
    appearOnScroll2.observe(workFader);
});

