const { edGalho, edFolha } = require('./books');

function handleLastElement(tgtList, fList, index) {
    while (index < fList.length) {
        tgtList.push(fList[index]);
        index++;
    }
    return tgtList, index;
}

function mergeLists(list1, list2) {
    let ans = [];
    let posList1 = 0;
    let posList2 = 0;

    while (posList1 < list1.length && posList2 < list2.length) {
        let currentProd1 = list1[posList1];
        let currentProd2 = list2[posList2];
        console.log(`Comparing ${currentProd1.title} with ${currentProd2.title}`);

        if (currentProd1.price < currentProd2.price) {
            ans.push(currentProd1);
            posList1++;
        } else if (currentProd1.price > currentProd2.price) {
            ans.push(currentProd2);
            posList2++;
        } else {
            ans.push(currentProd1);
            ans.push(currentProd2);
            posList1++;
            posList2++;
        }
        
    }

    ans, posList1 = handleLastElement(ans, list1, posList1);
    ans, posList2 = handleLastElement(ans, list2, posList2);

    return ans;
}

final = mergeLists(edFolha, edGalho);
console.log(final);