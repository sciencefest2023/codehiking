(function($) {
    'use strict';
    jQuery(function() {
        jQuery('#defaultCountdown').countdown({
            until: new Date(2022, 12 - 1, 1, 8)
        }); // year, month, date, hour
    });
})(jQuery);