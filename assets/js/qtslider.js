
function QTSlider(){

    var sliderWidth = 720;
    var sliderHeight = 400;
    var animationSpeed = 1000;
    var pause = 3000;
    var animationType = "slide-left";

    // internal var
    var currentSlide = 1;
    var interval;
    var noOfSlide;
    //cache DOM elements
    var slider,slideContainer,slides;

    /* to apply custom settings */
    this.init = function( slider_width , slider_height , animation_speed , pause_time , animation_type ){
        if(undefined != slider_width){      sliderWidth = slider_width;         }
        if(undefined != slider_height){     sliderHeight = slider_height;       }
        if(undefined != animation_speed){   animationSpeed = animation_speed;   }
        if(undefined != pause_time){        pause = pause_time;                 }
        if(undefined != animation_type){    animationType = animation_type;     }

    }

    /*public function*/
    this.slide = function() {

        //cache DOM elements
        $slider = $('#slider');
        $slideContainer = $('.slides', $slider);
        $slides = $('.slide', $slider);
        $slideContainer.on('mouseenter', pauseSlide).on('mouseleave', startSlide);

        var firstSlide = $slides[0];
        $(firstSlide).clone().appendTo( $slideContainer );
        
        $slides = $('.slide', $slider);
        noOfSlide = $slides.length;

        /* add css */
        var css_str = '<style>#slider{width:'+sliderWidth+'px;height:'+sliderHeight+'px;overflow: hidden;} #slider .slides {display:block;width: '+(noOfSlide+1)*sliderWidth+'px;height:'+sliderHeight+'px;margin: 0;padding: 0;} #slider .slide ,#slider .slide img{float: left;list-style-type: none;width:'+sliderWidth+'px;height:'+sliderHeight+'px;}</style>';

        $('head').append(css_str);

        startSlide();
    }   


    var startSlide = function(){
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+sliderWidth}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);

    }

    var pauseSlide = function(){
        clearInterval(interval);
    }

}