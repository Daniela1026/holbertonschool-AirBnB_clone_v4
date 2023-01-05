$(document).ready(function () {
    const amenities = {};
    $('input[type="checkbox"]').change(function () {
        if ($(this).prop('checked')) {
            amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        }
        else delete amenities[$(this).attr('data-id')];
        $('.amenities h4').html(Object.values(amenities).join(', '));
    });
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
        $('div#api_status').removeClass('available');
        $('div#api_status').css({ 'background-color':'#cccccc' })
    }
  });
});
