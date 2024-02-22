
function changeTextColor(color) {
    document.getElementById("box").style.color = color;
}

function changeBgColor(color) {
    document.getElementById("box").style.backgroundColor = color;
}

function changeBorderRadius(radius) {
    document.getElementById("box").style.borderRadius = radius + "px";
}

function changeStyle() {
    const fontSize = document.getElementById("fontSize").value;
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;

    document.getElementById("box").style.fontSize = fontSize;
    document.getElementById("box").style.width = width + "px";
    document.getElementById("box").style.height = height + "px";
}