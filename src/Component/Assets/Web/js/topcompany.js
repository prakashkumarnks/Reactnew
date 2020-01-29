(function($){
	"use strict";
	function is_touch_device() {
		return !!('ontouchstart' in window) || ( !! ('onmsgesturechange' in window) && !! window.navigator.maxTouchPoints);
	}
	function show_hide_mobile_menu() {
		$("#mobile-menu-button").on("click", function(e) {
			e.preventDefault();
			$("#mobile-menu").slideToggle(300);
        });	
	}
	function mobile_menu() {
		if ($(window).width() < 992) {
			if ($("#menu").length > 0) {
				if ($("#mobile-menu").length < 1) {
					$("#menu").clone().attr({
						id: "mobile-menu",
						class: ""
					}).insertAfter("#header");
					$("#mobile-menu .megamenu > a").on("click", function(e) {
						e.preventDefault();
						$(this).toggleClass("open").next("div").slideToggle(300);
                    });
					$("#mobile-menu .dropdown > a").on("click", function(e) {
						e.preventDefault();
						$(this).toggleClass("open").next("ul").slideToggle(300);
                    });
				}
			}
		} else {
			$("#mobile-menu").hide();
		}
	}
	
	function sticky() {
		var sticky_point = 190;
		$("#header").clone().attr({
			id: "header-sticky",
			class: ""
		}).insertAfter("header");
		$(window).scroll(function(){
			if ($(window).scrollTop() > sticky_point) {  
				$("#header-sticky").fadeIn(300).addClass("header-sticky");
				$("#header .menu ul, #header .menu .megamenu-container").css({"visibility": "hidden"});
			} else {
				$("#header-sticky").fadeOut(100).removeClass("header-sticky");
				$("#header .menu ul, #header .menu .megamenu-container").css({"visibility": "visible"});
			}
		});
	}
	
	function header_search() {	
		$(".search a").on("click", function(e) { 
			e.preventDefault();
			if(!$(".search a").hasClass("open")) {
				$("#search-form-container").addClass("open-search-form");
			} else {
				$("#search-form-container").removeClass("open-search-form");
			}
			
			$(window).resize(function(){
				$("#search-form-container").removeClass("open-search-form");
			})
		});
		
		$("#search-form").after('<a class="search-form-close" href="javascript:void(0)">x</a>');
		$("#search-form-container a.search-form-close").on("click", function(event){
			event.preventDefault();
			$("#search-form-container").removeClass("open-search-form");
		});
	 }
	 
	function progress_bars() {
		$(".progress .progress-bar:in-viewport").each(function() {
			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated");
				$(this).animate({
					width: $(this).attr("data-width") + "%"
				}, 2000);
			}
		});
	}

	function pie_chart() {
		if (typeof $.fn.easyPieChart !== 'undefined') {
			$(".pie-chart:in-viewport").each(function() {
				$(this).easyPieChart({
					animate: 1500,
					lineCap: "square",
					lineWidth: $(this).attr("data-line-width"),
					size: $(this).attr("data-size"),
					barColor: function(percent) {
						var gradient_start = "#74ccff";
						var gradient_stop = "#096ba3";
						var ctx = this.renderer.getCtx();
						var canvas = this.renderer.getCanvas();
						var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
							gradient.addColorStop(0, gradient_start);
							gradient.addColorStop(0.5, gradient_stop);
						return gradient;
					},
					trackColor: $(this).attr("data-track-color"),
					scaleColor: "transparent",
					onStep: function(from, to, percent) {
						$(this.el).find(".pie-chart-details .value").text(Math.round(percent));
					}
				});
			});
		}
	}
	
	function counter() {
		if (typeof $.fn.jQuerySimpleCounter !== 'undefined') {
			$(".counter .counter-value:in-viewport").each(function() {
				if (!$(this).hasClass("animated")) {
					$(this).addClass("animated");
					$(this).jQuerySimpleCounter({
						start: 0,
						end: $(this).attr("data-value"),
						duration: 2000
					});	
				}
			});
		}
	}
	
	function animate_charts() {
		$(".statistics-container .animate-chart:in-viewport").each(function() {
			if(!$(this).hasClass("animated")) {
				$(this).addClass("animated");
				var data = {
					labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
					datasets : [
						{
							fillColor: "transparent",
							strokeColor: "transparent",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [0,0,0,0,0,0,0,0,0,0,0,0]
						},
						{
							fillColor: "transparent",
							strokeColor: "transparent",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [60,60,60,60,60,60,60,60,60,60,60,60]
						},
						{
							fillColor: "transparent",
							strokeColor: "#74ccff",
							pointColor: "#fff",
							pointStrokeColor: "74ccff",
							data : [5,10,7,15,12,16,11,13,10,2,20,30]
						},
						{
							fillColor: "transparent",
							strokeColor: "#45bbff",
							pointColor: "#fff",
							pointStrokeColor: "#45bbff",
							data : [10,20,22,38,30,40,28,22,51,45,55,50]
						},
						{
							fillColor: "transparent",
							strokeColor: "#209fe8",
							pointColor: "#fff",
							pointStrokeColor: "#209fe8",
							data : [20,25,32,28,35,23,33,48,31,25,10,20]
						},
						{
							fillColor: "transparent",
							strokeColor: "#c7cd57",
							pointColor: "#fff",
							pointStrokeColor: "#c7cd57",
							data : [15,20,30,20,40,28,38,28,41,35,15,25]
						}
					]
				}
				
				if ($("#line-chart").length > 0) {
					var line_chart = new Chart(document.getElementById("line-chart").getContext("2d")).Line(data, { 
						responsive: true,
						showTooltips: false,
						bezierCurve: false,
						pointDotStrokeWidth: 2
					});
				}
				
				var data = {
					labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
					datasets : [
						{
							fillColor: "transparent",
							strokeColor: "transparent",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [0,0,0,0,0,0,0,0,0,0,0,0]
						},
						{
							fillColor: "transparent",
							strokeColor: "transparent",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [60,60,60,60,60,60,60,60,60,60,60,60]
						},
						{
							fillColor: "rgba(116, 204, 255, 0.8)",
							strokeColor: "rgba(116, 204, 255, 0.8)",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [10,20,22,38,30,40,28,22,51,45,55,50]
						},
						{
							fillColor: "rgba(69, 187, 255, 0.8)",
							strokeColor: "rgba(69, 187, 255, 0.8)",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [20,25,32,28,35,23,33,48,31,25,10,20]
						},
						{
							fillColor: "rgba(199, 205, 87, 0.8)",
							strokeColor: "rgba(199, 205, 87, 0.8)",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [15,20,30,20,40,28,38,28,41,35,15,25]
						},
						{
							fillColor: "rgba(32, 159, 232, 0.8)",
							strokeColor: "rgba(32, 159, 232, 0.8)",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [5,10,7,15,12,16,11,13,10,2,20,30]
						}
					]
				}
				
				if ($("#fill-line-chart").length > 0) {
					var fill_line_chart = new Chart(document.getElementById("fill-line-chart").getContext("2d")).Line(data, { 
						responsive: true,
						showTooltips: false,
						bezierCurve: false,
						pointDotStrokeWidth: 2
					});
				
				}
				
				var data = {
					labels: [""],
					datasets: [
						{
							label: "",
							fillColor: "transparent",
							strokeColor: "transparent",
							highlightFill: "transparent",
							highlightStroke: "transparent",
							data: [100]
						},
						{
							label: "",
							fillColor: "#74ccff",
							strokeColor: "#74ccff",
							highlightFill: "#74ccff",
							highlightStroke: "#74ccff",
							data: [50]
						},
						{
							label: "",
							fillColor: "#45bbff",
							strokeColor: "#45bbff",
							highlightFill: "#45bbff",
							highlightStroke: "#45bbff",
							data: [90]
						},
						{
							label: "",
							fillColor: "#209fe8",
							strokeColor: "#209fe8",
							highlightFill: "#209fe8",
							highlightStroke: "#209fe8",
							data: [70]
						},
						{
							label: "",
							fillColor: "#c7cd57",
							strokeColor: "#c7cd57",
							highlightFill: "#c7cd57",
							highlightStroke: "#c7cd57",
							data: [40]
						}
					]
				};
				
				if ($("#bar-chart").length > 0) {
					var bar_chart  = new Chart(document.getElementById("bar-chart").getContext("2d")).Bar(data, { 
						responsive: true,
						showTooltips: false,
						barShowStroke: true,
						barStrokeWidth: 0,
						barValueSpacing: 0,
						barDatasetSpacing: 50
					});
				}
				
				var data = [					
					{
						value: 15,
						color: "#74ccff",
						highlight: "#74ccff",
						label: "#74ccff"
					},			
					{
						value: 25,
						color: "#45bbff",
						highlight: "#45bbff",
						label: "#45bbff"
					},
					{
						value: 30,
						color: "#209fe8",
						highlight: "#209fe8",
						label: "#209fe8"
					},										
					{
						value: 30,
						color:"#c7cd57",
						highlight: "#c7cd57",
						label: "#c7cd57"
					}
				]
				
				if ($("#circle-chart").length > 0) {
					var circle_chart = new Chart(document.getElementById("circle-chart").getContext("2d")).Pie(data, { 
						responsive: true,
						showTooltips: false,
						animationSteps: 30
					});
				}	
			}
		});
	}
	
	function load_more_projects() {
		var number_clicks = 0;
		$(".load-more").on("click", function(e) {
			e.preventDefault();
			if (number_clicks == 0) {
				$.ajax({
					type: "POST",
					url: $(".load-more").attr("href"),
					dataType: "html",
					cache: false,
					msg : '',
					success: function(msg) {
						$(".isotope").append(msg);	
						$(".isotope").imagesLoaded(function() {
							$(".isotope").isotope("reloadItems").isotope();
							$(".portfolio-item").hoverdir();
							$(".fancybox").fancybox({
								prevEffect: 'none',
								nextEffect: 'none'
							});
						});
						number_clicks++;
						$(".load-more").html("Nothing to load");
					}
				});
			}
		});
	}
	
	function show_hide_scroll_top() {
		if ($(window).scrollTop() > $(window).height()/10) {
			$("#scroll-up").fadeIn(300);
		} else {
			$("#scroll-up").fadeOut(300);
		}
	}
	
	function scroll_up() {	
		$("#scroll-up").on("click", function() {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	}
	
	function clickable_div() {
		$(".service-box.style-5").on("click", function() {
			window.location = $(this).find("a").attr("href"); 
			return false;
		});
	}
	
	function instagram_feed() {
		if ($('#instafeed').length > 0 ) {
			var nr = $('#instafeed').data('number');
			var userid = $('#instafeed').data('user');
			var accesstoken = $('#instafeed').data('accesstoken');
			var feed = new Instafeed({
				target: 'instafeed',
				get: 'user',
				userId: userid,
				accessToken: accesstoken,
				limit: nr,
				resolution: 'thumbnail'			
			});
			feed.run();	
		}
	}
	
	function multilayer_parallax() {
		$(".parallax-multilayer .parallax-layer").each(function(){
			var x = parseInt($(this).attr("data-x"), 10),
				y = parseInt($(this).attr("data-y"), 10);
			$(this).css({
				"left": x + "%", 
				"top": y + "%"
			});
		});
	}
	
	function animations() {
		animations = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 100,
			mobile: false,
			live: true
		});
		animations.init();
	}
	
	$(document).ready(function(){
		sticky();
		if (typeof $.fn.superfish !== 'undefined') {
			$(".menu").superfish({
				delay: 500,
				animation: {
					opacity: 'show',
					height: 'show'
				},
				speed: 'fast',
				autoArrows: true
			});
		}
		show_hide_mobile_menu();
		mobile_menu();
		header_search();
		if (typeof $.fn.fancybox !== 'undefined') {
			$(".fancybox").fancybox({
				prevEffect: 'none',
				nextEffect: 'none'
			});
		}
		
		if (typeof $.fn.revolution !== 'undefined') {
			$(".rev_slider").revolution({
				sliderType: "standard",
				sliderLayout: "auto",
				delay: 9000,
				parallax:{
					type: "mouse",
					levels: [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
					origo: "enterpoint",
					speed: 400,
					bgparallax: "false",
					disable_onmobile: "off"
				},
				navigation: {
					arrows:{
						style: "default",
						enable: true,
						hide_onmobile: true,
						hide_onleave: false,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						tmp: '',
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 20,
							v_offset: 0,
						 },
						 right: {
							h_align: "right",
							v_align: "center",
							h_offset: 20,
							v_offset: 0
						 }
					},
					bullets:{
						style: "default",
						enable: false,
						hide_onmobile: false,
						hide_onleave: false,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						tmp: '', 
						direction: "horizontal",
						space: 5,       
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 40
					},
					touch:{
						touchenabled: "on",
						swipe_treshold: 75,
						swipe_min_touches: 1,
						drag_block_vertical: false,
						swipe_direction: "horizontal"
					}
				},			
				gridwidth: 1170,
				gridheight: 760		
			});
			
			$(".rev_slider_parallax").revolution({
				sliderType: "standard",
				sliderLayout: "auto",
				delay: 9000,
				parallax:{
					type: "mouse",
					levels: [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
					origo: "enterpoint",
					speed: 400,
					bgparallax: "false",
					disable_onmobile: "off"
				},
				navigation: {
					arrows:{
						enable: false,
					},
					bullets:{
						enable: false,
					}
				},			
				gridwidth: 1170,
				gridheight: 960		
			});
		}
	
		if (typeof $.fn.owlCarousel !== 'undefined') {
			var portfolio_carousel = $(".owl-carousel.portfolio-carousel").owlCarousel({
				items: 4,
				itemsDesktop: [1199,4],
				itemsDesktopSmall: [991,3],
				itemsTablet: [767,2],
				itemsMobile: [479,1],
				slideSpeed: 500,
				autoPlay: true,
				stopOnHover: true,
				navigation: false,
				navigationText: false,
				pagination: false,
				paginationNumbers: false,
				mouseDrag: true,
				touchDrag: true,
				transitionStyle: false
			});
			
			$(".next").on("click", function(){
				portfolio_carousel.trigger('owl.next');
			});
			
			$(".prev").on("click", function(){
				portfolio_carousel.trigger('owl.prev');
			});
			
			var features_carousel = $(".owl-carousel.features-slider").owlCarousel({
				singleItem: true,
				slideSpeed: 200,
				autoPlay: true,
				stopOnHover: true,
				navigation: false,
				navigationText: false,
				pagination: false,
				paginationNumbers: false,
				mouseDrag: false,
				touchDrag: true,
				transitionStyle: "fade"
			});
			
			$(".next").on("click", function(){
				features_carousel.trigger('owl.next');
			});
			
			$(".prev").on("click", function(){
				features_carousel.trigger('owl.prev');
			});
			
			$(".owl-carousel.images-slider").owlCarousel({
				singleItem: true,
				slideSpeed: 200,
				autoPlay: true,
				stopOnHover: true,
				navigation: false,
				navigationText: false,
				pagination: true,
				paginationNumbers: false,
				mouseDrag: true,
				touchDrag: true,
				transitionStyle: "fade"
			});
			
			$(".owl-carousel.logos-slider").owlCarousel({
				items: 5,
				itemsDesktop: [1199,5],
				itemsDesktopSmall: [991,4],
				itemsTablet: [767,2],
				itemsMobile: [479,1],
				slideSpeed: 500,
				autoPlay: true,
				stopOnHover: true,
				navigation: true,
				navigationText: false,
				pagination: false,
				paginationNumbers: false,
				mouseDrag: true,
				touchDrag: true,
				transitionStyle: false
			});
	
			$(".owl-carousel.testimonials-slider").owlCarousel({
				singleItem: true,
				slideSpeed: 200,
				autoPlay: true,
				stopOnHover: true,
				navigation: false,
				navigationText: false,
				pagination: true,
				paginationNumbers: false,
				mouseDrag: false,
				touchDrag: true,
				transitionStyle: "goDown"
			});
			
			$(".owl-carousel.blog-slider").owlCarousel({
				singleItem: true,
				slideSpeed: 200,
				autoPlay: true,
				stopOnHover: true,
				navigation: false,
				navigationText: false,
				pagination: true,
				paginationNumbers: false,
				mouseDrag: true,
				touchDrag: true,
				transitionStyle: "goDown"
			});
			
		}
		
		if (typeof $.fn.gmap3 !== 'undefined') {
		
			$(".map").each(function(){
			
				var data_zoom = 15;
				
				if ($(this).attr("data-zoom") !== undefined) {
					data_zoom = parseInt($(this).attr("data-zoom"),10);
				}	
				
				$(this).gmap3({
					marker: {
						values: [{
							address: $(this).attr("data-address"),
							data: $(this).attr("data-address-details")
						}],
						options:{
							draggable: false
						},
						events:{
							click: function(marker, event, context){
								var map = $(this).gmap3("get"),
								infowindow = $(this).gmap3({get:{name:"infowindow"}});
								if (infowindow){
									infowindow.open(map, marker);
									infowindow.setContent(context.data);
								} else {
									$(this).gmap3({
										infowindow:{
											anchor:marker, 
											options:{content: context.data}
										}
									});
								}
							}
						}
					},
					map: {
						options: {
							mapTypeId: google.maps.MapTypeId.ROADMAP,
							zoom: data_zoom,
							scrollwheel: false
						}
					}
				});
				
			});
			
		}
		
		if ((typeof $.fn.imagesLoaded !== 'undefined') && (typeof $.fn.isotope !== 'undefined')) {
			$(".isotope").imagesLoaded( function() {
				var container = $(".isotope");
				container.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.8s'
				});
				
				$(".filter li a").on("click", function() {
					$(".filter li a").removeClass("active");
					$(this).addClass("active");
		
					var selector = $(this).attr("data-filter");
					container.isotope({
						filter: selector
					});
		
					return false;
				});
		
				$(window).resize(function() {
					container.isotope();
				});
				
			});
			
			$(".isotope.masonry").imagesLoaded( function() {
				var container_masonry = $(".isotope.masonry");
				container_masonry.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					masonry: {
						columnWidth: 1,
						gutter: 0
					},
					transitionDuration: '0.8s'
				});
				
				$(".filter li a").on("click", function() {
					$(".filter li a").removeClass("active");
					$(this).addClass("active");
		
					var selector = $(this).attr("data-filter");
					container_masonry.isotope({
						filter: selector
					});
		
					return false;
				});
		
				$(window).resize(function() {
					container_masonry.isotope();
				});
				
			});
			
			$(".isotope.masonry.gutter").imagesLoaded( function() {
				var container_masonry_gutter = $(".isotope.masonry.gutter");
				container_masonry_gutter.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					masonry: {
						columnWidth: 1,
						gutter: 2
					},
					transitionDuration: '0.8s'
				});
				
				$(".filter li a").on("click", function() {
					$(".filter li a").removeClass("active");
					$(this).addClass("active");
		
					var selector = $(this).attr("data-filter");
					container_masonry_gutter.isotope({
						filter: selector
					});
		
					return false;
				});
		
				$(window).resize(function() {
					container_masonry_gutter.isotope();
				});
				
			});
			
		}
		
		load_more_projects();
		if (typeof $.fn.placeholder !== 'undefined') {
			$("input, textarea").placeholder();
		}
		
		if (typeof $.fn.validate !== 'undefined') {
		
			$("#contact-form").validate({
				rules: {
					name: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					subject: {
						required: true
					},
					message: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name: {
						required: "Please enter your name!"
					},
					email: {
						required: "Please enter your email!",
						email: "Please enter a valid email address"
					},
					subject: {
						required: "Please enter the subject!"
					},
					message: {
						required: "Please enter your message!"
					}
				},
					
				submitHandler: function(form) {
					var result;
					$(form).ajaxSubmit({
						type: "POST",
						data: $(form).serialize(),
						url: "assets/php/send.php",
						success: function(msg) {
							
							if (msg == 'OK') {
								result = '<div class="alert alert-success">Your message was successfully sent!</div>';
								$("#contact-form").clearForm();
							} else {
								result = msg;
							}
							
							$("#alert-area").html(result);
		
						},
						error: function() {
		
							result = '<div class="alert alert-danger">There was an error sending the message!</div>';
							$("#alert-area").html(result);
		
						}
					});
				}
			});
			
		}
		
		multilayer_parallax();
		
		if (typeof $.fn.stellar !== 'undefined') {
		
			if (!is_touch_device()) {
				
				$(window).stellar({
					horizontalScrolling: false,
					verticalScrolling: true,
					responsive: true
				});
				
			}
		
		}
		
		show_hide_scroll_top();
		
		scroll_up();
		
		if (typeof $.fn.mb_YTPlayer !== 'undefined') {
			
			$(".youtube-player").mb_YTPlayer();
		
		}
		
		clickable_div();
		
		if (typeof $.fn.hoverdir !== 'undefined') {
			
			$(".portfolio-item").hoverdir();
		
		}
		
		if (typeof $.fn.magnify !== 'undefined') {
			
			$(".magnify-img").each(function() {
				$(this).magnify();
			});
		
		}
		
		instagram_feed();
		
		animations();
		
		if (typeof $.fn.countdown !== 'undefined') {
			
			$(".countdown").countdown('2016/03/01 22:30', function(event) {
				$(this).html(event.strftime(
					'<div>%-D <span>Days</span></div>' + 
					'<div>%-H <span>Hours</span></div>' + 
					'<div>%-M <span>Minutes</span></div>' + 
					'<div>%S <span>Seconds</span></div>'
				));
			});
		
		}
		
		
	});
	$(window).scroll(function() {
		
		progress_bars();
		pie_chart();
		counter();
		animate_charts();
		show_hide_scroll_top();
		
	});
	
	$(window).resize(function() {

		mobile_menu();
		
	});
	
})(window.jQuery);


//PRD

$(function(){
	var tickerLength = $('.top_scroll_prd ul li').length;
	var tickerHeight = $('.top_scroll_prd ul li').outerHeight();
	$('.top_scroll_prd ul li:last-child').prependTo('.top_scroll_prd ul');
	$('.top_scroll_prd ul').css('marginTop',-tickerHeight);
	function moveTop(){
	  $('.top_scroll_prd ul').animate({
		top : -tickerHeight
	  },400, function(){
	   $('.top_scroll_prd ul li:first-child').appendTo('.top_scroll_prd ul');
		$('.top_scroll_prd ul').css('top','');
	  });
	 }
	setInterval( function(){
	  moveTop();
	}, 1500);
	});

	//KLR

$(function(){
	var tickerLength = $('.top_scroll_klr ul li').length;
	var tickerHeight = $('.top_scroll_klr ul li').outerHeight();
	$('.top_scroll_klr ul li:last-child').prependTo('.top_scroll_klr ul');
	$('.top_scroll_klr ul').css('marginTop',-tickerHeight);
	function moveTop(){
	  $('.top_scroll_klr ul').animate({
		top : -tickerHeight
	  },400, function(){
	   $('.top_scroll_klr ul li:first-child').appendTo('.top_scroll_klr ul');
		$('.top_scroll_klr ul').css('top','');
	  });
	 }
	setInterval( function(){
	  moveTop();
	}, 1500);
	});


		//PHE

$(function(){
	var tickerLength = $('.top_scroll_phe ul li').length;
	var tickerHeight = $('.top_scroll_phe ul li').outerHeight();
	$('.top_scroll_phe ul li:last-child').prependTo('.top_scroll_phe ul');
	$('.top_scroll_phe ul').css('marginTop',-tickerHeight);
	function moveTop(){
	  $('.top_scroll_phe ul').animate({
		top : -tickerHeight
	  },400, function(){
	   $('.top_scroll_phe ul li:first-child').appendTo('.top_scroll_phe ul');
		$('.top_scroll_phe ul').css('top','');
	  });
	 }
	setInterval( function(){
	  moveTop();
	}, 1500);
	});

//DYNATECH

	$(function(){
		var tickerLength = $('.top_scroll_dynatech ul li').length;
		var tickerHeight = $('.top_scroll_dynatech ul li').outerHeight();
		$('.top_scroll_dynatech ul li:last-child').prependTo('.top_scroll_dynatech ul');
		$('.top_scroll_dynatech ul').css('marginTop',-tickerHeight);
		function moveTop(){
			$('.top_scroll_dynatech ul').animate({
			top : -tickerHeight
			},400, function(){
			 $('.top_scroll_dynatech ul li:first-child').appendTo('.top_scroll_dynatech ul');
			$('.top_scroll_dynatech ul').css('top','');
			});
		 }
		setInterval( function(){
			moveTop();
		}, 1500);
		});

		//BEAVER 
		$(function(){
			var tickerLength = $('.top_scroll_beaver ul li').length;
			var tickerHeight = $('.top_scroll_beaver ul li').outerHeight();
			$('.top_scroll_beaver ul li:last-child').prependTo('.top_scroll_beaver ul');
			$('.top_scroll_beaver ul').css('marginTop',-tickerHeight);
			function moveTop(){
				$('.top_scroll_beaver ul').animate({
				top : -tickerHeight
				},400, function(){
				 $('.top_scroll_beaver ul li:first-child').appendTo('.top_scroll_beaver ul');
				$('.top_scroll_beaver ul').css('top','');
				});
			 }
			setInterval( function(){
				moveTop();
			}, 1500);
			});


			//TRISHUL

			$(function(){
				var tickerLength = $('.top_scroll_trishul ul li').length;
				var tickerHeight = $('.top_scroll_trishul ul li').outerHeight();
				$('.top_scroll_trishul ul li:last-child').prependTo('.top_scroll_trishul ul');
				$('.top_scroll_trishul ul').css('marginTop',-tickerHeight);
				function moveTop(){
					$('.top_scroll_trishul ul').animate({
					top : -tickerHeight
					},400, function(){
					 $('.top_scroll_trishul ul li:first-child').appendTo('.top_scroll_trishul ul');
					$('.top_scroll_trishul ul').css('top','');
					});
				 }
				setInterval( function(){
					moveTop();
				}, 1500);
				});

				
			//KGR

			$(function(){
				var tickerLength = $('.top_scroll_kgr ul li').length;
				var tickerHeight = $('.top_scroll_kgr ul li').outerHeight();
				$('.top_scroll_kgr ul li:last-child').prependTo('.top_scroll_kgr ul');
				$('.top_scroll_kgr ul').css('marginTop',-tickerHeight);
				function moveTop(){
					$('.top_scroll_kgr ul').animate({
					top : -tickerHeight
					},400, function(){
					 $('.top_scroll_kgr ul li:first-child').appendTo('.top_scroll_kgr ul');
					$('.top_scroll_kgr ul').css('top','');
					});
				 }
				setInterval( function(){
					moveTop();
				}, 1500);
				});

				//velson
				$(function(){
					var tickerLength = $('.top_scroll_velson ul li').length;
					var tickerHeight = $('.top_scroll_velson ul li').outerHeight();
					$('.top_scroll_velson ul li:last-child').prependTo('.top_scroll_velson ul');
					$('.top_scroll_velson ul').css('marginTop',-tickerHeight);
					function moveTop(){
						$('.top_scroll_velson ul').animate({
						top : -tickerHeight
						},400, function(){
						 $('.top_scroll_velson ul li:first-child').appendTo('.top_scroll_velson ul');
						$('.top_scroll_velson ul').css('top','');
						});
					 }
					setInterval( function(){
						moveTop();
					}, 1500);
					});
	

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});
//sticky
var fixmeTop = $('.fixme').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('.fixme').css({
            position: 'fixed',
			top: '66',
			bottom:'auto',
			width:'31%',
        });
		$('#footer').css({
			position:'relative',
        });
    } else {
        $('.fixme').css({
            position: 'static',
			width:'100%',
			height:'auto',
        });
    }
});