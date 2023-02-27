function selectionSort(products, index) {
    let chpst = index;

    for (let cur = chpst; cur < products.length; cur++) {
        if (products[cur].price < products[chpst].price) {
            chpst = cur;
        }
    }
    return chpst;
}

module.exports = selectionSort;
