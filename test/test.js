$('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'inline',
});

$('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
    // mainClass: 'mfp-fade'
});