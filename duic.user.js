// ==UserScript==
// @name         DUIC cleaner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.duic.nl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let removed = 0;
    const ribbons = $('.ribbon.article-excerpt__ribbon');
    ribbons.each((i, e) => {
       if ($(e).text() === '#pb') {
           $(e).closest('article').remove();
           removed++;
       }
    });
    console.log(`Removed ${removed} ads`);
})();
