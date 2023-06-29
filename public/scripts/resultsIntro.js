//  export function initializeRobot() {
//     const messageElement = document.getElementById("message");
//     const yesButton = document.getElementById("yesBtn");
//     const noButton = document.getElementById("noBtn");

//     // Robot's initial message
//     messageElement.innerText = "Heb je hulp nodig op deze pagina?";

//     // Event listener for the "Yes" button
//     yesButton.addEventListener("click", function () {
//         messageElement.innerText = "Geweldig, ik help je graag";
//         // Call a function to perform the desired action when the user clicks "Yes"
//         startHelp();
//     });

//     // Event listener for the "No" button
//     noButton.addEventListener("click", function () {
//         messageElement.innerText = "Voel u vrij om later om assistentie te vragen.";
//         // Call a function to perform the desired action when the user clicks "No"
//         // For example, you could hide the robot or stop any ongoing processes.
//         stopHelp();
//     });

//     function startHelp() {
//         // Implement your code to provide assistance or information here
//         // This function will be called when the user clicks "Yes"
//     }

//     function stopHelp() {
//         // Implement your code to stop providing assistance here
//         // This function will be called when the user clicks "No"
//     }
// }

// document.addEventListener("DOMContentLoaded", initializeRobot);