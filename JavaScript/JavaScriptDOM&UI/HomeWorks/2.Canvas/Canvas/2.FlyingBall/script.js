function flyCircle() {
    var canvas = document.getElementById("firstCanvas"),
        canvasCtx = canvas.getContext('2d'),
        coordX = 200,
        coordY = 200,
        radius = 30,
        width = 800,
        height = 500,        
        updateX = 5,
        updateY = 5,
        step = 2;

    moveBall();

    function moveBall() {
            canvasCtx.clearRect(0, 0, width, height);
            if (coordY >= (height - radius)) {
                updateY -= step;   
            }
            if (coordY <= radius) {
                updateY += step;
            }
            if (coordX >= (width - radius)) {
                updateX -= step;
            }
            if (coordX <= radius) {
                updateX += step;
            }
            coordX += updateX;
            coordY += updateY;
            draw();
            requestAnimationFrame(moveBall);
    }

    function draw() {
        canvasCtx.fillStyle = 'purple';
        canvasCtx.strokeStyle = 'red';
        canvasCtx.beginPath();
        canvasCtx.arc(coordX, coordY, radius, 0, 2 * Math.PI);
        canvasCtx.fill();
        canvasCtx.stroke();         
    }
}
flyCircle();