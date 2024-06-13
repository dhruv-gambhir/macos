const element = document.querySelector(".draggable");

const pos = {
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
};

let isDragging = false;

element.addEventListener("mousedown", (event) => {
    const computedStyle = window.getComputedStyle(element);
    const resizeHandleSize = 10;

    const offsetRight = parseInt(computedStyle.width) - event.offsetX;
    const offsetBottom = parseInt(computedStyle.height) - event.offsetY;

    if (offsetRight <= resizeHandleSize && offsetBottom <= resizeHandleSize) {
        return;
    }

    isDragging = true;
    pos.x = event.clientX;
    pos.y = event.clientY;
    pos.offsetX = element.offsetLeft;
    pos.offsetY = element.offsetTop;

    const onMouseMove = (moveEvent) => {
        if (!isDragging) return;

        const dx = moveEvent.clientX - pos.x;
        const dy = moveEvent.clientY - pos.y;

        element.style.left = `${pos.offsetX + dx}px`;
        element.style.top = `${pos.offsetY + dy}px`;
    };

    const onMouseUp = () => {
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
});
