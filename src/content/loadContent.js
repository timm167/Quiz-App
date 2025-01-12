import {siteName, subTitle} from './content.json'

// loadContent.js
document.addEventListener('DOMContentLoaded', () => {
    document.title = siteName
    document.querySelector('header .title-holder h1').textContent = siteName;
    document.querySelector('header .subtitle-holder h2').textContent = subTitle;
});

