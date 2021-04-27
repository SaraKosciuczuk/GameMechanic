// canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var wallet = 100;

function playGame() {
    //alert("Wave 1 incoming");
    //console.log("wave 1 incoming");
}

// makes button disapear on click
function buttonGone() {
    var x = document.getElementById("playButton");
      x.style.display = "none";
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

// update
function update() {
    enemyMovement();
}

// enemy variables
const ENEMY_SIZE = 25;
var enemyXpos = 0;
var enemyYpos = 230;
var enemyXspeed = 1;
var enemyYspeed = 0;
var enemyHealth = 5;

// rectangle enemies
function enemy() {
    enemyRect(enemyXpos, enemyYpos, ENEMY_SIZE, ENEMY_SIZE, 'blue');
}

// for enemy
function enemyRect(x,y,w,h,colour) {
    ctx.fillStyle = colour;
    ctx.fillRect(x,y,w,h);
}

// enemy movement
function enemyMovement() {
    enemyXpos += enemyXspeed;

    if(enemyXpos == 800) {
        playerHealth = playerHealth - 1;
        enemyYpos = Math.floor(Math.random()*400 - 25);
        enemyXpos = 0; 
    }

    if(playerHealth == 0){
        enemyXspeed = 0;
        enemyXpos = 0;
        enemyYpos = 0;

        alert('You lose');
    }
}

function shootEnemy() {
     if(enemyHealth == 0){
        alert('Enemies are getting faster, can you keep up?')
        enemyHealth += 10;
        enemyXspeed += 1;
    }
    else{
        enemyXpos = 0;
        enemyYpos = Math.floor(Math.random()*400 - 25);
        enemyHealth = enemyHealth - 1;
    }
} 

// draw
function draw() {
    //console.log("draw function logged");
    ctx.clearRect(0,0, canvas.width, canvas.height);

    enemy();
    animate();
    towerChange();
    path();
}

// animation
function animate() {
    drawPlayerHealth();
}

// gameloop
function gameLoop() {
    update();
    draw();
    window.requestAnimationFrame(gameLoop);
}

// draws the tower images
function towerChange() {
    //console.log("tower has changed");

    var select = document.getElementById("towers").value;

    if (select === "tower_1"){
        ctx.drawImage(tower1, 600,80,130,130);
    }
    else if(select == "tower_2"){
        ctx.drawImage(tower2, 600,80,130,130);
    }
    else if(select == "tower_3"){
        ctx.drawImage(tower3, 600,80,130,130);
    }

    document.getElementById("myCanvas").focus();
}

// path
function path(){
    //ctx.fillStyle = 'rgba(103, 128, 159, 1)'; // colour = "hoki"
    //ctx.fillRect(0, 180, 800, 100);
    //ctx.rect(0, 180, 800, 100);
    //ctx.stroke();
}


