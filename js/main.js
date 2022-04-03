


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

