// ==UserScript==
// @id              RedditHideSidebar
// @name            Reddit Hide Sidebar
// @version         0.0.1
// @author          Wheen
// @description     Hides the reddit sidebar when the page width is less than 1000 pixels
// @icon            https://raw.githubusercontent.com/wheen-/reddit-hide-sidebar/master/icon-48x48.png
// @icon64          https://raw.githubusercontent.com/wheen-/reddit-hide-sidebar/master/icon-64x64.png
// @domain          reddit.com
// @domain          www.reddit.com
// @match           http://*.reddit.com/*
// @match           https://*.reddit.com/*
// @include         http://*.reddit.com/*
// @include         https://*.reddit.com/*
// @grant           none
// ==/UserScript==

document.querySelector('style').textContent += "@media (min-width: 1000px) { .side { display: block } } @media (max-width: 999px) { .side { display: none } }"
