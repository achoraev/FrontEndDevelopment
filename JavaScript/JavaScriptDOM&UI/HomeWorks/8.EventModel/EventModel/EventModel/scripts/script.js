window.onload = function todoList() {
    var input = document.getElementsByTagName('input')[0],
        addButton = document.getElementById('add-button'),
        hideButton = document.getElementById('hide-button'),
        container = document.getElementById('noteField');

    addButton.addEventListener('click', function (ev) {
        if (input.value.length !== 0) {
            var newLiElement = document.createElement('li');
            var buttonClose = document.createElement('a');
            buttonClose.className = 'buttonClose';
            buttonClose.addEventListener('click', function (ev) {
                var parent = this.parentNode;
                parent.parentNode.removeChild(parent);
                return false;
            });
            newLiElement.innerHTML = input.value;
            newLiElement.appendChild(buttonClose);

            newLiElement.addEventListener('click', function (ev) {
                ev.stopPropagation();
                this.className = 'completed';
            });

            container.appendChild(newLiElement);
            input.value = '';
        }
    });

    hideButton.addEventListener('click', function (ev) {
        if (hideButton.innerHTML === 'Hide') {
            container.setAttribute('id', 'hidden-notefield');
            hideButton.innerHTML = 'Show';
        } else {
            container.setAttribute('id', 'notefield');
            hideButton.innerHTML = 'Hide';
        }
    });
};