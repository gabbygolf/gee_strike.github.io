//This is to set the maximum value of both grid height and width to 25 and minimum  value to 0.
$(function() {
	$('input').keydown(function(){
		$(this).data('old',$(this).val());
	});
	$('input').keyup(function(){
		if (parseInt($(this).val())<=40 && parseInt($(this).val())>=0);
		else 
		$(this).val($(this).data('old'));
	});
});

//To submit the value of grid height and width.
$('#sizePicker').submit(function makeGrid() {
//To do this, the previous value have to be deleted or removed. Clears previously created grid as a new value is entered.
	$('table tr').remove();
//Value of the inputs are retained.
	var rows= $('#inputHeight').val();		//height is number of rows.
	var cells= $('#inputWidth').val();		//width is number of columns.
//To create the grid.
	for(var x=1; x<=rows; x++){
		$('table').append('<tr></tr>');
		for(var y=1; y<=cells; y++){
			$('tr:last').append('<td></td>');		//NB: The table cells are created until the last table row is created.
			$('td').attr('class','boxes');
		}
	}
	event.preventDefault();		//Avoid the page being refreshed after the submit button is clicked.
});

//This is to select and apply for color in the cells.
$('#pixelCanvas').on('click', '.boxes',function(){
	var pen= $('#colorPicker').val();
	$(this).css('background-color', pen);		//The value of the color picked is what reflects in the background of the cells.
});

//To toggle grid after completion of pixel art. See how lovely your pixel art is without cell lines before snipping.
$('#flipButt').click('.pixelCanvas', function(){
	$('td').toggleClass('flipGrid');
});