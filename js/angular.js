
//landscape and portrait-views

let video = document.querySelector('#video');
let landscape = document.querySelector('#landscape');
let portrait = document.querySelector('#portrait')

function LandscapeRotate() {
    video.classList.add('video-rotate');
}

landscape.addEventListener('click', function () {
    LandscapeRotate();
});


function PortraitRotate() {
    video.classList.remove('video-rotate');
}

portrait.addEventListener('click', function () {
    PortraitRotate();
});


//video timestamp link
let myvideo = document.querySelector('#video')
let timestampLink = document.querySelector('#timestamp-link');

timestampLink.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 95.75;
    myvideo.play();
}, false);

function iOS() {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)

}

if (iOS() === true) {
    let banner1 = document.querySelector('.banner')
    let banner2 = document.querySelector('.banner2')

    banner1.remove()
    document.querySelector('.ios-banner').style.display = "block";


    banner2.remove()
    document.querySelector('.ios-banner2').style.display = "block";

}

