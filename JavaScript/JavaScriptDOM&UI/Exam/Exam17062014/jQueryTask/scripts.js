$.fn.gallery = function (cols) {
    var $galleryContainer = this;
    var $cols = cols;
    var imageCount = $galleryContainer.find('.image-container').length;
    var currentIndex = 1;

    $galleryContainer.addClass('gallery', 'clearfix');
    $galleryContainer.find('.selected').hide();

    var containerWidth = $galleryContainer.find('.image-container').outerWidth(true) + 1;
    $galleryContainer.width(containerWidth * ($cols || 4));

    $('.image-container').on('click', function () {
        var $clickedImage = $(this);
        
        var indexNext = currentIndex % imageCount + 1;
        var indexPrev = (currentIndex - 2 + imageCount) % (imageCount) + 1;
        var nextPicture = $galleryContainer.find("img[data-info='" + indexNext + "']").attr('src');
        var currentPicture = $clickedImage.attr('src');
        var prevPicture = $galleryContainer.find("img[data-info='" + indexPrev + "']").attr('src');

        $galleryContainer.find('.selected').show();
        $galleryContainer.find('.gallery-list').toggleClass('blurred');

        $clickedImage = this;

        $galleryContainer.find('#current-image').on('click', function () {
            var $clickCurrentImage = $(this);
            $galleryContainer.find('.selected').hide();
            $galleryContainer.find('.blurred').removeClass('blurred');
            $clickCurrentImage = this;
        })
    });
}