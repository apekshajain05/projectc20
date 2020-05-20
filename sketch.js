var colour={
 r : 25,
 g : 50,
 b : 0
}
var p={
  x:100,
  y:50
}

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  
  createCanvas(1200,600);
  background(400);
}


function draw(){
    colour.r=random(0,255);
    colour.g=random(63,255);
    colour.b=random(0,89);
    p.x=random(0,width);
    p.y=random(0,height);
    noStroke();
    fill(colour.g,colour.r,colour.b,100);
    ellipse(p.x,p.y,50,50);
    textSize(50);
    fill("purple");
    text("Happy Birthday :)",500,300);
    
    

    


  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}