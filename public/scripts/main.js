//

import { initializeFAQ } from './faq.js';
import { renderResults } from './renderResults.js';
import { helpFromAssistant } from './helpFromAssistant.js';
import { desktopAssistantImage } from './helpFromAssistant.js';
import { displayChatMessages } from './chatsParagraph.js';
import { fadeOutAfterDelay } from './animation.js';
import { displayMessages } from './animationDetails.js';

initializeFAQ();
desktopAssistantImage();

const searchButton = document.getElementById('searchButton');
// modal
const dialogButton = document.getElementById('dialog-button');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');

if (searchButton) {
    searchButton.addEventListener('click', async () => {
        const input = document.getElementById('query');

        const response = await fetch('/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: input.value,
            }),
        });

        if (response.ok) {
            const responseData = await response.json();
            // go through the responseData array, look at the formats
            // create a new object where the results are grouped by format
            // and then adjust renderResults to use this
            renderResults(responseData);

            // run the function helpFromAssistant (whitney assistant animation)
            helpFromAssistant();
        } else {
            const errorMessage = await response.text();
            console.error(errorMessage);
        }
    });

    displayChatMessages();
    fadeOutAfterDelay();
}

document.addEventListener('DOMContentLoaded', () => {
    displayMessages(); // Call the displayMessages function
});

// dialog src: https://www.youtube.com/watch?v=ywtkJkxJsdg&t=3s

if (modal) {
    modal.classList.add('hidden');
}

if (dialogButton) {
    dialogButton.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.showModal();
    });
}

if (closeButton) {
    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.close();
    });
}
