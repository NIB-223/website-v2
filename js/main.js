//Mobile Menu

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navItems = document.querySelector('.nav-items');

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show() {
    mainMenu.style.display = 'grid';
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

//desktop nav
const faders = document.querySelectorAll('.animation_nav--main');
const appearOptions = {
    threshold: .5
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
                entry.target.classList.add('appear-desktop_nav--main');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
        appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

