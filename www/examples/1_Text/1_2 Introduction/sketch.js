/* 

  Tangible Computing Example 1_1
  Sayjel Vijay Patel

*/


// let message = 'DIDI Tangible Computing Spring 2020'

let message = ' SayjelVijayPatelWorks '
let counter = 0

function updateText() {

  message = document.getElementById("myInput").value;
  
}

function printScreen(){

  save('screenshot.jpg')
}


function setup() {

  createCanvas(2000,3000);
  noFill()
  stroke(0)
  textAlign(CENTER)
  textFont('Consolas')
  background(255)

}


function draw(){

  noStroke()
  fill(255,30)
  rect(0,0,width,height)
  // background(255)
  let index = 0
  // let spacing = width/(message.length+2)
  let spacing = width/message.length
  noFill(0)
  textSize(spacing)
  // textSize(spacing*2+sin(counter)*spacing)
  let newMessage = message

  let num = 1

  
  for (var x = 1; x < width/spacing; x++){

  // message = message.replace(/^(.{2})(.+)/, '$2$1');
    // let temp = message.slice(0,20)

    // newMessage = newMessage.substring(1) + newMessage.charAt(0);
   
    for (var y = 1; y < height/spacing; y++){

      if (y%2 > 0){
        if (x%2 > 0) continue 
      } else if (x%2 < 1){
        continue 
      }

      let letter = message[index]

      push()
        // if (dist(mouseX, mouseY,x*spacing,y*spacing) < 50){
        //   stroke(255,0,0)
        // } else {
        //   stroke(0)
        // }
        // stroke(0,25)
        // strokeWeight(1)
        fill(34,155,215,25)

        translate(x*spacing,y*spacing)
        scale(1+Math.abs(sin(counter)))

        for (var p = 0; p<Math.PI/8; p += Math.PI/32){
          push()
          rotate(-Math.PI/8+p)
          text(letter,0,0)
          pop()
        }
        // stroke(0)
        // strokeWeight(3)
        rotate(-Math.PI/8+p)
        text(letter,0,0)
      pop()

    }

    index++


  }
  message = newMessage
  counter += 0.02
}