$(function() {
    $('body').on('click', '.page-scroll a, a.tabTrigger', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
/*
blueimp.Gallery(
	
    document.getElementsByClassName('.Gallery'),
    {
        onslide: function (index, slide) {
            var text = this.list[index].getAttribute('data-description'),
                node = this.container.find('.description');
            node.empty();
            if (text) {
                node[0].appendChild(document.createTextNode(text));
            }
        }
    }
);*/

$('.Gallery').click( function (event) {
   event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event, onslide: function (index, slide) {
            var text = this.list[index].getAttribute('data-description'),
                node = this.container.find('.description');
				node.empty();
				$('#blueimp-gallery').removeClass('hasDescription');
            if (text) {
                node[0].appendChild(document.createTextNode(text));
				$('#blueimp-gallery').addClass('hasDescription');
            }
        } },
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
});
$('a.tabTrigger').on('click',  function (){
	var tabTarget = $(this).attr('data-target');
	var tabPane = $(tabTarget).attr('href');
	
	$('section#work .nav-tabs li,section#work div.tab-pane').removeClass('active');
	$(tabTarget).parent().addClass('active');
	$('div'+tabPane).addClass('active');
});

