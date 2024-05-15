# Vine UK RFY/AFA refresh userscript
### Quacks when an unhidden RFY item is found.

Refreshes the RFY page every 3 to 8 seconds as long as the tab is not focused and there are no RFY items showing.
If an RFY item is found, or a CAPTCHA occurs, the script will stop running.

You will need a userscript plugin such as GreaseMonkey, VoilentMonkey, FireMonkey or TamperMonkey to run this script.

The script will work with both Vine-Helper and Hide-Vine-Items script, maybe others. If it hides items, it'll probably work.

### How to use
- Use [this link](https://raw.githubusercontent.com/Jimbo5431/RFY-Userscript/main/RFY.user.js) to install the script for RFY only, or [this link](https://raw.githubusercontent.com/Jimbo5431/RFY-Userscript/main/RFY_AFA.user.js) for AFA as well.
- In site settings in chrome, or permissions > autoplay in firefox, make sure to allow amazon.co.uk for sound.
- Open RFY page, hide all items.
- Refresh page.
- Go use a different tab or window.

After an item has been found, the script will be stopped until you refresh the page manually.
Just hide any items you don't want, and hit F5.

**Important**
**Make sure you have clicked on the tab before doing something else, or sound may not work. This is due to chrome policies on auto play.**
