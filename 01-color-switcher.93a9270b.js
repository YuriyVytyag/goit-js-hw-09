!function(){var t={buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]")};console.log(t.buttonStop);var o=document.querySelector("body");console.log(o);var n=null;function e(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.buttonStart.addEventListener("click",(function(){n=setInterval(e,1e3),t.buttonStart.disabled=!0})),t.buttonStop.addEventListener("click",(function(){clearInterval(n),t.buttonStart.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.93a9270b.js.map
