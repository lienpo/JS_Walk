var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height - 30;

var dx = 2;
var dy = -2;

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    if(y + dy < ballRadius || y + dy > canvas.height - ballRadius){
	dy = -dy;
    }
    if(x + dx < ballRadius || x + dx > canvas.width - ballRadius){
	dx = -dx;
    }
    
    if(rightPressed && paddleX < canvas.width - paddleWidth){
	paddleX += 7;
    }
    else if(leftPressed && paddleX > 0){
	paddleX -= 7;
    }
    x += dx;
    y += dy;
}

setInterval(draw, 10);
