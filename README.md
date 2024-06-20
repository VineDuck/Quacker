# Vine UK RFY/AFA refresh userscript (The QUACKER!)
### Quacks when an unhidden RFY item is found.

**${\textsf{\color{green}Current version 1.05}}$ Updated 20/06/24 16:20**

➕ Added notifications to RFY and AFA. Can be toggled to also work on AI.

➕ Changed refresh timing to use milliseconds instead of seconds. A little more randomness should help prevent being detected as a bot.

Refreshes the RFY page every 3 to 8 seconds as long as the tab is not focused and there are no RFY items showing.
If an RFY item is found, or a CAPTCHA occurs, the script will stop running.

You will need a userscript plugin such as GreaseMonkey, VoilentMonkey, FireMonkey or TamperMonkey to run this script.

The script will work with both Vine-Helper and Hide-Vine-Items script, maybe others. If it hides items, it'll probably work.

### How to use
- Use [this link](https://raw.githubusercontent.com/Jimbo5431/RFY-Userscript/main/RFY.user.js) to install the script for RFY only, or [this link](https://raw.githubusercontent.com/Jimbo5431/RFY-Userscript/main/RFY_AFA.user.js) for AFA as well. To include AI, use [this link](https://raw.githubusercontent.com/Jimbo5431/RFY-Userscript/main/RFY_AFA_AI.user.js).
- In site settings in chrome, or permissions > autoplay in firefox, make sure to allow amazon.co.uk for sound.
- Open RFY page, hide all items.
- Refresh page.
- Click somewhere in the page to enable sound to work.
- Go use a different tab or window.

After an item has been found, the script will be stopped until you refresh the page manually.
Just hide any items you don't want, hit F5, and click somewhere in the page again before focusing on a different window.

**${\textsf{\color{red}Important: Make sure you have clicked somewhere in the page before doing something else, or sound may not work.}}$**
**${\textsf{\color{red}This is due to chrome policies on auto play.}}$**

**${\textsf{\color{red}Important: Page refresh only works when the tab/window is not currently active.}}$**

### How to update
- Use [this link](https://raw.githubusercontent.com/Jimbo5431/RFY-Userscript/main/RFY.user.js) to update the script for RFY only, or [this link](https://raw.githubusercontent.com/Jimbo5431/RFY-Userscript/main/RFY_AFA.user.js) for AFA as well. For AI, it's [this link](https://raw.githubusercontent.com/Jimbo5431/RFY-Userscript/main/RFY_AFA_AI.user.js)
