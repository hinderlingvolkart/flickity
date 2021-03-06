/*!
 * Flickity v2.2.0
 * Modified by Hinderling Volkart
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */

(function(window, factory) {
	// universal module definition
	/* jshint strict: false */
	if (typeof define == 'function' && define.amd) {
		// AMD
		define(['./flickity', './drag', './prev-next-button', './page-dots', './player', './add-remove-cell', './lazyload', './as-nav-for'], factory);
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS
		module.exports = factory(
			require('./flickity'),
			require('./drag'),
			require('./prev-next-button'),
			require('./page-dots'),
			require('./player'),
			require('./add-remove-cell'),
			require('./lazyload'),
			require('./as-nav-for')
		);
	}
})(window, function factory(Flickity) {
	/*jshint strict: false*/
	return Flickity;
});
