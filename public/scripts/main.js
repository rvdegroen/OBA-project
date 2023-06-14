// const searchButton = document.getElementById('searchButton');
// searchButton.addEventListener('click', async () => {
//     const input = document.getElementById('query');

//     const response = await fetch('/api/search', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ query: input.value }),
//     });

//     if (response.ok) {
//         const responseData = await response.json();
//         // PUT FRONTEND JAVASCRIPT CODE HERE
//         // Show books in browser
//     } else {
//         const errorMessage = await response.text();
//         console.error(errorMessage);
//     }
// });

// console.log('JavaScript code is running');
// const chatIcon = document.getElementById('chatIcon');
// const chatBox = document.getElementById('chatBox');

// chatIcon.addEventListener('click', function () {
//     chatBox.style.display = (chatBox.style.display === 'none') ? 'block' : 'none';
// });

const chatIcon = document.getElementById("chatIcon");
const dialog = document.querySelector("dialog");

chatIcon.addEventListener("click", () => {
    dialog.showModal();
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        dialog.close();
    }
});

document.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});