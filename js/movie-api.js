
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
    myvideo.currentTime = 95;
    myvideo.play();
}, false);


//Detecting iOS

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


    banner1.remove()
    document.querySelector('.ios-banner').style.display = "block";

}
