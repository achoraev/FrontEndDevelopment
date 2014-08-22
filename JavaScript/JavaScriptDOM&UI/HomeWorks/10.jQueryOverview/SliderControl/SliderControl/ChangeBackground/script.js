var $container = $('#container');
$('<input>').attr('type', 'color').appendTo($container).on('change', function () {
    $('body').css('background-color', this.value);
});