const getTheTitles = function(books) {
    const booksTitle =  books.map(book => book.title);
    console.log({booksTitle});
    return booksTitle;
}

module.exports = getTheTitles;
