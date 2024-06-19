const stickyCloseButton = document.getElementById("stickiesCloseButton");
const weatherCloseButton = document.getElementById("weatherCloseButton");
const stickiesIcon = document.getElementById("stickiesIcon");
const stickiesApp = document.getElementById("stickiesApp");
const weatherIcon = document.getElementById("weatherIcon");
const weatherApp = document.getElementById("weatherApp");
const currentAppMenuButton = document.getElementById("currentAppMenuButton");
const stickiesAppDropDown = document.getElementById("stickiesAppDropDown");
const voiceMemoCloseButton = document.getElementById("voiceMemoCloseButton");
const voiceMemoApp = document.getElementById("voiceMemoApp");
const voiceMemoIcon = document.getElementById("voiceMemoIcon");
const logo = document.getElementById("logo");
const appleLogoDropDown = document.getElementById("appleLogoDropDown");

logo.addEventListener("click", () => {
    if (appleLogoDropDown.style.display == "block") {
        appleLogoDropDown.style.display = "none";
    } else {
        appleLogoDropDown.style.display = "block";
    }
});

stickyCloseButton.addEventListener("click", () => {
    stickiesApp.style.display = "none";
});

stickiesIcon.addEventListener("click", () => {
    stickiesApp.style.display = "block";
    currentAppMenuButton.textContent = "Stickies";
});

weatherCloseButton.addEventListener("click", () => {
    weatherApp.style.display = "none";
});

weatherIcon.addEventListener("click", () => {
    weatherApp.style.display = "block";
});

currentAppMenuButton.addEventListener("click", () => {
    if (currentAppMenuButton.textContent == "Stickies") {
        stickiesAppDropDown.style.display = "block";
    } else {
        stickiesAppDropDown.style.display = "none";
    }
});

voiceMemoIcon.addEventListener("click", () => {
    voiceMemoApp.style.display = "block";
});

voiceMemoCloseButton.addEventListener("click", () => {
    voiceMemoApp.style.display = "none";
});
