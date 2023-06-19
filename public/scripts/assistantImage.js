export function setAnimationImage() {
    setTimeout(function () {
        const animationImage = document.querySelector('.introduction_image');
        animationImage.src = '/images/character/animation/frame2.png';
    }, 2000);
}

setAnimationImage();

export * from './assistantImage.js';
