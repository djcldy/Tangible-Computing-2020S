/* 

  Tangible Computing Example 1_1
  Sayjel Vijay Patel

*/


let message = 'DIDI Tangible Computing Spring 2020'
let counter = 0

function updateText() {

  message = document.getElementById("myInput").value;
  
}

function printScreen(){

  save('screenshot.jpg')
}


function setup() {

  createCanvas(1800,1800);
  noFill()
  stroke(0)
  textAlign(CENTER)
  textFont('Consolas')

}


function draw(){

  noStroke()
  fill(255,25)
  rect(0,0,width,height)
  let index = 0
  let spacing = width/(message.length+2)
  noFill(0)
  textSize(spacing)
  textSize(spacing*2+sin(counter)*spacing)


  for (var x = 1; x < width/spacing; x++){
   
    for (var y = 1; y < height/spacing; y++){

      if (y%2 > 0){
        if (x%2 > 0) continue 
      } else if (x%2 < 1){
        continue 
      }

      let letter = message[index]

      push()
        if (dist(mouseX, mouseY,x*spacing,y*spacing) < 50){
          stroke(255,0,0)
        } else {
          stroke(0)
        }
        translate(x*spacing,y*spacing)
        rotate(counter)
        text(letter,0,0)
      
      pop()

    }

    index++


  }
  counter += 0.005
}