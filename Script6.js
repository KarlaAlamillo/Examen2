document.addEventListener("DOMContentLoaded", () => {
    const buscador = document.getElementById("buscador");
    const boton = document.getElementById("btnBuscar");
    const resultados = document.getElementById("resultados");

    const paginas = ["index.html", "Pagina2.html", "Pagina3.html", "Pagina4.html", "Pagina5.html", "Pagina7.html", "Pagina8.html"];

    boton.addEventListener("click", async () => {
        const palabra = buscador.value.toLowerCase();
        resultados.innerHTML = "";

        if (palabra.lengh == 0){
            resultados.innerHTML = "<li>Escribe una palabra para buscar.</li>";
            return;
        }

        let encontrado = false;

        for (let pagina of paginas) {
            try{
                const respuestas = await fetch(pagina);
                const texto = await respuestas.text();

                if (texto.toLowerCase().includes(palabra)) {
                    const li = document.createElement("li");
                    li.innerHTML = `La palabra <br>${palabra}</br> está en <a href="${pagina}">${pagina}</a>`;
                    resultados.appendChild(li);
                    encontrado = true;
                }
            }catch (error){
                console.error("Error al leer la página:", pagina, error);
            }
        }

        if (!encontrado){
            resultados.innerHTML = `<li>No se encontró la palabra en el sitio.</li>`;
        }
    });
});