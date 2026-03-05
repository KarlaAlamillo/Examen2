document.getElementById("Boton").addEventListener("click", function(){

    
    var texto = document.getElementById("Texto").value;
    var email = document.getElementById("Correo").value;
    var contraseña = document.getElementById("Contraseña").value;

    alert("El Texto es: " + texto + "El correo es:" + email + "La contraseña es: " + contraseña);

    console.log("Texto:", texto, "Correo:", email, "Contraseña:", contraseña);
});
