const stickyCloseButton = document.getElementById("stickyCloseButton");
const weatherCloseButton = document.getElementById("weatherCloseButton");
const stickyApp = document.getElementById("stickyIcon");
const stickyNote = document.getElementById("stickyApp");
const weatherIcon = document.getElementById("weatherIcon");
const weatherApp = document.getElementById("weatherApp");
const currentAppMenuButton = document.getElementById("currentAppMenuButton");

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
