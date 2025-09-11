function changeCSS(filename) {
    const link = document.getElementById("stylesheet");
    link.setAttribute("href", filename);
    localStorage.setItem("selectedStyle", filename);
}

window.onload = function () {
    const savedStyle = localStorage.getItem("selectedStyle");
    if (savedStyle) {
      document.getElementById("stylesheet").setAttribute("href", savedStyle);
    }
}