(function () {
    'use strict';
    var books = [{title: "The three musketiers", author: "Alexander Duma"},
                {title: "20 years later", author: "Alexander Duma"},
                {title: "Airport", author: "Arthur Heily"}];

    function mostPopularAuthor(books, prop) {
        var grouped = _.countBy(books, prop),
            maxCount = _.max(grouped),
            result = _.invert(grouped);

        console.log("Author: " + result[maxCount] + " books: " + maxCount);
    }
    
    console.log("Sixth Task");
    mostPopularAuthor(books, 'author');

}());