/*

 	MuW201: Tangible Computing
    Week 02 TenThousandX Assignment Examples

*/


function setup(){

  createCanvas(800,800)
  TenThousandX()

}


// Example: circle
// Based on https://editor.p5js.org/ftobon@heartofla.org/sketches/SkBy9XP97

function TenThousandX(){

  stroke(0,25)
  // strokeWeight(3)
  noFill()

  for (var x = 0; x < 10000; x++){

    // let angle = TWO_PI
    let angle = x/10000*TWO_PI
    let rad = cos(x/250)*50
    let rInner = random(width/32,width/4)
    let rOuter = random(width/4,width/2)
    let a = rInner * sin(angle) + width/2  
    let b = rInner * cos(angle) + height/2
    let c = rOuter * sin(angle) + width/2 
    let d = rOuter * cos(angle) + height/2
    ellipse(a, b, rad,rad)
    ellipse(c,d, rad,rad)
    line(a,b,c,d)
 
  }

}

