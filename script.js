$(document).ready(function() {

    var stickyNavTop = $('.navbar').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
	if (scrollTop > stickyNavTop) { 
	    $('.navbar').addClass('sticky');
	} else {
	    $('.navbar').removeClass('sticky'); 
	}
    };

    stickyNav();
    $(window).scroll(function() {
	stickyNav();
    });
});

$(document).ready(function () {
    $("a.scrollLink").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ 
            scrollTop: $($(this).attr("href")).offset().top 
        }, 300);
    });
});
