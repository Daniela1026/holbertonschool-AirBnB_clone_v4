$(function () {
    const amenities = {};
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
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
