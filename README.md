# qt-slider
JQuery slider with different animation 


Steps: 
_____
Step 1: Include jquery before including this lib ( qtslider.js )

Step 2: Include this library ( qtslider.js )

Step 3: create an object and call slide() method of that object.

		$(function() {

		    var slider_obj = new QTSlider();

		    slider_obj.slide();

		});

You can customize your slider like width , height , animation speed , pause time etc.
	
		To customize you need to call init method before slide method;

		var slider_obj = new QTSlider();

		slider_obj.init( slider_width , slider_height , animation_speed , pause_time  );

		slider_obj.slide();


