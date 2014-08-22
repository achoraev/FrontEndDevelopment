function selectNestedDivs() {
    var nested = document.querySelectorAll('div > div');
    console.log("Using QuerySelectorAll: ");

    for (var i = 0, len = nested.length; i < len; i++) {
        console.log(nested[i].innerHTML);
    }
    // use getElementsByTagName
    var divs = document.getElementsByTagName('div');
   
    console.log("Using GetElementsByTagName: ");

    for (var j = 0, l = divs.length; j < l; j++) {
        var nestedItem = divs[j];        
        if (nestedItem.getElementsByTagName('div')[0] !== undefined) {
            console.log(nestedItem.getElementsByTagName('div')[0].innerHTML);
        }
    }
}
selectNestedDivs();