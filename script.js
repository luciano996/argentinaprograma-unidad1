document.getElementById("estado").addEventListener("change", function () {
    var estadoSeleccionado = this.value;
    document.getElementById("estadoSeleccionado").textContent = estadoSeleccionado;
});