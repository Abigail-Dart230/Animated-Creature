let yPos = 200;
let speed= -3;

let REx = 180;
let RExspeed= -7;

let Seye = 200;

let A = 350;
let Aspeed=-2
let B = 250;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50, 51, 82);
  
  //sun
  fill(228, 228, 237);
  stroke(228,228,237);
  ellipse(300,yPos,150);
  
  yPos = yPos+speed;
  console.log(yPos);
  
  if (yPos <=-80)
  {speed = -speed};
  
  if (yPos >=400)
  {speed= -speed};
  
  //sky eye
  fill(58,73,145);
  stroke(171,50,41)
  ellipse(300,Seye,50);
  Seye = Seye+speed;
  console.log(Seye);
  
  if (Seye <=-60)
    {speed= -speed};
  if (Seye >=300)
    {speed= -speed};
  
  //creature
  strokeWeight(3);
  stroke(114,81,138);
  fill(114, 81, 138);
  rect(120,150,180,100);
  fill(247, 245, 245);
  ellipse(120,150,100,100)
  ellipse(190,150,100,100)
  
  
  //eyes
  fill(171, 50, 41);
  stroke(171,50,41);
  ellipse(120,150,35,35);
  
  //right pupil
  ellipse(REx,150,45,45);
  REx = REx+RExspeed;
  console.log (REx);
  if (REx <=-160)
    {Rexspeed= -RExspeed};
  if (REx >=170)
    {RExspeed= -RExspeed};
  
  //left pupil
  fill(58, 73, 145);
  ellipse(120,150,23,28);
  
  
  //mouth
  stroke(58,73,145);
  rect(30,190,120,20);
  rect(50,220,120,30);
  fill(247,245,245);
  triangle(140,180,110,220,170,220);
  
  //tail
  strokeWeight(6);
  line(A,B,300,150);
  A = A+Aspeed;
  console.log(A);
  if (A <=-330)
    {Aspeed= -Aspeed};
  if (A >=340)
    {Aspeed= -Aspeed}
  B= B+Aspeed;
  console.log(B);
  
  //feet
  strokeWeight(6);
  stroke(114,81,138)
  line (225,250,250,300);
  line (225,250,200,300);
  fill(114,81,138);
  ellipse(200,300,20,20);
  ellipse(250,300,20,20);
  
  //ground
  fill(56, 84, 53);
  stroke(56,84,53);
  rect(0,315,400,100);
  
  
  //if statement for restarting animation
 
  
}