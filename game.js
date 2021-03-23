
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

window.onload = function(){

     // path
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 180, 800, 100);
    ctx.rect(0, 180, 800, 100);
    ctx.stroke();
}


// health bar
const healthBar = {
    width: canvas.width,
    height: 50,
}

// animation
function animate(){
    // health bar
    ctx.fillStyle = 'red';
    ctx.fillRect(0,0,healthBar.width, healthBar.height);
    requestAnimationFrame(animate);
}
animate();