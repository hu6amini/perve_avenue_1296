//Menuwrap Icons
function waitForElement(e,t){const o=new MutationObserver((r=>{for(const i of r)if("childList"===i.type&&document.querySelector(e)){o.disconnect(),t(document.querySelector(e));break}}));o.observe(document.body,{childList:!0,subtree:!0})}function addIdsToMenuItems(e){const t=e.querySelector(".left");t&&(t.style.visibility="visible");e.querySelectorAll(".left li.menu").forEach((e=>{e.querySelector(".nick")?e.id="nick":e.querySelector('a[href="https://msg.forumcommunity.net/?act=Msg&CODE=01&c=655775"]')?e.id="messenger":e.querySelector('a[href="https://msg.forumcommunity.net/?act=UserCP&CODE=26&c=655775"]')?e.id="topics":e.querySelector('a[href="#notifications"]')?e.id="notif":e.querySelector('form[action="/?act=Mod"]')&&(e.id="mod");const t=e.querySelector("a span");t&&"&nbsp;Moderation"===t.innerHTML.trim()&&(e.id="mod");const o=e.querySelector("a span");o&&"&nbsp;Administration"===o.innerHTML.trim()&&(e.id="admin");e.querySelector('a[href="https://www.forumcommunity.net/?cid=655775"]')&&(e.id="admin")}));e.querySelectorAll(".left li:not(.menu)").forEach((e=>{const t=e.querySelector("a");t&&"HOME"===t.textContent.trim()&&(e.id="pahome"),t&&"/latestupdates"===t.getAttribute("href")&&(e.id="updates")}))}waitForElement(".menuwrap",addIdsToMenuItems);