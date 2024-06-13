const element = document.querySelector(".draggable");

const pos = {
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
};

let isDragging = false;

element.addEventListener("mousedown", (event) => {
    isDragging = true;
    pos.x = event.clientX;
    pos.y = event.clientY;
    pos.offsetX = element.offsetLeft;
    pos.offsetY = element.offsetTop;
    element.addEventListener("mousemove", (event) => {});
    element.addEventListener("mouseup", (event) => {
        element.removeEventListener("mousedown", (event) => {
            alert("mouse lifted");
        });
    });
});
