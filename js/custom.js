// Sticky Js
$(window).scroll(function(){
	var scrolling = $(this).scrollTop();

	if(scrolling > 200){
		$('.navbar').addClass('bg');
	}

	else{
		$('.navbar').removeClass('bg');
	}
});
// Sticky Js

// TYPED JS
$(function(){
	$(".typed").typed({
		strings: ["Jumana Bint Rahman", "a Web Designer", "a Web Developer"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
// TYPED JS

// SLICK SLIDER
$('.slick-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

	responsive: [
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
	  ]
});
// SLICK SLIDER

// MIXITUP JS
$(document).ready(function(){
	var mixer = mixitup('.box-list');
});
// MIXITUP JS

// venobox
new VenoBox({
    selector: '.venobox',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
// venobox

// WOW JS
var wow = new WOW(
	{
	  boxClass:     'wow',      // animated element css class (default is wow)
	  animateClass: 'animated', // animation css class (default is animated)
	  offset:       0,          // distance to the element when triggering the animation (default is 0)
	  mobile:       true,       // trigger animations on mobile devices (default is true)
	  live:         true,       // act on asynchronously loaded content (default is true)
	  callback:     function(box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
	  },
	  scrollContainer: null,    // optional scroll container selector, otherwise use window,
	  resetAnimation: true,     // reset animation on end (default is true)
	}
  );
  wow.init();
// WOW JS

// BACK-TO-TOP JS
$(window).on('scroll', function(event){
	if($(this).scrollTop() > 600){
	  $('.back-to-top').slideDown(200)
	}
	else{
	  $('.back-to-top').slideUp(200)
	}
  });
  
  // ANIMATE SCROLL TO TOP
  $('.back-to-top').on('click', function(event){
	event.preventDefault();
  
	$('html, body').animate({
	  scrollTop: 0,
	}, 1000);
  });
  // BACK-TO-TOP JS