
  var slider = new Splide( '#splide' ).mount();

  var slider_1 = new Splide( '#slider_1', {
    type: 'loop',
    perPage: 3, perMove: 1,
    padding: '0em',
  } ).mount();

  var slider_2 = new Splide( '#slider_2', {
    rewind      : true,
  	fixedWidth  : 100,
  	fixedHeight : 64,
  	isNavigation: true,
  	gap         : 10,
  	focus       : 'center',
  	pagination  : false,
  	cover       : true,
  	breakpoints : {
  		'600': {
  			fixedWidth  : 66,
  			fixedHeight : 40,
  		}
  	}
  } ).mount();


  var primarySlider = new Splide( '#primary-slider', {
	type       : 'fade',
	heightRatio: 0.5,
	pagination : false,
	arrows     : false,
	cover      : true,
} );

// Set the thumbnails slider as a sync target and then call mount.
primarySlider.sync( slider_2 ).mount();


var slider_3 = new Splide( '#slider_3', {
	direction: 'ttb',
  type: 'loop',
	height   : '300px',
	cover      : true,
  classes: {
		arrows: 'btns',
		arrow : 'btn',
		prev  : 'btn-prev',
		next  : 'btn-next',
	},
} ).mount();



  if (window.matchMedia("(min-width: 768px)").matches) {
    slider_1.options = { perPage: 3 }
  }
  if (window.matchMedia("(max-width: 768px)").matches) {
    slider_1.options = { perPage: 2 }
  }
  if(window.matchMedia("(max-width: 480px)").matches){
      slider_1.options = { perPage: 1 }
  }
