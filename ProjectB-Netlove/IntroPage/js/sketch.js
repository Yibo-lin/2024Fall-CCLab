let hearts = []; 
let heartSymbols = ["♡", "❤️", "🩷", "🩵", "🧡"]; 
let heartSize = 40; 
let clickCount = 0;
let defaultIMG;
let happyIMG;
let isHappy = false;
let switchFrame = 0;
let happyDuration = 60;
let failSound;
let clickSound;

let ph = [
  {ph:"Meet Your New Digital Best Friend!", x:-1600, y:260, color: 'red', size: 26},
  {ph:"Keep it alive (or don‘t)", x:-430, y:80, color: 'grey', size: 30},
  {ph:"An escape from real life in 3024", x:-1200, y:140, color: 'green', size: 28},
  {ph:"A Great interactive way to learn about this species: HUMAN BEINGS", x:-750, y:360, color: 'yellow', size:28},
  {ph:"Bored? Lonely? Here's a perfect ✨human pet✨", x:-140, y:210, color: 'black', size: 32},
  {ph:"❤️❤️❤️🩷🧡💛🥰💚🩵💙💜🤎🩶🤍🖤", x:-20, y:310, color: 'purple', size: 30},
];

function preload(){
  defaultIMG = loadImage("../assets/default.png");  // load image
  happyIMG = loadImage("../assets/happy.png");
  failSound = loadSound("../sound/introbackground.wav");
  clickSound = loadSound("../sound/introclicking.wav");
}

function setup() {
  let canvas = createCanvas(1200, 600);

  canvas.parent("p5-canvas-container");
}
  
function draw() {
  background(139, 134, 200);
  
  fill('black');
  textSize(heartSize);
  for (let col = 0; col < 30; col++) {
    for (let row = 0; row < 15; row++) {
      theHeart = 0;
      if (col * 15 + row<hearts.length){
          theHeart = hearts[col * 15 + row];
      }
      text(heartSymbols[theHeart], col * heartSize + heartSize / 2, row * heartSize + heartSize / 2 + 15);
    }
  }

  if(isHappy){
    scale(0.8);
    image(happyIMG, width/2 - 50, height/2 - 50);
  }
  else{
    scale(0.8);
    image(defaultIMG, width/2 - 50, height/2 - 50);
  }

  fill('yellow');
  textSize(36);
  textAlign(CENTER);
  textStyle(BOLD);
  if(isHappy){
    text('CLICK TO GO', width/2+120, height/2 + 250);
  }else{
    text('CLICK TO CHARGE', width/2+120, height/2 + 250);
  }
  // text(hearts[1], 10,30);
  // for (let i = 0; i<6; i++){
  //   textSize(ph[i].size);
  //   fill(ph[i].color);
  //   text(ph[i].ph, ph[i].x + frameCount % 3600, ph[i].y);
  // }
}

function mousePressed() {
  if (mouseX >= width / 2 - 50 && mouseX <= width / 2 + 50 &&
    mouseY >= height / 2 - 50 && mouseY <= height / 2 + 50) 
    {
      if(isHappy)
        window.location.href="../GamePage";

      clickSound.play();
      
      for (let i = 0; i < 45; i++) {
        hearts.push(int(random(1, heartSymbols.length)));
      }
      
      clickCount++;
      if(clickCount == 10) {
        isHappy = true;
      }
    }else{
      failSound.play();
    }
}