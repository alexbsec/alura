function findSmallest(pivot, array) {
    let smallest = 0;

    for (let i = 0; i < array.length; i++) {
        let currentProd = array[i];
        if (currentProd.price < pivot.price) {
            smallest++;
        }
    }

    swapIndex(array, array.indexOf(pivot), smallest);

    return array;
}


function swapIndex(array, stt, end) {
    const elem1 = array[stt];
    const elem2 = array[end];

    array[end] = elem1;
    array[stt] = elem2;
}


function splitInPivot(array) {
    let pivotPos = Math.floor(array.length / 2);
    let pivot = array[pivotPos];
    let smallestElems = 0;
    array = findSmallest(pivot, array);
    for (let i = 0; i < array.length; i++) {
        let curr = array[i];
        if (curr.price <= pivot.price && curr != pivot) {
            swapIndex(array, i, smallestElems);
            smallestElems++;
        }
    } 
    return array
}

module.exports = swapIndex;
