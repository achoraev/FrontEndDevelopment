var canvas = document.getElementById("firstCanvas");
var canvasCtx = canvas.getContext('2d');
// draw face
canvasCtx.beginPath();
canvasCtx.fillStyle = 'rgb(107, 187, 201)';
canvasCtx.strokeStyle = 'rgb(0, 0, 201)';
canvasCtx.arc(120,120, 50, 0, 2*Math.PI);
canvasCtx.fill();
canvasCtx.stroke();
canvasCtx.beginPath();
canvasCtx.moveTo(110, 130);
canvasCtx.lineTo(100, 130);
canvasCtx.lineTo(110, 110);
canvasCtx.stroke();
// mouth
canvasCtx.save();
canvasCtx.scale(3,1);
canvasCtx.beginPath();
canvasCtx.arc(40,150, 5, 0, 2*Math.PI);
canvasCtx.closePath();
canvasCtx.stroke();
canvasCtx.restore();
// eyes
canvasCtx.save();
canvasCtx.scale(2,1);
canvasCtx.beginPath();
canvasCtx.arc(50,100, 5, 0, 2*Math.PI);
canvasCtx.moveTo(70, 100);
canvasCtx.arc(65,100, 5, 0, 2*Math.PI);
canvasCtx.closePath();
canvasCtx.stroke();
canvasCtx.restore();
canvasCtx.save();
canvasCtx.scale(1,2);
canvasCtx.fillStyle = 'rgb(0, 0, 0)';
canvasCtx.beginPath();
canvasCtx.arc(95,50, 2, 0, 2*Math.PI);
canvasCtx.moveTo(125, 50);
canvasCtx.arc(125,50, 2, 0, 2*Math.PI);
canvasCtx.closePath();
canvasCtx.fill();
canvasCtx.restore();
// hat 
canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
canvasCtx.fillStyle = 'rgb(0, 0, 255)';
canvasCtx.save();
canvasCtx.scale(4,1);
canvasCtx.beginPath();
canvasCtx.arc(30,75, 15, 0, 2*Math.PI);
canvasCtx.closePath();
canvasCtx.fill();
canvasCtx.stroke();
canvasCtx.restore();

canvasCtx.save();
canvasCtx.scale(3,1);
canvasCtx.beginPath();
canvasCtx.arc(40,65, 10, 0, 2*Math.PI);
canvasCtx.closePath();
canvasCtx.fill();
canvasCtx.stroke();
canvasCtx.restore();

canvasCtx.fillRect(90,25,60,40);
canvasCtx.beginPath();
canvasCtx.moveTo(90, 25);
canvasCtx.lineTo(90, 65);
canvasCtx.moveTo(150, 25);
canvasCtx.lineTo(150, 65);
canvasCtx.closePath();
canvasCtx.stroke();

canvasCtx.save();
canvasCtx.scale(3,1);
canvasCtx.beginPath();
canvasCtx.arc(40,25, 10, 0, 2*Math.PI);
canvasCtx.closePath();
canvasCtx.fill();
canvasCtx.stroke();
canvasCtx.restore();

// draw house
canvasCtx.beginPath();
canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
canvasCtx.fillStyle = 'rgb(153, 0, 0)';
canvasCtx.moveTo(540, 50);
canvasCtx.lineTo(400, 150);
canvasCtx.lineTo(680, 150);
canvasCtx.closePath();
canvasCtx.fill();
canvasCtx.stroke();
canvasCtx.fillRect(400,150,280,200);
canvasCtx.strokeRect(400, 150, 280, 200);
canvasCtx.fillStyle = 'rgb(0, 0, 0)';
// 1 window
canvasCtx.fillRect(420,170,50,30);
canvasCtx.fillRect(475,170,50,30);
canvasCtx.fillRect(420,205,50,30);
canvasCtx.fillRect(475,205,50,30);
// 2 window
canvasCtx.fillRect(550,170,50,30);
canvasCtx.fillRect(605,170,50,30);
canvasCtx.fillRect(550,205,50,30);
canvasCtx.fillRect(605,205,50,30);
// 3 window
canvasCtx.fillRect(550,260,50,30);
canvasCtx.fillRect(605,260,50,30);
canvasCtx.fillRect(550,295,50,30);
canvasCtx.fillRect(605,295,50,30);
// smoke
canvasCtx.fillStyle = 'rgb(153, 0, 0)';
canvasCtx.fillRect(587, 70, 26, 60);

canvasCtx.save();
canvasCtx.scale(3,1);
canvasCtx.beginPath();
canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
canvasCtx.arc(200,70, 4, 0, 2*Math.PI);
canvasCtx.closePath();
canvasCtx.fill();
canvasCtx.stroke();
canvasCtx.restore();

canvasCtx.moveTo(587, 70);
canvasCtx.lineTo(587, 130);
canvasCtx.moveTo(613, 70);
canvasCtx.lineTo(613, 130);

// door
canvasCtx.moveTo(430, 280);
canvasCtx.lineTo(430, 350);
canvasCtx.moveTo(470, 260);
canvasCtx.lineTo(470, 350);
canvasCtx.moveTo(510, 280);
canvasCtx.lineTo(510, 350);
canvasCtx.stroke();

canvasCtx.beginPath();
canvasCtx.arc(460,320, 3, 0, 2*Math.PI);
canvasCtx.moveTo(483, 320);
canvasCtx.arc(480,320, 3, 0, 2*Math.PI);
canvasCtx.stroke();
// bezier curve
canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
canvasCtx.moveTo(430, 280);
canvasCtx.bezierCurveTo(430, 260, 500, 250, 510, 280);
canvasCtx.stroke();

// bicycle
canvasCtx.fillStyle = 'rgb(107, 187, 201)';
canvasCtx.strokeStyle = 'rgb(0, 0, 201)';
canvasCtx.beginPath();
canvasCtx.arc(100,350, 40, 0, 2*Math.PI);
canvasCtx.moveTo(250, 350);
canvasCtx.arc(250,350, 40, 0, 2*Math.PI);
canvasCtx.closePath();
canvasCtx.stroke();
canvasCtx.fill();
// frame
canvasCtx.beginPath();
canvasCtx.moveTo(250, 350);
canvasCtx.lineTo(230, 250);
canvasCtx.lineTo(260, 220);
canvasCtx.moveTo(230, 250);
canvasCtx.lineTo(190, 260);
canvasCtx.moveTo(100, 350);
canvasCtx.lineTo(175, 350);
canvasCtx.lineTo(240, 300);
canvasCtx.lineTo(160, 300);
canvasCtx.closePath();
canvasCtx.stroke();

canvasCtx.beginPath();
canvasCtx.moveTo(175, 350);
canvasCtx.lineTo(150, 280);
canvasCtx.moveTo(120, 280);
canvasCtx.lineTo(180, 280);
canvasCtx.stroke();
canvasCtx.closePath();

canvasCtx.beginPath();
canvasCtx.arc(175,350, 10, 0, 2*Math.PI);
canvasCtx.closePath();
canvasCtx.stroke();
canvasCtx.closePath();

canvasCtx.beginPath();
canvasCtx.moveTo(168, 343);
canvasCtx.lineTo(160, 335);

canvasCtx.moveTo(182, 357);
canvasCtx.lineTo(190, 365);
canvasCtx.stroke();
canvasCtx.closePath();