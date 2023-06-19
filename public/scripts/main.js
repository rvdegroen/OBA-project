const chatIcon = document.getElementById("chatIcon");
const dialog = document.querySelector("dialog");
const closeBtn = document.getElementById("close-btn");
const fagBtn = document.getElementById("faq-btn")
const faqContent = document.querySelector(".faq-content")
const form = document.getElementById('searchForm');
const queryInput = document.getElementById("queryInput")
const resultsDiv = document.getElementById('results');
// Client-side code

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


closeBtn.addEventListener("click", () => {
    dialog.close()
})



fagBtn.addEventListener("click", () => {
    faqContent.style.display = "block";
});



// // Make a request to the server to fetch the data
// function fetchDataFromServer() {
//   form.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const query = queryInput.value;

//     try {
//       // Make a fetch request to the server
//       const response = await fetch('/api/search', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ query }),
//       });

//       const data = await response.json();

//       // Log the fetched data on the client-side
//       console.log('Data fetched from server:', data);
//     } catch (error) {
//       console.error(error);
//     }
//   });
// }

// fetchDataFromServer();


// Make a request to the server to fetch the data
function fetchDataFromServer() {
   
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const query = queryInput.value;
  
      try {
        // Make a fetch request to the server
        const response = await fetch('/api/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });
  
        const data = await response.json();
  
        // Extract the relevant information from the data
        const books = data.results.map((result) => ({
          title: result.titles ? result.titles[0] : 'N/A',
          author: result.authors ? result.authors[0] : 'N/A',
        }));
  
        // Update the HTML to display the book information
        const bookList = document.getElementById('bookList');
        bookList.innerHTML = '';
  
        books.forEach((book) => {
          const listItem = document.createElement('li');
          listItem.textContent = `Title: ${book.title}, Author: ${book.author}`;
          bookList.appendChild(listItem);
        });
      } catch (error) {
        console.error(error);
      }
    });
  }
  


