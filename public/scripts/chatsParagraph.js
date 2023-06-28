

export function displayChatMessages() {
    const chatContainer = document.getElementById("paragraph-container");
    const chatMessages = [
        "Halloo! Welkom bij de oba ",
        "Wat zoek je in de bieb?",
        "Je kan je vraag hieronder typen in de zoekbalk",
        "Je kan ook zoeken op meeste gestelde vragen",
        "Klik op de kruisje als je de vragen niet meer wil zien",
    ];

    const stick = document.getElementsByClassName("stick")[0]; // Add this line to get the stick element
    let currentIndex = 0;

    function displayNextMessage() {
        if (currentIndex >= chatMessages.length) {
            chatContainer.style.opacity = "0"; // Hide the container when all paragraphs are displayed
            stick.style.opacity = "0"; // Hide the stick along with the container
            return;
        }

        const chatParagraph = document.createElement("p");
        chatParagraph.className = "chat-paragraph";
        chatParagraph.textContent = chatMessages[currentIndex];

        chatParagraph.style.opacity = "0"; // Initially show the paragraph
        chatContainer.appendChild(chatParagraph);

        setTimeout(() => {
            chatParagraph.style.opacity = "1"; // Gradually show the paragraph
            setTimeout(() => {
                chatParagraph.style.opacity = "0"; // Gradually hide the paragraph
                setTimeout(() => {
                    chatParagraph.remove();
                    if (currentIndex === chatMessages.length + 1) {
                        chatContainer.style.opacity = "0"; // Hide the container after the last paragraph fades out
                        stick.style.opacity = "0"; // Hide the stick along with the container
                    }
                }, 500); // Remove paragraph after it fades out
            }, 3000); // Show paragraph for 3 seconds
        }, 1000); // Wait for 1 second before showing the next message

        currentIndex++;
        setTimeout(displayNextMessage, 4000); // Wait for 4 seconds before showing the next message
    }

    displayNextMessage();
}

