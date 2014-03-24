// ==UserScript==
// @id              RedditHideSidebar
// @name            Reddit Hide Sidebar
// @version         0.0.1
// @author          Wheen
// @description     Hides the reddit sidebar when the page width is less than 1000 pixels
// @domain          reddit.com
// @domain          www.reddit.com
// @match           http://*.reddit.com/*
// @match           https://*.reddit.com/*
// @include         http://*.reddit.com/*
// @include         https://*.reddit.com/*
// @grant           none
// ==/UserScript==

document.querySelector('style').textContent += "@media (min-width: 1000px) { .side { display: block } } @media (max-width: 999px) { .side { display: none } }"
