const VENDOR_PATH = 'dev/scripts/Vendor/';
const DEV_PATH    = 'dev/';
const DIST_PATH   = 'dist/';

module.exports = {
	// ---------------- //
	// Javascript Paths //
	// ---------------- //
	Vendor_JS : [
		VENDOR_PATH + 'jquery-3.0.0.min.js',
		VENDOR_PATH + 'socket.io-1.4.5.js',
	],
	Dev_JS : [
		DEV_PATH + '/scripts/*.js',
	],
	Dist_JS : DIST_PATH + '/scripts/',
	// ---------- //
	// SCSS Paths //
	// ---------- //
	Vendor_SCSS : [

	],
	Dev_Watchable_SCSS : [
		DEV_PATH + '/stylesheets/*.scss'
	],
	Dev_SCSS : [
		DEV_PATH + '/stylesheets/app.scss'
	],
	Dist_SCSS : DIST_PATH + 'stylesheets/',
	// ---------- //
	// Html Views //
	// ---------- //
	Dev_Views : [
		DEV_PATH + 'views/**/*.html'
	],
	Dist_Views : DIST_PATH + 'views/',
	// ----------- //
	// Image Paths //
	// ----------- //
	Images : [
		DEV_PATH + '/images/*.svg',
		DEV_PATH + '/images/*.png',
		DEV_PATH + '/images/*.jpg',
		DEV_PATH + '/images/*.jpeg',
	],
	Dist_Images : DIST_PATH + 'images/',
};