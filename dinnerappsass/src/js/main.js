/*globals jQuery, window, document */
(function ($, window, document) {
    "use strict";
    window.CHANGE_ME = window.CHANGE_ME || {
        $body: null,
        $window: null,
        init: function () {
            this.$body = $('body');
            this.$window = $(window);
            this.testFunction();
            this.matchHeights();
        },
        matchHeights: function () {
            var that = this;
            setTimeout(function () {
                that.$window.on('resize', function () {
                    var heights = [];
                    var max = 0;
                    $('.panel-body .col-sm-3').each(function () {
                        $(this).css({
                            height: ''
                        });
                        heights.push($(this).outerHeight());
                    });
                    max = Math.max.apply(Math,heights);
                    $('.panel-body .col-sm-3').each(function () {
                        $(this).css({
                            height: max
                        });
                    });
                }).trigger('resize');
            },100);
        },
        testFunction: function () {
        }
    };
    $(document).on('ready', function () {
        window.CHANGE_ME.init();
    });
}(jQuery, window, document));
