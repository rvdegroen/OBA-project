export function displayMessages() {
    const messageWrapper = document.querySelector(".message-wrapper");
    const messageList = document.getElementById("message-list");
    const messages = [
        "Hier vind je meer informatie ",
        "Hier kan je iets opslaan als favoriet",
        "Je favorieten vind je hier!",
        "Hier kan je deze pagina delen?",
        "Niet uitkomen? Praat met een medewerker!",
    ];
    let index = 0;

    function showMessage() {
        if (index < messages.length) {
            const message = messages[index];

            const li = document.createElement("li");
            li.className = "message";
            li.textContent = message;

            messageList.innerHTML = ""; // Remove previous messages
            messageList.appendChild(li);

            index++;

            setTimeout(showMessage, 3000); // Delay in milliseconds before displaying the next message
        } else {
            // All messages have been displayed, hide the message wrapper and stick1
            messageWrapper.style.display = "none";
        }
    }

    showMessage();

}