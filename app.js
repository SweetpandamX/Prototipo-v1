document.getElementById('open-camera').addEventListener('click', function() {
    const video = document.getElementById('video');
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function(error) {
            console.error("Error al acceder a la cámara: ", error);
        });
});

document.getElementById('capture').addEventListener('click', function() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');

    // Aquí puedes hacer algo con la imagen capturada, como mostrarla o enviarla
    console.log(imageData);
    document.getElementById('results-output').innerHTML = '<img src="' + imageData + '" alt="Captura">';
});
