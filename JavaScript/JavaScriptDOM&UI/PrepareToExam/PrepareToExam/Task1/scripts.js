function createCalendar(selector, events) {
    var container = document.querySelector(selector);
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (var i = 1; i <= 30; i++) {
        var box = document.createElement('div');
        var title = document.createElement('strong');
        var boxContent = document.createElement('div');
        var selectedBox = null;

        //styles
        title.style.display = 'block';
        title.style.background = 'red';
        title.style.borderBottom = '1px solid black';
        title.style.textAlign = 'center';
        box.style.width = 180 + 'px';
        box.style.height = 180 + 'px';
        box.style.border = '1px solid black';
        box.style.display = 'inline-block';

        var day = days[(i - 1) % 7];
        title.innerHTML = day + ' ' + i + ' June 2014';
        boxContent.innerHTML = '&nbsp;'
        addEvent(i, events);
        box.appendChild(title);
        box.appendChild(boxContent);
        box.addEventListener('click', onMouseClick, false);
        box.addEventListener('mouseover', onMouseover, false);
        box.addEventListener('mouseout', onMouseout, false);
        container.appendChild(box);

    }

    function onMouseClick(ev) {
        if (selectedBox) {
            selectedBox.style.background = '';
        }
        this.style.background = 'green';
        selectedBox = this;
    };

    function onMouseover(ev) {
        if (selectedBox) {
            selectedBox.style.background = '';
        }
        this.style.background = 'blue';
        selectedBox = this;
    };

    function onMouseout(ev) {
        if (selectedBox) {
            selectedBox.style.background = '';
        }
        this.style.background = 'yellow';
        selectedBox = this;
    };

    function addEvent(day, events) {
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (parseInt(event.date) === day) {
                boxContent.innerHTML = event.hour + ' ' + event.title;
            }
        }
    };
};