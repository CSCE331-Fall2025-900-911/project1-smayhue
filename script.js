function toggleCSS() {
    const link = document.getElementById("stylesheet");
    if (link.getAttribute("href") === "style1.css"){
	link.setAttribute("href", "style2.css");
        localStorage.setItem("selectedStyle", "style2.css");
    }
    else {
	link.setAttribute("href", "style1.css");
	localStorage.setItem("selectedStyle", "style1.css");
    }
}

window.onload = function () {
    const savedStyle = localStorage.getItem("selectedStyle");
    if (savedStyle) {
      document.getElementById("stylesheet").setAttribute("href", savedStyle);
    }
}