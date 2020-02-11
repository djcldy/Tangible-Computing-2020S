/*

    Example Code: Interactive Gradient Array

*/


function setup(){

  createCanvas(1000,600);
  stroke(255);

}

function draw(){
  background(0)

  let numCol = 6
  let numRow = 30
  let stepX = width / numCol // height of box 
  let stepY = height / numRow // width of box  

  for (var col = 0; col < numRow; col++){

    for (var row = 0; row < numCol; row++){
    
      fill(col/numCol*60,row/numRow*100,mouseX/width*220)   
      push()
      translate(row*stepX,col*stepY)
      rotate(dist(row*stepX,col*stepY,mouseX,mouseY)/400*TWO_PI) 
      ellipse(0,0,stepX,stepY) 
      quad(10,60,20,10,20,50)

      pop()
      

    }

  }

}