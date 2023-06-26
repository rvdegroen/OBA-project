// imports
import * as assistantImage from './assistantImage.js';
import {
    initializeFAQ
} from './faq.js';

import {
    chatMessages,
    displayChatMessages
} from './chatsParagraph.js';

import {
    fadeOutAfterDelay
} from './animation.js';

import {renderResults } from './renderResults.js';

// Call the function


const searchButton = document.getElementById('searchButton');

initializeFAQ();

searchButton.addEventListener('click', async () => {
    const input = document.getElementById('query');

    const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: input.value
        }),
    });

    if (response.ok) {
        const responseData = await response.json();
        renderResults(responseData);
    } else {
        const errorMessage = await response.text();
        console.error(errorMessage);
    }
})

// document.addEventListener("DOMContentLoaded", initializeRobot);

fadeOutAfterDelay();

displayChatMessages();
