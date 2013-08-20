$(function() {
	$('#lovecraft').click(function(e) {
		e.preventDefault();
		console.log('lovecraft has been invoked')
		lovecraft();
	})
})