/*
    MuW201: Tangible Computing
    Week 02 TenThousandX Assignment Examples

*/


function setup(){

  createCanvas(800,800)
  TenThousandX()
  // OneThousandX()

}



function TenThousandX(){

	noFill()
	stroke(0,50)

  for ( var x = 0; x < 10000; x++ ){

    let a = random( width )  // x coordinate is random value between 0 and width of canvas
    let b = random( height ) // y coordinate is random value between 0 and height of canvas
    let r = random(1,10)
    // let r = 1
    // let r = x 

    ellipse(a,b,r,r)

  }

}


function OneThousandX(){

  noFill()
  stroke(0,100)

  for (var x = 0; x < 1000; x++){

    let a = random( 0, width )
    let b = random( 0, height )
    let r = random( 1, 100 )
    line(a,b,width/2,height/2)

  }

}


