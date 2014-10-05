/*globals jQuery, window, document */
(function ($, window, document) {
    "use strict";
    window.CHANGE_ME = window.CHANGE_ME || {
        $body: null,
        init: function () {
            this.$body = $('body');
            this.liveReload();
            this.jsClock();
        },
        rotate: function (degree, elem) {
            elem.css({
                        '-webkit-transform': 'rotate(' + degree + 'deg)',
                        '-moz-transform': 'rotate(' + degree + 'deg)',
                        '-ms-transform': 'rotate(' + degree + 'deg)',
                        '-o-transform': 'rotate(' + degree + 'deg)',
                        'transform': 'rotate(' + degree + 'deg)',
                        // 'zoom': 1
            });
        },
        jsClock: function () {
            var that = this,
                clockHandler = $('.jsClock');
            clockHandler.html("");
            clockHandler.prepend("<div class='clockNumbers'></div>");
            clockHandler.append("<div class='clockPointer seconds'></div>");
            clockHandler.append("<div class='clockPointer minutes'></div>");
            clockHandler.append("<div class='clockPointer hours'></div>");
            var clockNumbers = $('.clockNumbers'),
                clockPointer = $('.clockPointer');
            for (var i = 1; i <= 12; i++) {
                var clockNumber = "<p class='clockNumber clockNumber" + i + "'>" + i + "</p>";
                clockNumbers.append(clockNumber);
            }
            var rot = 0;
            var d = new Date();
            that.rotate((d.getSeconds() * 6), $('.seconds'));
            that.rotate(((d.getMinutes() + (d.getSeconds()/60)) * 6), $('.minutes'));
            that.rotate(((d.getHours() + (d.getMinutes()/60)) * 30), $('.hours'));
            var myVar = setInterval(function(){
                var d = new Date();
                that.rotate((d.getSeconds() * 6), $('.seconds'));
                that.rotate(((d.getMinutes() + (d.getSeconds()/60)) * 6), $('.minutes'));
                that.rotate(((d.getHours() + (d.getMinutes()/60)) * 30), $('.hours'));
            }, 100);
        },
        liveReload: function () {
            if (window.location.hostname === 'localhost') {
                this.$body.append('<script src="//localhost:9000/livereload.js"></script>');
            }
        }
    };
    $(document).on('ready', function () {
        window.CHANGE_ME.init();
    });
}(jQuery, window, document));
