$(document).ready(function () {
	let amenit = {};

	$('INPUT[type=checkbox]').click(function () {

		if ($(this).is(':checked')) {
			amenit[$(this).data('data-id')] = $(this).data('data-name');
			$('.amenities h4').text(Object.values(amenit).join(', '));
		} else if ($(this).not(':checked')) {
			delete amenit[$(this).data('data-id')];
			$('.amenities h4').text(Object.values(amenit).join(', '));
			if (Object.getOwnPropertyNames(amenit).length === 0)
				$('.amenities h4').html("&nbsp;");
		}
	});
});