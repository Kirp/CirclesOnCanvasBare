var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var ball_radius = 50;
var ball_Y_space = 110;
var ball_speed = 300;
var currentBallToMove = 0;

var ballPositionList = [ball_radius, ball_radius, ball_radius];
var completeFlag = false;

function move(delta)
{
    if(ballPositionList[currentBallToMove]<canvas.width-ball_radius)
    {
        ballPositionList[currentBallToMove]+=ball_speed * delta;
        return;
    }

    if(currentBallToMove<ballPositionList.length){
        currentBallToMove++;
        return;
    }
    completeFlag = true;
}

function draw()
{
    ctx.clearRect(0,0, canvas.width, canvas.height);

    //fill it with white
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0, canvas.height, canvas.width);

    //gball
    ctx.fillStyle = "#00FF00";
    ctx.beginPath();
    ctx.arc(ballPositionList[0],ball_Y_space, ball_radius, 0, Math.PI *2);
    ctx.fill();
    ctx.closePath();
    
    //rball
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(ballPositionList[1],ball_Y_space*2, ball_radius, 0, Math.PI *2);
    ctx.fill();
    ctx.closePath(); 
    
    //bball
    ctx.fillStyle = "#0000FF";
    ctx.beginPath();
    ctx.arc(ballPositionList[2],ball_Y_space*3, ball_radius, 0, Math.PI *2);
    ctx.fill();
    ctx.closePath();
}

function reset(){
    currentBallToMove = 0;
    ballPositionList = [ball_radius, ball_radius, ball_radius];
    completeFlag = false;   
}

let deltaTime = 0;
let lastDrawTime=0;
function gameLoop(drawTime) {
    
    drawTime *= 0.001;
    deltaTime = drawTime - lastDrawTime;
    lastDrawTime = drawTime;
    move(deltaTime);
    draw();
    requestAnimationFrame(gameLoop);
}


// console.log("start loop");
requestAnimationFrame(gameLoop);