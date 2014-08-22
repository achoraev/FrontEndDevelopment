var tags =
["cms", "javascript", "js", "ASP.NET MVC", ".net", ".net", "css", "wordpress", "xaml", "js", "http", "web", "asp.net", "asp.net MVC", "ASP.NET MVC", "wp", "javascript", "js", "cms", "html", "javascript", "http", "http", "CMS"];

var tagCloud = generateTagCloud(tags, 17, 42);

function generateTagCloud(tags, min, max) {
    var tagsArray = countTags(tags);
    var powers = calculatePowers(tagsArray, min, max);

    for (var i = 0; i < tagsArray.length; i++) {
        tagsArray[i].fontSize = powers[tagsArray[i].count - 1];
    }

    var fragment = document.createDocumentFragment();
    var tagTemplate = document.createElement('a');
    tagTemplate.className = 'tag';
    tagTemplate.href = '#';
    var whiteSpaceTemplate = document.createElement('span');
    whiteSpaceTemplate.innerHTML = '<br/>';

    for (var j = 0; j < tagsArray.length; j++) {        
        tagTemplate.innerHTML = tagsArray[j].name;
        tagTemplate.style.fontSize = tagsArray[j].fontSize + 'px';
        fragment.appendChild(tagTemplate.cloneNode(true));
        fragment.appendChild(whiteSpaceTemplate.cloneNode(true));        
    }

    var container = document.getElementById('container');
    container.appendChild(fragment);

    function countTags(tags) {
        var tagsDictionary = [];
        var tagIsInArray = false;
        for (var i = 0, len = tags.length; i < len; i++) {
            var currentTag = tags[i];
            for (var j = 0, l = tagsDictionary.length; j < l; j++) {
                if (tagsDictionary[j].name === currentTag) {
                    tagsDictionary[j].count++;
                    tagIsInArray = true;
                }
            }
            if (!tagIsInArray) {
                tagsDictionary.push({ name: currentTag, count: 1, fontSize: 'unknown' });
            }
            tagIsInArray = false;
        }

        return tagsDictionary;
    }

    function calculatePowers(tagsDictionary, minSize, maxSize) {
        var powers = [];
        var maxOccurance = (function () {
            var max = 1;
            for (var i = 0; i < tagsDictionary.length; i++) {
                if (tagsDictionary[i].count > max) {
                    max = tagsDictionary[i].count;
                }
            }
            return max;
        }());

        powers.push(minSize);
        var shift = (maxSize - minSize) / (maxOccurance - 2);
        powers.push(shift);        
        powers.push(maxSize);

        return powers;
    }
}