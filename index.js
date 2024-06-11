const closeButton = document.getElementById("closeButton");
const stickyApp = document.getElementById("stickyApp");

closeButton.addEventListener("click", () => {
    stickyNote.style.display = "none";
});

stickyApp.addEventListener("click", () => {
    stickyNote.style.display = "block";
});
