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
;










// //main page transition
// let mainTransition1 = document.querySelector('.main-transition-overlay1');
// let mainTransition2 = document.querySelector('.main-transition-overlay2');
// let transitionCloseTrigger = document.querySelector('.nav-items');

// transitionCloseTrigger.addEventListener('click', closeTransition)

// function closeTransition() {
//     mainTransition1.classList.remove(".main-transition-overlay1");
//     mainTransition1.classList.add(".main-transition-overlay1-js")
// }

