export function renderResults(results) {
    const resultsDiv = document.getElementById('results');

    for (const searchResult of results) {
        console.log(searchResult);
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
        const heartButton = document.createElement('button');
        const detailDiv = document.createElement('div');
        const publishYear = document.createElement('p');
        publishYear.textContent = searchResult.year;

        // go to /details/${object.id}
        container.setAttribute('href', `/details/${searchResult.id}`);
        container.appendChild(div);
        div.appendChild(image);
        div.appendChild(heading);
        div.appendChild(formatsParagraph);
        div.appendChild(detailDiv);
        detailDiv.appendChild(heartButton);
        detailDiv.appendChild(publishYear);
        // container.appendChild(document.createElement('hr'));

        resultsDiv.appendChild(container);
    }
}
