

function setup() {
  createCanvas(1750,1080);
  angleMode(RADIANS);


}

function draw() {
  let hr = hour();
  let mn = minute();
  let sc = second();


push();
if (hr > 12 ){
  background(25,25,112);
} else if(hr < 12){
  background(255,255,224);
}
pop();



  translate(width/2,height/2);
  rotate(-1.57079633);
  scale(2.5);


  drawHr();
  drawMn();
  drawSc();
  drawDay();
  drawMonth();

  push();
  drawYear();
  pop();

}

function drawYear() {

  var y = year();
  strokeWeight(1);
  rotate(1.5708);
textSize(30);
  // noFill();
  stroke(255,20,0);
  fill(255,20,0);
   let end6 = map(y, 2000,3000,0,6.28319);
  arc(0,0,200,200,0,end6);

  text('Year:\n' + y, -33,-10 );

}

function drawMonth() {
  var m = month();
  strokeWeight(10);
  noFill();
  stroke(255,255,0);
  let end5 = map(m % 12, 0,12,0,6.28319);
  arc(0,0,220,220,0,end5);
}

function drawDay() {
  var d = day();

  strokeWeight(10);
  noFill();
  stroke(173,255,47);
  let end4 = map(d, 0,30,0,6.28319);
  arc(0,0,240,240,0,end4);

}

function drawHr() {
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(10);
  noFill();
  stroke(139,0,139);


   let end3 = map(hr % 12,0,12,0,6.28319);
	arc(0,0,260,260,0,end3);

}
function drawMn() {
  let hr = hour();
  let mn = minute();
  let sc = second();
  strokeWeight(10);
  noFill();
  stroke(255, 0, 0);
  stroke(255,165,0);
   let end2 = map(mn,0,60,0,6.28319);
  arc(0,0,280,280,0,end2);
}
function drawSc() {
  let hr = hour();
  let mn = minute();
  let sc = second();
  strokeWeight(10);
  noFill();
stroke(0,255,255);
  let end1 = map(sc,0,60,0,6.28319);
  arc(0,0,300,300,0,end1);
}
