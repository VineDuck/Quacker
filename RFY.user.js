// ==UserScript==
// @name       Play sound when unhidden vine RFY item detected
// @match      https://www.amazon.co.uk/vine/vine-items?queue=potluck*
// @grant      GM.notification
// @version    1.07
// ==/UserScript==

// Refreshes the vine pages every 3 to 8 seconds, while page is not focused.
// Quacks if an unhidden item is on the page.
// Stops on CAPTCHA etc.

// change to false to skip notifications.
const show_notifications = true;
// control notifications for AI and AFA
const show_notifications_on_ai = false;
const show_notifications_on_afa = true;

// Alert sound
const alert_sound = new Audio ("https://github.com/Jimbo5431/RFY-Userscript/raw/main/quack.mp3");

// Notification image
const notification_image_url = "https://raw.githubusercontent.com/Jimbo5431/RFY-Userscript/main/rubber-duck.png";


////////////////////////////////////////////////////////////
//                      Start script                      //
////////////////////////////////////////////////////////////

const queue = new URL(window.location).searchParams.get('queue');

if (! document.getElementById('vvp-reviews-tab')) {
    // This is not the page you are looking for
    console.log ('Wrong page, aborting');
    alert_sound.play ();
    throw new Error("Possibly a captcha");
}

const reload_interval = ((Math.floor(Math.random() * 5000)) + 3000);
const original_title = document.title;

console.log('Delay: ' + reload_interval);

let refresh_timeout;
let title_interval;
let new_load = true;

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
    clearInterval(title_interval);
    document.title = original_title;
    window.removeEventListener("focus", stopFlashTitle);
}

function runScript() {
    console.log('Tab is inactive. Setting timeout...');
    refresh_timeout = setTimeout(refreshMe, reload_interval);
    if (new_load) {
        // need to wait while addons hide the items
        setTimeout(checkNew, 1500);
    }
}

function pauseScript() {
    console.log('Tab is active. Cancelling refresh...');
    clearTimeout(refresh_timeout);
}

function stopScript() {
    console.log('Stopping!');
    // Quack!!!
    alert_sound.play ();
    showNotif();
    clearTimeout(refresh_timeout);
    window.removeEventListener("blur", runScript);
    window.removeEventListener("focus", pauseScript);
    window.addEventListener("focus", stopFlashTitle);
    title_interval = setInterval(flashTitle, 750);
}

function checkNew() {
    new_load = false;
    let items = document.getElementById('vvp-items-grid');
    if (! items) {
        return;
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
}

function refreshMe() {
    console.log('Reloading!');
//    let ts = Math.floor(Date.now() / 1000);
    let href = new URL(window.location.href);
//    href.searchParams.set('ts', ts);
    window.location.assign(href.toString());
}

function showNotif() {
    
    if (! show_notifications)
        return false;

    switch (queue) {
        case "last_chance":
            if (! show_notifications_on_afa)
                return false;
            break;
        case "encore":
            if (! show_notifications_on_ai)
                return false;
            break;
    }

    GM.notification({
        text: "🦆🦆 quack quack 🦆🦆",
        title: "New item listed",
        image: notification_image_url,
        onclick: function() {
            window.parent.focus();
        }
    });
}
