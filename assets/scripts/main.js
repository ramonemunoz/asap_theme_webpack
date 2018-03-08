//scripts

//Require scripts
require('./vendor/navigation');
require('./vendor/skip-link-focus-fix');

//Require AOS.js
require('../../node_modules/aos/dist/aos.css');

//Require SASS
require('../styles/scss/style.scss');

//Require Slick
require('script-loader!../../node_modules/slick-carousel/slick/slick');

//Require AOS
require('script-loader!../../node_modules/aos/dist/aos');

//Require Images
import logo from '../images/logo.png';

// A $( document ).ready() block.
jQuery(document).ready(function() {
	AOS.init({
		offset: 300,
		delay: 200
	});
});
