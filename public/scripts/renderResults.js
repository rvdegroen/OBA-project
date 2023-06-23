export function renderResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    for (const searchResult of results) {
        console.log(searchResult);
        const image = document.createElement('img');
        image.src = searchResult.coverimages[1];

        const bookTitle = shortenTitle(searchResult.titles[0]);
        const authors = shortenAuthor(searchResult.authors.join(', '));

        const container = document.createElement('a');
        const div = document.createElement('div');
        const imageContainer = document.createElement('div'); // Container for the image
        const bookInfoDiv = document.createElement('div'); // New div for book information
        const titleHeading = document.createElement('h3'); // Separate heading for book title
        const authorParagraph = document.createElement('p'); // Separate paragraph for author

        const detailDiv = document.createElement('div');
        div.classList.add('book-container');
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
        detailDiv.appendChild(titleHeading);
        detailDiv.appendChild(authorParagraph);

        titleHeading.textContent = bookTitle;
        authorParagraph.textContent = authors;

        resultsDiv.appendChild(container);
    }
}

// Function to shorten the title
function shortenTitle(title) {
    const words = title.split(' ');

    if (words.length > 2) {
        const shortenTitle = words.slice(0, 3).join(' ');
        return shortenTitle + '...';
    }

    return title;
}

// Function to shorten the author's name
function shortenAuthor(authors) {
    const authorNames = authors.split(', ');

    if (authorNames.length > 1) {
        const shortenAuthors = authorNames.slice(0, 1).join(', ');
        return shortenAuthors + '...';
    }

    return authors;
}