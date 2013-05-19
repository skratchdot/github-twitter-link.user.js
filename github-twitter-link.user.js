// ==UserScript==
// @name           GitHub: Twitter Link
// @namespace      https://github.com/skratchdot/github-twitter-link.user.js
// @description    Adds a twitter link on Github profile pages if a corresponding user name exists at Twitter.
// @include        https://github.com/*
// @match          https://github.com/*
// @require        https://gist.github.com/skratchdot/5604120/raw/_init.js
// @require        https://gist.github.com/skratchdot/5604120/raw/twitter-link.js
// @run-at         document-end
// @grant          none
// @icon           http://skratchdot.com/favicon.ico
// @downloadURL    https://github.com/skratchdot/github-twitter-link.user.js/raw/master/github-twitter-link.user.js
// @updateURL      https://github.com/skratchdot/github-twitter-link.user.js/raw/master/github-twitter-link.user.js
// @version        1.7
// ==/UserScript==
/*global SKRATCHDOT, document */

// This code is only going to run for browsers that don't support
// the @require annotation when executing userscripts.
if ('undefined' === typeof SKRATCHDOT) {
	var addScript = function (src) {
		'use strict';
		var script = document.createElement('script');
		script.src = src;
		document.body.appendChild(script);
		document.body.removeChild(script);
	};

	// Required by: repo-filter-info
	addScript('https://gist.github.com/skratchdot/5604120/raw/twitter-link.js');
}