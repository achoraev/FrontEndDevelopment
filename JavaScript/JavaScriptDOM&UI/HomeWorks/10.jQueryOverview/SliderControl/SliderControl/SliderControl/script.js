(function () {
    var $sliderNavBar = $('.slider-nav');
    $sliderNavBar.show();
    $('.slider').css('overflow', 'hidden');

    var slider = new Slider('.slider', '.slider-nav');

    var slideshowIsOn = false;
    var slideshowIntervalId;
    var $slideshowButton = $('button[data-id=slideshow]');
    var slideShowOnText = 'Slideshow (ON)';
    var slideShowOffText = 'Slideshow (OFF)';
    var slideshowInterval = 5000;

    $sliderNavBar.on('click', '.slider-nav-button', function () {
        var clickedButtId = $(this).attr('data-id');

        if (clickedButtId !== 'slideshow') {
            slider.transition(clickedButtId);
        } else {
            toggleSlideshow();
        }
    });

    function toggleSlideshow() {
        slideshowIsOn = !slideshowIsOn;

        if (slideshowIsOn) {
            $slideshowButton.text(slideShowOnText);
            slideshowIntervalId = setInterval(function () {
                slider.transition('next');
            }, slideshowInterval);
        } else {
            $slideshowButton.text(slideShowOffText);
            clearInterval(slideshowIntervalId);
        }
    }
})()

function Slider(selector, nav) {
    var $slider = $(selector);
    this.$nav = $(nav);
    this.$container = $slider.find('.slides-container');
    this.$slides = $slider.find('.slide');
    this.slidesCount = this.$slides.length;
    this.slideWidth = this.$slides.first().width();
    this.currSlide = 0;
}

Slider.prototype.changeSlide = function (direction) {
    (direction === 'prev') ?
        this.currSlide-- :
            this.currSlide = ++this.currSlide % this.slidesCount;

    if (this.currSlide < 0) {
        this.currSlide = this.slidesCount - 1;
    }
}

Slider.prototype.animateChange = function () {
    this.$container.animate({
        'margin-left': -this.currSlide * this.slideWidth
    });
}

Slider.prototype.transition = function (direction) {
    this.changeSlide(direction);
    this.animateChange();
}