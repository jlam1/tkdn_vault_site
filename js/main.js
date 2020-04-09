$(document).ready(function () {
	console.log("Document Ready");

	/* NAVBAR ON SCROLL */
	var scroll, main;
	$(window).on('load scroll', function () {
		scroll = $(window).scrollTop();
		main = $("main").offset().top;

		if (scroll > main) {
			$("header").addClass("on-scroll");
		} else {
			$("header").removeClass("on-scroll");
		}
	});

	$("nav.navbar li.nav-item").click(function() {
		$(this).addClass('selected');
	});

	$("nav.navbar li.nav-item").mouseout(function() {
		$(this).removeClass('selected');
	});

	$('.banner-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		margin: 0,
		autoplayHoverPause: true,
		dots: true,
		nav: false,
		responsive: {
			0: {
				items: 1
			}
		}
	});

	$('.items-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		margin: 50,
		autoplayHoverPause: true,
		nav: true,
		navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
		dots: false,
		items: 1,
		responsive: {
			567: {
				items: 1,
				stagePadding: 0,
			},
			728: {
				items: 2,
				stagePadding: 100,
			},
			992: {
				items: 2,
				stagePadding: 200,
			},
			1200: {
				items: 2,
				stagePadding: 200,
			},
		}
	});

	$('.grid').isotope({
		layoutMode: 'packery',
		itemSelector: '.grid-item'
	});


});