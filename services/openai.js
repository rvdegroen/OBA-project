exports.parseQuery = function (query) {
    // query e.g. "I would like a book about cooking"

    // 1. "I would like to find a book about cooking" -> book, cooking

    // if it didn't find any of the keywords, type=null
    let type = null;

    if (query.includes('boek')) {
        type = 'book';
    }

    // more specific than book so it gets overwritten
    const pictureBookKeywords = ['prentenboek', 'pictureboek', 'kinderboek'];
    if (pictureBookKeywords.some((keyword) => query.includes(keyword))) {
        type = 'picturebook';
    }

    // if one of these keywords show up in the query, then type is activiteiten
    // we are faking the NLP/NER here
    const activitiesKeywords = ['activiteiten', 'activities'];
    if (activitiesKeywords.some((keyword) => query.includes(keyword))) {
        type = 'activiteiten';
    }

    const newsKeywords = ['nieuws', 'website', 'homepage'];
    if (newsKeywords.some((keyword) => query.includes(keyword))) {
        type = 'website';
    }

    const movieKeywords = ['dvd', 'film', 'movie'];
    if (movieKeywords.some((keyword) => query.includes(keyword))) {
        type = 'movie';
    }

    /*
sheetmusic
cd
*/

    return {
        type,
        topic: query,
    };
};
