window.onload = function() {
	var div = document.getElementById("square");

	div.addEventListener("click", function(){
		const curColour = document.getElementById("square").
			style.backgroundColor;

		document.getElementById("square").style.backgroundColor
			= curColour === 'blue' ? 'red' : 'blue';
	});
}
