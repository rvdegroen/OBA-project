// imports







// Call the function


import { initializeFAQ } from './faq.js';
import { renderResults } from './renderResults.js';
import { helpFromAssistant } from './helpFromAssistant.js';
import { desktopAssistantImage } from './helpFromAssistant.js';
import {chatMessages,displayChatMessages} from './chatsParagraph.js';
import {fadeOutAfterDelay} from './animation.js';



const searchButton = document.getElementById('searchButton');

initializeFAQ();
desktopAssistantImage();

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


fadeOutAfterDelay();

displayChatMessages();

            // run the function helpFromAssistant (whitney assistant animation)
            helpFromAssistant();
        } else {
            const errorMessage = await response.text();
            console.error(errorMessage);
        }
    });
}

