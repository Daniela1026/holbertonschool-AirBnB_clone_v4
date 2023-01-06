let amenities = {};
$(function () {
    $('input[type="checkbox"]').change(function () {
        if ($(this).prop('checked')) {
            amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        }
        else delete amenities[$(this).attr('data-id')];
        $('.amenities h4').html(Object.values(amenities).join(', '));
    });
    const url = 'http://localhost:5001/api/v1/status/'
    $.get(url, function (data) {
        if (data.status === 'OK') {
            $('div#api_status').addClass('available');
        } else {
            $('div#api_status').removeClass('available');
        }
    });

    let diction = {};
    $.ajax({
        type: 'POST',
        url: 'http://localhost:5001/api/v1/places_search/',
        data: JSON.stringify(diction),
        success: Placedata,
        dataType: 'json',
        contentType: 'application/json'
    });

    $('button').click(function () { 
        $('.places').empty();
        $.ajax({
            method: 'POST',
            contentType: "application/json",
            url: "http://localhost:5001/api/v1/places_search/",
            data: JSON.stringify({'amenities' : Object.keys(amenities)}),
            dataType: "json",
            success: Placedata
        });
        
    });

    function Placedata (result) {
            for (let arti of result) {
                let place = [
                    '<article>',
                    '<div class="title_box">',
                    '<h2>' + arti.name + '</h2>',
                    '<div class="price_by_night">' + '$' + arti.price_by_night + '</div>',
                    '</div>',
                    '<div class="information">',
                    '<div class="max_guest">' + arti.max_guest + ' Guests' + '</div>',
                    '<div class="number_rooms">' + arti.number_rooms + ' Bedrooms' + '</div>',
                    '<div class="number_bathrooms">' + arti.number_bathrooms + ' Bathrooms' + '</div>',
                    '</div>',
                    '<div class="description">',
                   arti.description,
                    '</div>',
                    '</article>'
                ];
                $(place.join('')).appendTo('section.places');
            }
    }
});
