alert("drag loaded!");

const element = document.querySelector(".draggable");
console.log(element);

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
    alert(`${pos.x} ${pos.y} ${pos.offsetX} ${pos.offsetY}`);
});
