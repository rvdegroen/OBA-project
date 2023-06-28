// Desktop
export function desktopAssistantImage() {
    const animationImage = document.querySelector('.introduction_image');
    if (animationImage) {
        setTimeout(function () {
            animationImage.src = '/images/character/animation/frame2.png';
        }, 10000);
    }
}

//
export function helpFromAssistant() {
    // whitney code for showing the button options to ask the user: "do you want help?"
    // -----------
    // const assistant image for example
    // append div to assistant img
    // within div append 2 buttons with id's and the text
    // -----------
    // or
    // -----------
    // use classList.add('hidden') to show or hide buttons
    // -----------
    // if yes button (with yes id) then - show tutorial with text
    // else no (with no id) - say you can always speak with a employee
    console.log('whtneyasss');
}
