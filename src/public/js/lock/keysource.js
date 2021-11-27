jQuery(document).ready(function() {
    jQuery('body').bind('cut copy paste', function(e) {
        e.preventDefault();
    });
    jQuery("body").on("contextmenu", function(e) {
        return false;
    });
});
jQuery(document).keydown(function(event) {
    if (event.keyCode == 123) {
        return false;
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
        return false;
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        return false;
    }
});
document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
};
jQuery(document).keypress("u", function(e) {
    if (e.ctrlKey) {
        return false;
    } else {
        return true;
    }
});
document.body.addEventListener('keydown', event => {
    if (event.ctrlKey && 'spa'.indexOf(event.key) !== -1) {
        event.preventDefault()
    }
})