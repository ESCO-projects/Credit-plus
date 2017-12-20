
    var timelimeMod = setTimeout(timerFunc, 30000); //default timer start

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