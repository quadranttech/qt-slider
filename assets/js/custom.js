$(function() {
    var slider_obj = new QTSlider();
    /*init( slider_width , slider_height , animation_speed , pause_time , animation_type )*/
    // slider_obj.init(1200 , 700 , 1000, 3000,"SLIDE-LEFT" ); /*custom width */
    slider_obj.init(null , 500 , 1000, 3000,"SLIDE-LEFT" ); /* full width */
    // slider_obj.init(null , 700 , 1000, 3000,"SLIDE-RIGHT" ); /* full width , SLIDE-RIGHT */
    slider_obj.slide();
});
