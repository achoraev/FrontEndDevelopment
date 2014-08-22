$.fn.dropdown = function () {
	var $dropdown = this;
	var $option = $('option');
	$dropdown.hide();
	$('<div>').appendTo('body').addClass('dropdown-list-container');
	$('<ul>').appendTo('div').addClass('dropdown-list-options');
	for (var i = 0; i < $option.length; i++) {
		var $dropdownOptions = $option[i].text;
		$('<li>').appendTo('ul').addClass('dropdown-list-option').append($dropdownOptions).attr('data-value', i);	
	};	
}