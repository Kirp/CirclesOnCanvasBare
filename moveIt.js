var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var gball_x = canvas.width/2;
var rball_x = canvas.width/2;
var bball_x = canvas.width/2;


function draw()
{
    ctx.clearRect(0,0, canvas.width, canvas.height);

    //gball
    ctx.fillStyle = "#00FF00";
    ctx.beginPath();
    ctx.arc(gball_x,100,50, 0, Math.PI *2);
    ctx.fill();
    ctx.closePath();
    
    //rball
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(rball_x,110*2,50, 0, Math.PI *2);
    ctx.fill();
    ctx.closePath(); 
    
    //bball
    ctx.fillStyle = "#0000FF";
    ctx.beginPath();
    ctx.arc(bball_x,110*3,50, 0, Math.PI *2);
    ctx.fill();
    ctx.closePath();
    
    
}


function gameLoop() {
    // console.log("tick");
    draw();
    requestAnimationFrame(gameLoop);
}


// console.log("start loop");
gameLoop();