// canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var wallet = 100;

window.onload = function(){

     // path
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 180, 800, 100);
    ctx.rect(0, 180, 800, 100);
    ctx.stroke();
}

function playGame() {
    alert("Wave 1 incoming");
    console.log("wave 1 incoming");
}

// makes button dosapear on click
function buttonGone() {
    var x = document.getElementById("playButton");
      x.style.display = "none";
  }

// towers
function buyTower() {
    wallet -= 50;
    console.log(wallet);
}

function sellTower() {
    wallet += 50;
    console.log(wallet);
}

// healthbar 
var playerHealth = 10;

function drawPlayerHealth() {
    var width = 750;
    var height = 20;
    var max = 10;
    var val = playerHealth;
  
    // background under health
    ctx.fillStyle = "#000000";
    ctx.clearRect(0, 0, width, height);
    ctx.fillRect(20, 20, width, height);
  
    // fill healthbar
    ctx.fillStyle = "#e60000";
    var fillVal = Math.min(Math.max(val / max, 0), 1);
    ctx.fillRect(20, 20, fillVal * width, height);
}

// tower images
var tower1 = new Image();
var tower2 = new Image();
var tower3 = new Image();
tower1.src = "./tower1.png";
tower2.src = "./tower2.png";
tower3.src = "./tower3.png";
//towerX = 50;

// update
function update() {
    //towerX++;
}

// draw
function draw() {
    //console.log("logged");
    //ctx.clearRect(0,0, canvas.width, canvas.height);
    //ctx.drawImage(tower3, 20,20);
    //ctx.fillStyle = "#00FF00";
    //ctx.fillRect(50,50,100,100);

    animate();
}

// animation
function animate() {
    drawPlayerHealth();
    //ctx.drawImage(tower1, 50, 50, 100, 100);
    //requestAnimationFrame(animate);
}

// gameloop
function gameLoop() {
    //update();
    draw();
    //window.requestAnimationFrame(gameloop.bind(this));
}
    
function loop() {
    setTimeout(gameLoop, 1000); //1000 = 1000ms = 1s
}

function towerChange() {
    console.log("tower has changed");
}


//function dropdownButton() {
   // document.getElementById("dropbtn").classList.toggle("show");
//}