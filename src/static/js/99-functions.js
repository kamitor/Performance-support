// function cycleImages(){
//   var $active = $('.background_cycler .active');
//   var $next = ($('.background_cycler .active').next().length > 0) ? $('.background_cycler .active').next() : $('.background_cycler div:first');
// 	  $next.css('z-index',2);//move the next image up the pile
// 	  $active.fadeOut(1500,function(){//fade out the top image
// 	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
// 	  $next.css('z-index',3).addClass('active');//make the next image the top one
//   });
// }

// $(window).load(function(){
// $('.background_cycler').fadeIn(1500);
// setInterval('cycleImages()', 2000);
// })

$(function(){
	$(".typed").typed({
		strings: ["^1000Hello^1000","I am A Dutch based UI/UX Designer.", "I design clean and minimal interfaces","for web and mobile products.", "I code HTML, CSS and JavaScript.^1000","I love coffee and baseball.","I am A Dutch based UI/UX Designer."],
		contentType: 'html', // or 'html'
		typeSpeed: 30,
		// time before typing starts
		startDelay: 500,
		// backspacing speed
		backSpeed: 0,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: false,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|"
	});
});

$(document).ready(function() {

	var p = $( "#bigblock" );
	$(".bigblockillu").css("height", p.outerHeight() ); 


	$( window ).resize(function() {
		$(".bigblockillu").css("height", p.outerHeight() );
	});

	

	
	// LOADER
	// setTimeout(function(){
	// 	$('body').addClass('loaded');
	// }, 5000);

	// MENU open close button

	$(".menu-btn").click(function() {  //use a class, since your ID gets mangled
		$(this).toggleClass("is-active");      //add the class to the clicked element
		$(".navigation").toggleClass("navigation-active");
		$(".body").toggleClass("body-menu-active");
	});

	// Scroll down
	$(".learn-more-arrow").click(function() 
	{
		$('html, body').animate(
			{scrollTop: $(".about").offset().top},
			{
				duration: 1000, // how fast we are animating
				easing: 'easeInOutCubic' // the type of easing
			}
			);
	}); 

	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoPlay : false,
		paginationSpeed: 800,
		navigation : false,
		items : 1,
		itemsDesktop : [1200,1],
		itemsDesktopSmall : [980,1],
		itemsTablet : [800,1],
		itemsMobile : [300,1]
	})
});


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
		scrollContainer: null // optional scroll container selector, otherwise use window
	}
	);
wow.init();
