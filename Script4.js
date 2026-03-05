document.getElementById("Boton").addEventListener("click", function(){

    let color = document.getElementById("color").value;

    const imageInput = document.getElementById('SubirImagen');
    const imageFile = imageInput.files[0];

    const audioInput = document.getElementById('SubirAudio');
    const audioFile = audioInput.files[0];

    const videoInput = document.getElementById('SubirVideo');
    const videoFile = videoInput.files[0];

    console.log("Boton presionado. Color seleccionado:", color);

    document.body.style.backgroundColor = color;

    if (imageFile) {
        const imageReader = new FileReader();
        imageReader.onload = function(e) {
            document.getElementById('MostrarImagen').src = e.target.result;
        };
        imageReader.readAsDataURL(imageFile);
    } else {
        alert('Por favor, selecciona una imagen.');
    }

    if (audioFile) {
        const audioUrl = URL.createObjectURL(audioFile);
        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        audioElement.src = audioUrl;
        document.body.appendChild(audioElement);
    }

    if (videoFile) {
        const videoUrl = URL.createObjectURL(videoFile);
        const videoElement = document.createElement('video');
        videoElement.controls = true;
        videoElement.src = videoUrl;
        document.body.appendChild(videoElement);
    }

});