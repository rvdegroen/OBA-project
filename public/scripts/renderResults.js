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
        const div = document.createElement('div');

        // go to /details/${object.id}
        container.setAttribute('href', `/details/${searchResult.id}`);
        container.appendChild(div);
        div.appendChild(image);
        div.appendChild(heading);
        div.appendChild(formatsParagraph);
        // container.appendChild(document.createElement('hr'));

        resultsDiv.appendChild(container);
    }
}
