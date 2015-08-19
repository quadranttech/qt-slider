
function QTSlider(){

    /* settings variables */
    var sliderWidth = window.innerWidth;
    var sliderHeight = 400;
    var qtAnimationSpeed = 1000;
    var pause = 3000;
    var animationType = "SLIDE-LEFT";

    // internal var
    var currentSlide = 1;
    var interval;
    var noOfSlide;
    var list_of_animation_possible=["SLIDE-LEFT" , "SLIDE-RIGHT" , "SLIDE-DOWN" , "SLIDE-TOP" , "FADE-OUT" , "FADE-IN" ,"ZOOM-IN" , "ZOOM-OUT"];

    //cache DOM elements
    var qtSlider,qtSlideContainer,qtSlides;

    /* to apply custom settings */
    this.init = function( slider_width , slider_height , animation_speed , pause_time , animation_type ){
        if(undefined != slider_width){      sliderWidth = slider_width;         }
        if(undefined != slider_height){     sliderHeight = slider_height;       }
        if(undefined != animation_speed){   qtAnimationSpeed = animation_speed;   }
        if(undefined != pause_time){        pause = pause_time;                 }
        if(undefined != animation_type && $.inArray( animation_type , list_of_animation_possible ) ){    animationType = animation_type;     }

    }

    /*public function*/
    this.slide = function() {

        //cache DOM elements
        $qtSlider = $('#qtSlider');
        $qtSlideContainer = $('.slides', $qtSlider);
        $qtSlides = $('.slide', $qtSlider);
        $qtSlideContainer.on('mouseenter', pauseSlide).on('mouseleave', startSlide);

        noOfSlide = $qtSlides.length;
        var firstSlide = $qtSlides[0];
        var secondSlide = $qtSlides[1];
        var lastSlide = $qtSlides[noOfSlide-1];
        
        $(firstSlide).addClass('activeSlide');
        $(secondSlide).addClass('nextSlide');
        $(lastSlide).addClass('prevSlide');

        setElementStyle();

        /*show first slide*/
        $qtSlider.find('.slide').hide();
        $(firstSlide).show();
        startSlide();
    } 

    function setElementStyle(){
        
        $qtSlider.css('width',sliderWidth+'px');
        $qtSlider.css('height',sliderHeight+'px');
        $qtSlider.css('overflow','hidden');

        $qtSlideContainer.css('position','relative');
        $qtSlideContainer.css('padding','0');

        $qtSlides.css('display','inline-block');
        $qtSlides.css('position','absolute');
        $qtSlides.css('top','0');
        $qtSlides.css('left','0');

        $qtSlides.find('img').css('display','inline');
        $qtSlides.find('img').css('width',sliderWidth+'px');
        $qtSlides.find('img').css('height',sliderHeight+'px');

        $('html').css("margin",'0');
        $('html').css("padding",'0');
        $('body').css("margin",'0');
        $('body').css("padding",'0');

    }

    var startSlide = function(){
        interval = setInterval( animation, pause , animationType );
    }

    var pauseSlide = function(){
        clearInterval(interval);
    }

    var animation = function( anim_type ){
        
        switch(anim_type){
            case 'SLIDE-LEFT':
                                slide_left();
                                break;
            case 'SLIDE-RIGHT':
                                slide_right();
                                break;
            case 'SLIDE-DOWN':
                                slide_down();
                                break;
            case 'SLIDE-TOP':
                                slide_up();
                                break;
            case 'FADE-OUT':

                                break;
            case 'FADE-IN':

                                break;
            case 'ZOOM-IN':

                                break;
            case 'ZOOM-OUT':

                                break;
            default:

                                
               
        }
    }

    var slide_left = function(){
        console.log('@ SLIDE-LEFT ');
        updateSlidersForward();
        $qtSlider.find('.activeSlide').show();
        $qtSlider.find('.activeSlide').css('left', sliderWidth+'px');

        

        $qtSlider.find('.activeSlide').animate({
                                            'left': '0px'
                                        },
                                        qtAnimationSpeed,
                                        function(){
                                        });

        $qtSlider.find('.prevSlide').animate({
                                            'left': '-'+sliderWidth+'px'
                                        },
                                        qtAnimationSpeed,
                                        function(){
                                            $(this).hide();
                                        });

    }

    var slide_right = function(){
        console.log('@ SLIDE-RIGHT ');
        
        updateSlidersForward();
        $qtSlider.find('.activeSlide').show();
        $qtSlider.find('.activeSlide').css('left', '-'+sliderWidth+'px');

        

        $qtSlider.find('.activeSlide').animate({
                                            'left': '0px'
                                        },
                                        qtAnimationSpeed,
                                        function(){
                                        });

        $qtSlider.find('.prevSlide').animate({
                                            'left': sliderWidth+'px'
                                        },
                                        qtAnimationSpeed,
                                        function(){
                                            $(this).hide();
                                        });

    }

    var slide_down = function(){
        console.log('@ SLIDE-DOWN ');
    }

    var slide_up = function(){
        console.log('@ SLIDE-UP ');
    }


    function updateSlidersForward(){
        var currSlide = $qtSlider.find('li.activeSlide');
        var nextSlide = $qtSlider.find('li.nextSlide');
        var prevSlide = $qtSlider.find('li.prevSlide');

        $(currSlide).removeClass('activeSlide');
        $(nextSlide).removeClass('nextSlide');
        $(prevSlide).removeClass('prevSlide');

        prevSlide = currSlide;
        currSlide =  nextSlide;
        nextSlide = $(nextSlide).next();
        console.log( nextSlide );
        if( 0 == nextSlide.length ){
            nextSlide = $qtSlides[0];
        }

        $(currSlide).addClass('activeSlide');
        $(nextSlide).addClass('nextSlide');
        $(prevSlide).addClass('prevSlide');

    }

    function updateSlidersBackward(){
        var currSlide = $qtSlider.find('li.activeSlide');
        var nextSlide = $qtSlider.find('li.nextSlide');
        var prevSlide = $qtSlider.find('li.prevSlide');

        $(currSlide).removeClass('activeSlide');
        $(nextSlide).removeClass('nextSlide');
        $(prevSlide).removeClass('prevSlide');

        nextSlide = currSlide;
        currSlide =  prevSlide;
        prevSlide = $(prevSlide).prev();
        if( 0 == prevSlide.length ){
            prevSlide = $qtSlides[ $qtSlides.length-1 ];
        }

        $(currSlide).addClass('activeSlide');
        $(nextSlide).addClass('nextSlide');
        $(prevSlide).addClass('prevSlide');

    }

}