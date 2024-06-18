const stickyCloseButton = document.getElementById("stickyCloseButton");
const weatherCloseButton = document.getElementById("weatherCloseButton");
const stickyApp = document.getElementById("stickyIcon");
const stickyNote = document.getElementById("stickyApp");
const weatherIcon = document.getElementById("weatherIcon");
const weatherApp = document.getElementById("weatherApp");
const currentAppMenuButton = document.getElementById("currentAppMenuButton");
const stickyAppDropDown = document.getElementById("stickyAppDropDown");
const voiceMemoCloseButton = document.getElementById("voiceMemoCloseButton");
const voiceMemoApp = document.getElementById("voiceMemoApp");

stickyCloseButton.addEventListener("click", () => {
    stickyNote.style.display = "none";
});

stickyApp.addEventListener("click", () => {
    stickyNote.style.display = "block";
    currentAppMenuButton.textContent = "Stickies";
});

weatherCloseButton.addEventListener("click", () => {
    weatherApp.style.display = "none";
});

weatherIcon.addEventListener("click", () => {
    weatherApp.style.display = "block";
});

currentAppMenuButton.addEventListener("click", () => {
    if (stickyAppDropDown.style.display == "none") {
        stickyAppDropDown.style.display == "block";
    } else {
        stickyAppDropDown.style.display == "none";
    }
});

voiceMemoIcon.addEventListener("click", () => {
    voiceMemoApp.style.display = "block";
});

voiceMemoCloseButton.addEventListener("click", () => {
    voiceMemoApp.style.display = "none";
});
