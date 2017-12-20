import sayHello from './lib/sayHello.js';
import '../../node_modules/jquery.animate-number/jquery.animateNumber.min';
import '../../node_modules/waypoints/lib/jquery.waypoints.min.js';
import '../../node_modules/magnific-popup/dist/jquery.magnific-popup.min.js';
import '../../node_modules/jquery-mask-plugin/dist/jquery.mask.min.js';


$( document ).ready(function() {

    sayHello(); //module console hello

     $('.js_phone').mask('000-0000000');

    //E-mail Ajax Send
    $(".js_form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            window.location.replace("http://credit-plus.co.il/thanks.html");
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $(".js_man_form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert('отправлено');
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $('.nav_mob_btn, .head__nav a').click(function openMnu(){
       $('.js_navigate').toggleClass('actives');
    });


    //var timelimeMod = setTimeout(timerFunc, 30000); //default timer start

    /* start func opener timeline modal */
    function timerFunc() {
      $.magnificPopup.open({
	        items: { src: '.timemod' },
	  			type: 'inline',
					showCloseBtn: false,
					overflowY: 'auto',
					preloader: false,
					removalDelay: 300,
					mainClass: 'my-mfp-slide-bottom',
	        callbacks: {
	          afterClose() {
	            timelimeMod = setTimeout(timerFunc, 60000);
	          }
	        }
	      }, 0);
      };
    /* end func opener timeline modal */

    /* start modal by button open */
    $('.js_modal').magnificPopup({
			type: 'inline',
			showCloseBtn: false,
			overflowY: 'auto',
			preloader: false,
			removalDelay: 300,
			mainClass: 'my-mfp-slide-bottom',
			callbacks: {
			  beforeOpen: function() {
			    clearTimeout(timelimeMod);
			  },
			  afterClose() {
	            timelimeMod = setTimeout(timerFunc, 60000);
	          }
			}
		});
    /* end modal by button open */

    /* start close current modal */
     $('.js_closer').click( function() {
        $.magnificPopup.close();
        return false;
    });
    /* end close current modal */

    /* start nav scroll to section */
  	$(".js_scroll").on("click","a", function (event) {
  		event.preventDefault();
  		var id  = $(this).attr('href'),
  				top = $(id).offset().top;
  		$('body,html').animate({scrollTop: top -50 }, 400);
  	});
	/* end nav scroll to section */

		/* start animate number func*/
    function scrollCanalAnimation() {
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
    $(".number_count").each(function() {
        var tcount = $(this).data("count");
        $(this).animateNumber({ number: tcount,
                easing: 'linear',
                numberStep: comma_separator_number_step},
            2000);
		    });
		};
		/* end animate number func*/

		/* start event scroll for services */
		$('.service__item').waypoint(function(direction) {
		    scrollCanalAnimation();
            $('.service__item').each(function(i, el) {        
              window.setTimeout(function(){
                $(el).addClass('fade_in');
              }, 300 * i);
            });
    		}, {
    		    offset: '95%'
		});

    /* start event scroll for animate steps section*/
    $('.steps__item').waypoint(function(direction) {
        scrollCanalAnimation();
        $('.steps__item').each(function(i, el) {        
          window.setTimeout(function(){
            $(el).addClass('fade_in');
          }, 200 * i);
        });
    }, {
        offset: '85%'
    });

    /* start event scroll for animate steps section*/
    $('.clients__item').waypoint(function(direction) {
        scrollCanalAnimation();
        $('.clients__item').each(function(i, el) {        
          window.setTimeout(function(){
            $(el).addClass('fade_in');
          }, 200 * i);
        });
      }, {
          offset: '85%'
    });

});//end ready func