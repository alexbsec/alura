let books = require('./books');

function insertionSort(list) {
    for (let i = 0; i < list.length; i++) {
        let analyze = i;
        while (analyze > 0 && list[analyze].price < list[analyze - 1].price) {
            let analysisItem = list[analyze];
            let previousItem = list[analyze-1];
            list[analyze] = previousItem;
            list[analyze-1] = analysisItem;
            analyze--;
        }
    }

    return list;
}

books = insertionSort(books);

console.log("Ordem de livros mais baratos: ", books);