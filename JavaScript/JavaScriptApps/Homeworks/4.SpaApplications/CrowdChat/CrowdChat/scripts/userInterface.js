define(function () {
    'use strict';
    var userInterface = (function () {
        var div = document.createElement('div'),
            span = document.createElement('span'),
            strong = document.createElement('strong');
        div.className = 'msgln';
        div.appendChild(strong);
        div.appendChild(span);

        function buildMessage(postBy, postText) {
            if (postText.length > 70) {
                postText = postText.substr(0, 70) + '...';
            }

            strong.innerHTML = postBy + ": ";
            span.innerHTML = postText;
            return div.cloneNode(true);
        }

        function buildChatBox(data, skipMessagesCount) {
            var docFragment = document.createDocumentFragment(),
                postHtml,
                postText,
                postBy,
                post,
                i;

            for (i = data.length - 1; i > Math.max(data.length - skipMessagesCount, 0); i--) {
                post = data[i],
                postBy = post.by.trim(),
                postText = post.text.trim();

                if (!postBy || !postText) {
                    continue;
                }

                postHtml = buildMessage(postBy, postText);
                docFragment.appendChild(postHtml);
            }

            return docFragment;
        }

        return {
            buildMessage: buildMessage,
            buildChatBox: buildChatBox
        };
    }());

    return userInterface;
});