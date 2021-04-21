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

// update
function update() {
    towerChange();
}

// draw
function draw() {
    console.log("draw function logged");
    ctx.clearRect(0,0, canvas.width, canvas.height);

    animate();

    // path
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 180, 800, 100);
    ctx.rect(0, 180, 800, 100);
    ctx.stroke();
}

// animation
function animate() {
    drawPlayerHealth();
}

// gameloop
function gameLoop() {
    update();
    draw();
}

// draws the tower images
function towerChange() {
    console.log("tower has changed");

    var select = document.getElementById("towers").value;

    if (select === "tower_1"){
        ctx.drawImage(tower1, 0,0);
    }
    else if(select == "tower_2"){
        ctx.drawImage(tower2, 0,0);
    }
    else if(select == "tower_3"){
        ctx.drawImage(tower3, 0,0);
    }

    document.getElementById("myCanvas").focus();
}

