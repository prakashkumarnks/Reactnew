$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        //navigation : false, // Show next and prev buttons
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        animateIn: 'fadeInRight',
        animateOut: 'fadeOutLeft',
        autoControls: true,
        loop: true,
        nav: false,
        // "singleItem:true" is a shortcut for:
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });
});
$(document).ready(function() {
    $("#owl-demo-company").owlCarousel({
        navigation: true, // Show next and prev buttons
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoControls: true,
        loop: true,
    });
});

$('#owl-demo-brand').owlCarousel({
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
        },
        600: {
            items: 3,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
        },
        1000: {
            items: 5,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
        },
        1200: {
            items: 6,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
        }
    }
})

$('#owl-demo-news').owlCarousel({
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4870,
        },
        600: {
            items: 2,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4870,
        },
        1200: {
            items: 4,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4870,
        },
    }
})
$('#owl-demo-news_sta').owlCarousel({
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3920,
        },
        600: {
            items: 1,
            nav: false,
            loop: true,
            autoplay: false,
            autoplayTimeout: 3920,
        },
        1200: {
            items: 1,
            nav: false,
            loop: true,
            autoplay: false,
            autoplayTimeout: 3920,
        },
    }
})
$('#owl-demo-association_events').owlCarousel({
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
        },
        600: {
            items: 2,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
        },
    }
})

$('#owl-demo-hot_sale').owlCarousel({
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 10000,
        },
    }
})
$(document).ready(function() {
    $("#owl-demo-list").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoControls: true,
        loop: true,
    });
});

$('#owl-demo-asso').owlCarousel({
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
        },
        600: {
            items: 3,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
        },
        1000: {
            items: 5,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
        },
        1200: {
            items: 6,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
        }
    }
})

//search bar

$(document).ready(function() {
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function() {
        if (isOpen == false) {
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });

    submitIcon.mouseup(function() {
        return false;
    });
    searchBox.mouseup(function() {
        return false;
    });
    $(document).mouseup(function() {
        if (isOpen == true) {
            $('.searchbox-icon').css('display', 'block');
            submitIcon.click();
        }
    });
});

function buttonUp() {
    var inputVal = $('.searchbox-input').val();
    inputVal = $.trim(inputVal).length;
    if (inputVal !== 0) {
        $('.searchbox-icon').css('display', 'none');
    } else {
        $('.searchbox-input').val('');
        $('.searchbox-icon').css('display', 'block');
    }
}

$(document).ready(function() {
    $("#owl-demo-rigmembers").owlCarousel({
        //navigation : true, // Show next and prev buttons
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoControls: true,
        loop: true,
        // "singleItem:true" is a shortcut for:
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });
});

$('#owl-demo-hot-sales').owlCarousel({
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
        },
        600: {
            items: 1,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
        },
        1000: {
            items: 2,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
        },
        1200: {
            items: 2,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
        }
    }
})

$(document).ready(function() {
    $("#owl-demo-point").owlCarousel({
        //navigation : true, // Show next and prev buttons
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        animateIn: 'fadeInRight',
        animateOut: 'fadeOutLeft',
        autoControls: true,
        loop: true,
        // "singleItem:true" is a shortcut for:
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });
});
$(document).ready(function() {
    $("#owl-demo-offers").owlCarousel({
        //navigation : true, // Show next and prev buttons
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        animateIn: 'fadeInRight',
        animateOut: 'fadeOutLeft',
        autoControls: true,
        navigation: false,
        loop: true,
        // "singleItem:true" is a shortcut for:
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });
});
$(document).ready(function() {
    $("#owl-demo-events").owlCarousel({
        //navigation : true, // Show next and prev buttons
        items: 1,
        autoplay: true,
        autoplayTimeout: 12000,
        animateIn: 'fadeInRight',
        animateOut: 'fadeOutLeft',
        autoControls: true,
        loop: true,
        // "singleItem:true" is a shortcut for:
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });
});

/*
	$('#slider_whizzkid').owlCarousel({
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				loop: true,
				autoplay:true,
				autoplayTimeout:2000,
			},
			600:{
				items:1,
				nav:false,
				loop: true,
				autoplay:true,
				autoplayTimeout:2000,
			},
			1000:{
				items:2,
				nav:false,
				loop: true,
				autoplay:true,
				autoplayTimeout:2000,
			},
			1200:{
				items:2,
				nav:false,
				loop: true,
				autoplay:true,
				autoplayTimeout:2000,
			}
		}
	})
*/


//PRD

$(function() {
    var tickerLength = $('.top_scroll_prd ul li').length;
    var tickerHeight = $('.top_scroll_prd ul li').outerHeight();
    $('.top_scroll_prd ul li:last-child').prependTo('.top_scroll_prd ul');
    $('.top_scroll_prd ul').css('marginTop', -tickerHeight);

    function moveTop() {
        $('.top_scroll_prd ul').animate({
            top: -tickerHeight
        }, 400, function() {
            $('.top_scroll_prd ul li:first-child').appendTo('.top_scroll_prd ul');
            $('.top_scroll_prd ul').css('top', '');
        });
    }
    setInterval(function() {
        moveTop();
    }, 1500);
});

//KLR

$(function() {
    var tickerLength = $('.top_scroll_klr ul li').length;
    var tickerHeight = $('.top_scroll_klr ul li').outerHeight();
    $('.top_scroll_klr ul li:last-child').prependTo('.top_scroll_klr ul');
    $('.top_scroll_klr ul').css('marginTop', -tickerHeight);

    function moveTop() {
        $('.top_scroll_klr ul').animate({
            top: -tickerHeight
        }, 400, function() {
            $('.top_scroll_klr ul li:first-child').appendTo('.top_scroll_klr ul');
            $('.top_scroll_klr ul').css('top', '');
        });
    }
    setInterval(function() {
        moveTop();
    }, 1500);
});


//PHE

$(function() {
    var tickerLength = $('.top_scroll_phe ul li').length;
    var tickerHeight = $('.top_scroll_phe ul li').outerHeight();
    $('.top_scroll_phe ul li:last-child').prependTo('.top_scroll_phe ul');
    $('.top_scroll_phe ul').css('marginTop', -tickerHeight);

    function moveTop() {
        $('.top_scroll_phe ul').animate({
            top: -tickerHeight
        }, 400, function() {
            $('.top_scroll_phe ul li:first-child').appendTo('.top_scroll_phe ul');
            $('.top_scroll_phe ul').css('top', '');
        });
    }
    setInterval(function() {
        moveTop();
    }, 1500);
});

//DYNATECH

$(function() {
    var tickerLength = $('.top_scroll_dynatech ul li').length;
    var tickerHeight = $('.top_scroll_dynatech ul li').outerHeight();
    $('.top_scroll_dynatech ul li:last-child').prependTo('.top_scroll_dynatech ul');
    $('.top_scroll_dynatech ul').css('marginTop', -tickerHeight);

    function moveTop() {
        $('.top_scroll_dynatech ul').animate({
            top: -tickerHeight
        }, 400, function() {
            $('.top_scroll_dynatech ul li:first-child').appendTo('.top_scroll_dynatech ul');
            $('.top_scroll_dynatech ul').css('top', '');
        });
    }
    setInterval(function() {
        moveTop();
    }, 1500);
});

//BEAVER 
$(function() {
    var tickerLength = $('.top_scroll_beaver ul li').length;
    var tickerHeight = $('.top_scroll_beaver ul li').outerHeight();
    $('.top_scroll_beaver ul li:last-child').prependTo('.top_scroll_beaver ul');
    $('.top_scroll_beaver ul').css('marginTop', -tickerHeight);

    function moveTop() {
        $('.top_scroll_beaver ul').animate({
            top: -tickerHeight
        }, 400, function() {
            $('.top_scroll_beaver ul li:first-child').appendTo('.top_scroll_beaver ul');
            $('.top_scroll_beaver ul').css('top', '');
        });
    }
    setInterval(function() {
        moveTop();
    }, 1500);
});


//TRISHUL

$(function() {
    var tickerLength = $('.top_scroll_trishul ul li').length;
    var tickerHeight = $('.top_scroll_trishul ul li').outerHeight();
    $('.top_scroll_trishul ul li:last-child').prependTo('.top_scroll_trishul ul');
    $('.top_scroll_trishul ul').css('marginTop', -tickerHeight);

    function moveTop() {
        $('.top_scroll_trishul ul').animate({
            top: -tickerHeight
        }, 400, function() {
            $('.top_scroll_trishul ul li:first-child').appendTo('.top_scroll_trishul ul');
            $('.top_scroll_trishul ul').css('top', '');
        });
    }
    setInterval(function() {
        moveTop();
    }, 1500);
});


//KGR

$(function() {
    var tickerLength = $('.top_scroll_kgr ul li').length;
    var tickerHeight = $('.top_scroll_kgr ul li').outerHeight();
    $('.top_scroll_kgr ul li:last-child').prependTo('.top_scroll_kgr ul');
    $('.top_scroll_kgr ul').css('marginTop', -tickerHeight);

    function moveTop() {
        $('.top_scroll_kgr ul').animate({
            top: -tickerHeight
        }, 400, function() {
            $('.top_scroll_kgr ul li:first-child').appendTo('.top_scroll_kgr ul');
            $('.top_scroll_kgr ul').css('top', '');
        });
    }
    setInterval(function() {
        moveTop();
    }, 1500);
});

//velson
$(function() {
    var tickerLength = $('.top_scroll_velson ul li').length;
    var tickerHeight = $('.top_scroll_velson ul li').outerHeight();
    $('.top_scroll_velson ul li:last-child').prependTo('.top_scroll_velson ul');
    $('.top_scroll_velson ul').css('marginTop', -tickerHeight);

    function moveTop() {
        $('.top_scroll_velson ul').animate({
            top: -tickerHeight
        }, 400, function() {
            $('.top_scroll_velson ul li:first-child').appendTo('.top_scroll_velson ul');
            $('.top_scroll_velson ul').css('top', '');
        });
    }
    setInterval(function() {
        moveTop();
    }, 1500);
});


//whizzkid

$(function() {
    var tickerLength = $('.top_scroll_velson ul li').length;
    var tickerHeight = $('.top_scroll_velson ul li').outerHeight();
    $('.top_scroll_velson ul li:last-child').prependTo('.top_scroll_velson ul');
    $('.top_scroll_velson ul').css('marginTop', -tickerHeight);

    function moveTop() {
        $('.top_scroll_velson ul').animate({
            top: -tickerHeight
        }, 400, function() {
            $('.top_scroll_velson ul li:first-child').appendTo('.top_scroll_velson ul');
            $('.top_scroll_velson ul').css('top', '');
        });
    }
    setInterval(function() {
        moveTop();
    }, 1500);
});


/* share on social media */
$("#btn-share").click(function() {
    var shareHtml = "",
        shareUrl = window.location.href,
        el = $(this),
        shareFacebookLabel = el.data("facebook-label"),
        shareTwitterLabel = el.data("twitter-label"),
        shareTwitterText = el.data("twitter-text"),
        shareLinkedInLabel = el.data("linkedin-label"),
        shareLinkedInTitle = encodeURIComponent(el.data("linkedin-title")),
        shareLinkedInSummary = encodeURIComponent(el.data("linkedin-summary")),
        shareLinkedInSource = window.location.protocol + "//" + window.location.hostname,
        shareEmailLabel = el.data("email-label"),
        shareEmailSubject = el.data("email-subject");

    shareHtml += '<div class="modal fade in text-center" id="modal-share" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">' +
        '<div class="modal-dialog modal-sm">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>';
    '</div>' +
    '<div class="modal-body">' +
    '<div class="row">' +
    '<ul class="">';

    if (shareFacebookLabel != undefined) {
        shareHtml += '<li class="pt-5"><a href="https://www.facebook.com/sharer/sharer.php?u=' + shareUrl + '" title="' + shareFacebookLabel + '" target="_blank" class="btn btn-facebook"><i class="fas fa fa-facebook"></i> ' + shareFacebookLabel + '</a></li>';
    }
    if (shareTwitterLabel != undefined) {
        shareHtml += '<li><a href="https://twitter.com/intent/tweet?text=' + shareTwitterText + '&url=' + shareUrl + '" title="' + shareTwitterLabel + '" target="_blank" class="btn btn-twitter"><i class="fas fa fa-twitter"></i> ' + shareTwitterLabel + '</a></li>';
    }
    if (shareLinkedInLabel != undefined) {
        shareHtml += '<li class="pb-4"><a href="https://www.linkedin.com/shareArticle?mini=true&url=' + shareUrl + '&title=' + shareLinkedInTitle + '&summary=' + shareLinkedInSummary + '&source=' + shareLinkedInSource + '" title="' + shareLinkedInLabel + '" target="_blank" class="btn btn-linkedin"><i class="fas fa fa-linkedin"></i> ' + shareLinkedInLabel + '</a></li>';
    }
    '</ul>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';

    $("body").append(shareHtml);

    $('#modal-share').modal()
});



/* gallery start */
// Gallery image hover
$(".img-wrapper").hover(
    function() {
        $(this).find(".img-overlay").animate({
            opacity: 1
        }, 600);
    },
    function() {
        $(this).find(".img-overlay").animate({
            opacity: 0
        }, 600);
    }
);

// Lightbox
var $overlay = $('<div id="overlay"><div class="modalbox"></div></div>');
var $image = $("<img>");
var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
$("#gallery").append($overlay);

// Hide overlay on default
$overlay.hide();

// When an image is clicked
$(".img-overlay").click(function(event) {
    // Prevents default behavior
    event.preventDefault();
    // Adds href attribute to variable
    var imageLocation = $(this).prev().attr("href");
    // Add the image src to $image
    $image.attr("src", imageLocation);
    // Fade in the overlay
    $overlay.fadeIn("slow");
});

// When the overlay is clicked
$overlay.click(function() {
    // Fade out the overlay
    $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton.click(function(event) {
    // Hide the current image
    $("#overlay img").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image").next().find("img"));
    // All of the images in the gallery
    var $images = $("#image-gallery img");
    // If there is a next image
    if ($nextImg.length > 0) {
        // Fade in the next image
        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    } else {
        // Otherwise fade in the first image
        $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
    }
    // Prevents overlay from being hidden
    event.stopPropagation();
});

// When previous button is clicked
$prevButton.click(function(event) {
    // Hide the current image
    $("#overlay img").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image").prev().find("img"));
    // Fade in the next image
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    // Prevents overlay from being hidden
    event.stopPropagation();
});

// When the exit button is clicked
$exitButton.click(function() {
    // Fade out the overlay
    $("#overlay").fadeOut("slow");
});

/* rating and review */
(function($) {

    // Open Lightbox
    $('.open-lightbox').on('click', function(e) {
        e.preventDefault();
        var image = $(this).attr('href');
        $('html').addClass('no-scroll');
        $('body').append('<div class="lightbox-opened"><img src="' + image + '"></div>');
    });

    // Close Lightbox
    $('body').on('click', '.lightbox-opened', function() {
        $('html').removeClass('no-scroll');
        $('.lightbox-opened').remove();
    });

})(jQuery);
//preloader
(function($) {

    "use strict";


    if ($('.popup-with-zoom-anim').length) {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    }

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }
    $(window).on('load', function() {
        handlePreloader();
    });

})(window.jQuery);

// scrool top

$(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function() {
    $(".scroll").click(function() {
        $("html,body").animate({
            scrollTop: $(".thetop").offset().top
        }, "200");
        return false
    })
})

$('#owl-demo-magazine').owlCarousel({
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
        },
        600: {
            items: 2,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
        },
        1000: {
            items: 4,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
        },
        1200: {
            items: 5,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
        }
    }
})
$('#owl-demo-top-magazine').owlCarousel({
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
        },
        600: {
            items: 2,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
        },
        1000: {
            items: 3,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
        },
        1200: {
            items: 4,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
        }
    }
})
$('.olw-magazine .owl-carousel').owlCarousel({
    autoplay: false,
    center: true,
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
});