const elements = document.querySelectorAll(".draggable");

const pos = {
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
};

let isDragging = false;

elements.forEach((element) => {
    element.addEventListener("mousedown", (event) => {
        const prevZIndex = parseInt(element.style.zIndex, 10) || 0;
        element.style.zIndex = prevZIndex + 1;

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
});
