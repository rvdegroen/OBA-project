// Desktop
export function desktopAssistantImage() {
    const animationImage = document.querySelector('.introduction_image');
    if (animationImage) {
        setTimeout(function () {
            animationImage.src = '/images/character/animation/frame2.png';
        }, 10000);
    }
}



//Create container for the animation
export function helpFromAssistant() {
    var resultsChatContainer = document.createElement("div");
    resultsChatContainer.id = "results-container";

    // Create message container
    var resultsMessagesContainer = document.createElement("div");
    resultsMessagesContainer.id = "results-message";
    resultsChatContainer.appendChild(resultsMessagesContainer);

    var imageContainer = document.createElement("div");
    imageContainer.classList.add('image-container'); // Add a CSS class to the image container

    // Select image
    var digitalAssistantImg = document.createElement('img');
    digitalAssistantImg.src = '/images/character/animation/frame3.png';
    digitalAssistantImg.classList.add('digital-assistant');

    imageContainer.appendChild(digitalAssistantImg); // Append the image to the image container
    resultsChatContainer.appendChild(imageContainer); // Append the image container to the results chat container


    // Create message asking for help
    var helpMessage = document.createElement("p");
    helpMessage.textContent = "Heb je hulp nodig op deze pagina?";
    helpMessage.classList.add("message-text");
    resultsMessagesContainer.appendChild(helpMessage);


    // Create container for buttons
    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    // Create "Yes" button
    var yesButton = document.createElement("button");
    yesButton.id = "yesButton";
    yesButton.textContent = "Yes";

    // Create "No" button
    var noButton = document.createElement("button");
    noButton.id = "noButton";
    noButton.textContent = "No";

    // Append buttons to the button container
    buttonContainer.appendChild(yesButton);
    buttonContainer.appendChild(noButton);

    // Append button container to the results chat container
    resultsChatContainer.appendChild(buttonContainer);

    // Add event listeners to the buttons
    yesButton.addEventListener("click", displayResultsMessages);
    noButton.addEventListener("click", displayLaterMessage);

    function displayResultsMessages() {
        // Clear message container
        resultsMessagesContainer.innerHTML = "";

        var resultsMessages = [
            "Dit zijn je zoek resultaten",
            "Als je op een van deze klikt , dan vind jemeer informatie ",
            "Heb je een medewerker nodig",
            "Druk op de knop vraagteken knop"
        ];

        var index = 0;

        // Display messages one by one
        function displayNextMessage() {
            var message = resultsMessages[index];

            var messageItem = document.createElement("p");
            messageItem.textContent = message;
            messageItem.classList.add('message-texts')

            // Show current message
            resultsMessagesContainer.innerHTML = "";
            resultsMessagesContainer.appendChild(messageItem);

            index++;

            // Check if all messages are displayed
            if (index < resultsMessages.length) {
                setTimeout(displayNextMessage, 2000); // Delay between messages
            }
        }

        displayNextMessage();
    }

    // Function to display the message for asking questions later
    function displayLaterMessage() {
        // Clear message container
        resultsMessagesContainer.innerHTML = "";

        var message = document.createElement("p");
        message.textContent = "You can ask a question later.";
        resultsMessagesContainer.appendChild(message);
        message.classList.add("message-text2");

    }

    document.body.appendChild(resultsChatContainer);
}



