const books = require('./books');

function mergeSort(array) {
    if (array.length > 1) {
        const middle = Math.floor(array.length / 2);
        const part1 = mergeSort(array.slice(0, middle));
        const part2 = mergeSort(array.slice(middle, array.length));
        array = sort(part1, part2);
    }

    return array;
}

function sort(arr1, arr2) {
    let posArr1 = 0;
    let posArr2 = 0;
    const ans = [];

    while (posArr1 < arr1.length && posArr2 < arr2.length) {
        let currentProd1 = arr1[posArr1];
        let currentProd2 = arr2[posArr2];
        if (currentProd1.price < currentProd2.price) {
            ans.push(currentProd1);
            posArr1++;
        } else if (currentProd1.price > currentProd2. price) {
            ans.push(currentProd2);
            posArr2++;
        } else {
            ans.push(currentProd1);
            ans.push(currentProd2);
            posArr1++;
            posArr2++;
        }
    }

    return ans.concat(posArr1 < arr1.length ? arr1.slice(posArr1) : arr2.slice(posArr2));
}

console.log(mergeSort(books));