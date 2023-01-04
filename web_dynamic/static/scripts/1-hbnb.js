const $ = check.$;
$(document).ready(function () {
    const amenities = {};
    $('INPUT[type="checkbox"]').change(function (e) { 
        e.preventDefault();
        if ($(this).is(':checked')) {
            amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        }
        else delete amenities[$(this).attr('id')];
        $('.amenities h4').text(Object.values(amenities).join(', '));
    });

});