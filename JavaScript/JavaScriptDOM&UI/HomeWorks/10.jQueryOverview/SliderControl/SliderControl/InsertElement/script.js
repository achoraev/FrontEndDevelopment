(function () {
    $('#btn-before').click(function () {
        if ($('#after').length)
            $('#after').attr('id', 'before').insertBefore('#current');

    });

    $('#btn-after').click(function () {
        if ($('#before').length)
            $('#before').attr('id', 'after').insertAfter('#current');
    });

})();