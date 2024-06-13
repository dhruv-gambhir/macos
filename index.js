const closeButton = document.getElementById("closeButton");
const stickyApp = document.getElementById("stickyApp");
const stickyNote = document.getElementById("stickyNote");

closeButton.addEventListener("click", () => {
    stickyNote.style.display = "none";
});

stickyApp.addEventListener("click", () => {
    stickyNote.style.display = "block";
});
