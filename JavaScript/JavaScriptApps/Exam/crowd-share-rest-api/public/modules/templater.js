define(["jquery", "handlebars"], function ($) {
    return $.fn.loadTemplate = function (data) {
        var $this = $(this);

        var templateID = $this.attr('data-template');

        var tepmplateCode = $("#" + templateID);
        var templateHtml = tepmplateCode.html();
        var compiledTemplate = Handlebars.compile(templateHtml);

        for (var i = 0, len = data.length; i < len; i++) {
            $this.append(compiledTemplate(data[i]));
        }

        return $this;
    }
});