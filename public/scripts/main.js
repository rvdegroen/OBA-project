const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');

searchButton.addEventListener('click', async () => {
    const input = document.getElementById('query');

    const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: input.value }),
    });

    if (response.ok) {
        const responseData = await response.json();
        renderResults(responseData);
    } else {
        const errorMessage = await response.text();
        console.error(errorMessage);
    }
});

function renderResults(results) {
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

        const container = document.createElement('div');
        container.appendChild(image);
        container.appendChild(heading);
        container.appendChild(formatsParagraph);
        container.appendChild(document.createElement('hr'));

        resultsDiv.appendChild(container);
    }
}
