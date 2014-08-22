$.fn.tabs = function () {
    var $this = this;
    $this.addClass('tabs-container');
    $this.find('.tab-item-content').hide();
    $this.on('click', '.tab-item-title', function (ev) {        
        var $current = $(this);
        $this.find('.tab-item-content').hide();
        $this.find('.tab-item').removeClass('current');
        $current.next().show();
        $current.parent().addClass('current');
    })
};