export function setAnimationImage() {
    const animationImage = document.querySelector('.introduction_image');
    if (animationImage) {
        setTimeout(function () {
            animationImage.src = '/images/character/animation/frame2.png';
        }, 2000);
    }
}

setAnimationImage();

export * from './assistantImage.js';
