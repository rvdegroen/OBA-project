export function initializeFAQ() {
    const closeButton = document.getElementById('close-button');
    const faqWrapper = document.querySelector('.faq-wrapper');

    if (faqWrapper) {
        closeButton.addEventListener('click', () => {
            faqWrapper.classList.add('fadeOut');
            setTimeout(() => {
                faqWrapper.classList.add('hidden');
                faqWrapper.classList.remove('fadeOut');
            }, 500); // Adjust the delay to match the animation duration
        });

        // Show the FAQ wrapper after a delay
        setTimeout(() => {
            faqWrapper.classList.remove('hidden');
        }, 1000); // Adjust the delay to match your desired animation timing
    }
}
