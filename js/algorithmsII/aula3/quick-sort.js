const books  = require('./books.js');
const swapIndex = require('./smallest-element');

function quickSort(array, l, r) {
        if (array.length > 1) {
            let cl = partition(array, l, r);
            if (l < cl - 1) {
                quickSort(array, l, cl - 1);
            }
            if (cl < r) {
                quickSort(array, cl, r);
            }
        }

    return array;
}

function partition(arr, l, r) {
    let middle  = Math.floor((l + r)/2);
    let pivot = arr[middle];
    let cl = l;     // 0
    let cr = r;     // arr.length-1
    while (cl <= cr) {
        while (arr[cl].price < pivot.price) {
            cl++;
        }

        while (arr[cr].price > pivot.price) {
            cr--;
        }

        if (cl <= cr) {
            swapIndex(arr, cl, cr);
            cl++;
            cr--;
        }
    }
    
    return cl;
}

console.log(quickSort(books, 0, books.length-1));