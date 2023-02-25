this.onload = () => {
    const loadBox = document.createElement('div')
    loadBox.className = "loadBox"
    document.body.getElementById("page").appendChild(loadBox)
}

function start() {
    loadBox.animate({
        width: `100%`,
        height: `100%`
    }, { duration: 1200, fill: "forwards" });
}
