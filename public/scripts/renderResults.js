export function initializeRobot() {
    const messageElement = document.getElementById("message");
    const yesButton = document.getElementById("yesBtn");
    const noButton = document.getElementById("noBtn");

    // Robot's initial message
    messageElement.innerText = "Heb je hulp nodig op deze pagina?";

    // Event listener for the "Yes" button
    yesButton.addEventListener("click", function () {
        messageElement.innerText = "Geweldig, ik help je graag";
        // Call a function to perform the desired action when the user clicks "Yes"
        startHelp();
    });

    // Event listener for the "No" button
    noButton.addEventListener("click", function () {
        messageElement.innerText = "Voel u vrij om later om assistentie te vragen.";
        // Call a function to perform the desired action when the user clicks "No"
        // For example, you could hide the robot or stop any ongoing processes.
        stopHelp();
    });

    function startHelp() {
        // Implement your code to provide assistance or information here
        // This function will be called when the user clicks "Yes"
    }

    function stopHelp() {
        // Implement your code to stop providing assistance here
        // This function will be called when the user clicks "No"
    }
}

document.addEventListener("DOMContentLoaded", initializeRobot);

export function renderResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results


    for (const searchResult of results) {
        console.log(searchResult);
        const image = document.createElement('img');
        image.src = searchResult.coverimages[1];

        const bookTitle = shortenTitle(searchResult.titles[0]);
        const authors = searchResult.authors.join(', ');


        const container = document.createElement('a');
        const div = document.createElement('div');
        const imageContainer = document.createElement('div'); // Container for the image
        const bookInfoDiv = document.createElement('div'); // New div for book information
        const titleHeading = document.createElement('h3'); // Separate heading for book title
        const authorParagraph = document.createElement('p'); // Separate paragraph for author


        const detailDiv = document.createElement('div');
        div.classList.add('book-container')
        imageContainer.classList.add('image-container');
        detailDiv.classList.add('detail-div');




        // go to /details/${object.id}
        container.setAttribute('href', `/details/${searchResult.id}`);
        container.appendChild(div);
        div.appendChild(imageContainer);
        imageContainer.appendChild(image);
        div.appendChild(bookInfoDiv);
        bookInfoDiv.appendChild(titleHeading);
        bookInfoDiv.appendChild(authorParagraph);
        // div.appendChild(formatsParagraph);
        div.appendChild(detailDiv);
        detailDiv.appendChild(titleHeading)
        detailDiv.appendChild(authorParagraph)

        titleHeading.textContent = bookTitle;
        authorParagraph.textContent = authors;

        resultsDiv.appendChild(container);
    }
}


//function to shorten the title

function shortenTitle(title) {
    const words = title.split(' ');

    if (words.length > 2) {
        const shortenTitle = words.slice(0, 3).join(' ');
        return shortenTitle + '...';
    }

    return title;


    initializeRobot();
}












// export function renderResults(results) {
//     const resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = ''; // Clear previous results

//     for (const searchResult of results) {
//         console.log(searchResult);
//         const image = document.createElement('img');
//         image.src = searchResult.coverimages[1];

//         const bookTitle = shortenTitle(searchResult.titles[0]);
//         const authors = searchResult.authors.join(', ');

//         const container = document.createElement('a');
//         const div = document.createElement('div');
//         const imageContainer = document.createElement('div'); // Container for the image
//         const bookInfoDiv = document.createElement('div'); // New div for book information
//         const titleHeading = document.createElement('h3'); // Separate heading for book title
//         const authorParagraph = document.createElement('p'); // Separate paragraph for author
//         const detailDiv = document.createElement('div');

//         div.classList.add('book-container');
//         imageContainer.classList.add('image-container');
//         detailDiv.classList.add('detail-div');

//         // go to /details/${object.id}
//         container.setAttribute('href', `/details/${searchResult.id}`);
//         container.appendChild(div);
//         div.appendChild(imageContainer);
//         imageContainer.appendChild(image);
//         div.appendChild(bookInfoDiv);
//         bookInfoDiv.appendChild(titleHeading);
//         bookInfoDiv.appendChild(authorParagraph);
//         div.appendChild(detailDiv);
//         detailDiv.appendChild(titleHeading);
//         detailDiv.appendChild(authorParagraph);

//         titleHeading.textContent = bookTitle;
//         authorParagraph.textContent = authors;

//         resultsDiv.appendChild(container);
//     }

//     showAssistancePopup();
// }

// function showAssistancePopup() {
//     const popupMessage = document.createElement('div');
//     popupMessage.classList.add('popup');

//     const message = document.createElement('p');
//     message.textContent = "Do you need assistance?";
//     popupMessage.appendChild(message);

//     const btnContainer = document.createElement('div');
//     btnContainer.classList.add('btn-container');

//     const yesButton = document.createElement('button');
//     yesButton.textContent = "Yes";
//     yesButton.addEventListener('click', handleYesButtonClick);
//     btnContainer.appendChild(yesButton);

//     const noButton = document.createElement('button');
//     noButton.textContent = "No";
//     noButton.addEventListener('click', handleNoButtonClick);
//     btnContainer.appendChild(noButton);

//     popupMessage.appendChild(btnContainer);
//     document.body.appendChild(popupMessage);
// }

// // Rest of the code...


// function handleYesButtonClick() {
//     const popupMessage = document.querySelector('.popup');
//     const message = popupMessage.querySelector('.popup p');
//     message.textContent = "Sure, I'm here to help!";






// function handleNoButtonClick() {
//     const message = document.querySelector('.popup p');
//     message.textContent = "You can ask later.";

//     const popupMessage = document.querySelector('.popup');
//     setTimeout(() => {
//         popupMessage.style.display = 'none';
//     }, 2000); // Delay for 2000 milliseconds (2 seconds)
// }

// // Function to shorten the title
// export function shortenTitle(title) {
//     const words = title.split(' ');

//     if (words.length > 2) {
//         const shortenTitle = words.slice(0, 3).join(' ');
//         return shortenTitle + '...';
//     }

//     return title;
// }