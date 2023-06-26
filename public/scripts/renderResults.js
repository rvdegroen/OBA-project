export function renderResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    const resultsGroupedByFormat = {};

    for (let searchResult of results) {
        const [firstFormat] = searchResult.formats;
        const format = firstFormat.text;

        if (resultsGroupedByFormat[format]) {
            resultsGroupedByFormat[format].push(searchResult);
        } else {
            resultsGroupedByFormat[format] = [searchResult];
        }
    }

    for (let entry of Object.entries(resultsGroupedByFormat)) {
        const [format, resultsByFormat] = entry;

        const heading = document.createElement('h2');
        heading.textContent = format;
        heading.classList.add('format-heading'); // TODO

        resultsDiv.append(heading);

        const resultContainer = document.createElement('div');
        resultContainer.classList.add('results-container'); // TODO

        for (let searchResult of resultsByFormat) {
            // creating js elements
            const image = document.createElement('img');
            const container = document.createElement('a');
            const div = document.createElement('div');
            const imageContainer = document.createElement('div'); // Container for the image
            const bookInfoDiv = document.createElement('div'); // New div for book information
            const titleHeading = document.createElement('h3'); // Separate heading for book title
            const authorParagraph = document.createElement('p'); // Separate paragraph for author
            const detailDiv = document.createElement('div');

            const bookTitle = shortenTitle(searchResult.titles[0]);
            const authors = shortenAuthor(searchResult.authors.join(', '));

            // rendering
            image.src = searchResult.coverimages[1];
            container.setAttribute('href', `/details/${searchResult.id}`); // go to /details/${object.id}

            // appends
            container.appendChild(div);
            div.appendChild(imageContainer);
            imageContainer.appendChild(image);
            div.appendChild(bookInfoDiv);
            bookInfoDiv.appendChild(titleHeading);
            bookInfoDiv.appendChild(authorParagraph);
            div.appendChild(detailDiv);
            detailDiv.appendChild(titleHeading);
            detailDiv.appendChild(authorParagraph);
            resultContainer.appendChild(container);
            // div.appendChild(formatsParagraph);

            // textcontents
            titleHeading.textContent = bookTitle;
            authorParagraph.textContent = authors;

            // adding classes
            div.classList.add('book-container');
            imageContainer.classList.add('image-container');
            detailDiv.classList.add('detail-div');
            imageContainer.classList.add('image-container');
            detailDiv.classList.add('detail-div');
        }

        resultsDiv.append(resultContainer);
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
