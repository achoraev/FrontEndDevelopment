function createImagesPreviewer(selector, items) {
    var container = document.querySelector(selector);
    var pictures = items;

    var filterBox = document.createElement('div');
    var previewBox = document.createElement('div');
    var previewLink = document.createElement('h1');
    var previewImage = document.createElement('img');
    previewImage.src = pictures[0].url;
    previewLink.innerHTML = pictures[0].title;

    stylePicture(previewImage, 550, 300);

    var labelOfFilterBox = document.createElement('label');
    labelOfFilterBox.innerHTML = ('Filter');
    var newLine = document.createElement('br');
    var filter = document.createElement('input');
    var listOfAnimals = document.createElement('ul');
    var len = items.length;

    filterBox.appendChild(labelOfFilterBox);
    filterBox.appendChild(newLine);
    filterBox.appendChild(filter);
    filterBox.appendChild(listOfAnimals);

    previewBox.appendChild(previewLink);
    previewBox.appendChild(previewImage);

    container.appendChild(previewBox);
    container.appendChild(filterBox);

    filter.addEventListener('onchange', function () {
        var names = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            names.push(item.title);
        }

        for (var i = 0; i < names.length; i++) {
            var value = filter.value;
            listOfAnimals.childNodes.style.display = 'none';
            //if (names[i].substr === value) {
                
            //}
        }
    });


    //styles
    previewBox.style.width = 700 + 'px';
    previewBox.style.height = 600 + 'px';
    previewBox.style.float = 'left';
    previewBox.style.alignContent = 'bottom';
    previewLink.style.textAlign = 'center';

    listOfAnimals.style.listStyleType = 'none';
    filterBox.style.margin = 0;
    listOfAnimals.style.padding = 0;

    container.style.overflow = 'auto';
    filterBox.style.marginLeft = '80%';
    filterBox.style.textAlign = 'center';
    container.style.textAlign = 'right';
    container.style.width = 900 + 'px';
    container.style.height = 600 + 'px';
    container.style.border = '1px solid black';

    for (var i = 0; i < len; i++) {
        var imageBox = pictures[i];
        var list = createImageBox(imageBox);
        listOfAnimals.appendChild(list);
    }

    function onClick(ev) {
        var clickedImage = this;
        previewImage.src = clickedImage;
        previewBox.appendChild(previewImage);
        container.appendChild(previewBox);
    };

    function onHover(ev) {
        var hoveredImage = this;
        hoveredImage.style.backgroundColor = 'gray';
    };

    function onMouseOut(ev) {
        var hoveredImage = this;
        hoveredImage.style.backgroundColor = 'white';
    };

    function stylePicture(item, width, height) {
        item.style.width = width + 'px';
        item.style.height = height + 'px';
        item.style.borderRadius = 10 + 'px';
    }

    function createImageBox(imageBox) {
        var listItem = document.createElement('li');
        var title = document.createElement('strong');
        var newLine = document.createElement('br');
        var link = document.createElement('a');
        var picture = document.createElement('img');
        link.href = imageBox.url;

        picture.src = imageBox.url;

        stylePicture(picture, 140, 100);
        listItem.style.width = 140 + 'px';
        listItem.style.height = 120 + 'px';        

        title.style.alignContent = 'center';
        title.innerHTML = imageBox.title;

        //listItem.appendChild(newLine);
        link.appendChild(picture);
        listItem.appendChild(title);
        listItem.appendChild(link);

        listItem.addEventListener('click', onClick, false);
        listItem.addEventListener('mouseover', onHover, false);
        listItem.addEventListener('mouseout', onMouseOut, false);

        return listItem;
    }
}