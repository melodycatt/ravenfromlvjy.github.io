this.onload = () => {
    const container = document.getElementById("page")
    const loadBox = document.createElement('div')
    loadBox.className = "loadBox"
    container.appendChild(loadBox)
}

function start() {
    loadBox.animate({
        width: `100%`,
        height: `100%`
    }, { duration: 1200, fill: "forwards" });
}
