$(function () {
    const amenities = {};
    $('input[type="checkbox"]').change(function () {
        if ($(this).prop('checked')) {
            amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        }
        else delete amenities[$(this).attr('data-id')];
        $('.amenities h4').html(Object.values(amenities).join(', '));
    });
    const url = 'http://0.0.0.0:5001/api/v1/status/'
    $.get(url, function (data) {
        if (data.status === 'OK') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    });
});

$(document).ready(function () {
    let diction = {};
    $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        data: JSON.stringify(diction),
        success: function (result) {
            for (let arti in result) {
                let place = [
                    '<article>',
                    '<div class="title_box">',
                    '<h2>' + result[arti].name + '</h2>',
                    '<div class="price_by_night">' + '$' + result[arti].price_by_night + '</div>',
                    '</div>',
                    '<div class="information">',
                    '<div class="max_guest">' + result[arti].max_guest + ' Guests' + '</div>',
                    '<div class="number_rooms">' + result[arti].number_rooms + ' Bedrooms' + '</div>',
                    '<div class="number_bathrooms">' + result[arti].number_bathrooms + ' Bathrooms' + '</div>',
                    '</div>',
                    '<div class="description">',
                    result[arti].description,
                    '</div>',
                    '</article>'
                ];
                $(place.join('')).appendTo('section.places');
            }
        },
        dataType: 'json',
        contentType: 'application/json'
    });
}); 