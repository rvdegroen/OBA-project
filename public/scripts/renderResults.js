export function renderResults(results) {
    const resultsDiv = document.getElementById('results');

    for (const searchResult of results) {
        const image = document.createElement('img');
        image.src = searchResult.coverimages[1];

        const bookTitle = searchResult.titles[0];
        const authors = searchResult.authors.join(', ');
        const formats = searchResult.formats.map((format) => format.text);

        const heading = document.createElement('h2');
        heading.textContent = `${bookTitle} by ${authors}`;

        const formatsParagraph = document.createElement('p');
        formatsParagraph.textContent = `Gepubliceerd als: ${formats.join(
            ', '
        )}`;

        const container = document.createElement('a');
        container.setAttribute('href', '#');
        container.appendChild(image);
        container.appendChild(heading);
        container.appendChild(formatsParagraph);
        // container.appendChild(document.createElement('hr'));

        resultsDiv.appendChild(container);
    }
}
