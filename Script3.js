document.getElementById("CargarContenido").addEventListener("click", function(){

    const date = document.getElementById("Fecha").value;
    const pdfInput = document.getElementById("SubirPdf");
    const pdfFile = pdfInput.files[0];

    console.log("Botón presionado. Fecha ingresada:", date);

    document.getElementById("MostrarContenido").innerText = date;

    if (pdfFile) {
        const pdfUrl = URL.createObjectURL(pdfFile);
        console.log("URL del PDF:", pdfUrl);

        document.getElementById("MostrarPdf").src = pdfUrl;
    } else {
        alert("Por favor selecciona un PDF.");
    }

    if(date === ""){
    alert("Selecciona una fecha");
    return;
}

});