// ==UserScript==
// @name       Play sound when unhidden vine RFY item detected
// @match      https://www.amazon.co.uk/vine/vine-items?queue=potluck
// @grant      none
// @version    0.6
// ==/UserScript==

// Refreshes the RFY page every 3 to 8 seconds, while page is not focused.
// Quacks if an unhidden item is on the page.
// Stops if VH is not discovered, and CAPTCHA etc.

// between 3 and 8 seconds
const reload_interval = ((Math.floor(Math.random() * 5)) + 3) * 1000;
console.log('Delay: ' + reload_interval);

// Quack!!!
const alert_sound = new Audio ("https://github.com/Jimbo5431/RFY-Userscript/raw/main/quack.mp3");

const original_title = document.title;

let refresh_timeout;
let title_interval;

window.addEventListener("blur", runScript);
window.addEventListener("focus", pauseScript);

if (! document.hasFocus()) {
    runScript();
}

function flashTitle() {
    if (document.title === original_title){
        document.title = '* New Items *';
    } else {
        document.title = original_title;
    }
}

function stopFlashTitle() {
    clearInterval(title_interval)
    document.title = original_title;
    window.removeEventListener("focus", stopFlashTitle);
}

function runScript() {
    console.log('Tab is inactive. Setting timeout...');
    refresh_timeout = setTimeout(refreshMe, reload_interval);
}

function pauseScript() {
    console.log('Tab is active. Cancelling refresh...');
    clearTimeout(refresh_timeout);
}

function stopScript() {
    console.log('Stopping!');
    // Quack!!!
    alert_sound.play ();
    window.removeEventListener("blur", runScript);
    window.removeEventListener("focus", pauseScript);
    window.addEventListener("focus", stopFlashTitle);
    title_interval = setInterval(flashTitle, 750);
}

function refreshMe() {
    if (! document.getElementById('vvp-reviews-tab')) {
        return stopScript();
    }

    let items = document.getElementById('vvp-items-grid');
    if (! items) {
        console.log('Reloading!');
        return location.reload();
    }
    items = items.getElementsByClassName('vvp-item-tile');
    if (items && items.length) {
        console.log('Items found, checking visibility');
        for (const item of items) {
            if (window.getComputedStyle(item).display === 'block') {
                console.log('Found one');
                return stopScript();
            }
        }
    }

    console.log('Reloading!');
    location.reload();
}
