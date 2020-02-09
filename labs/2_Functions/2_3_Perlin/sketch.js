/*
    MuW201: Tangible Computing
    Week 02 1000X Assignment Examples

*/


function setup(){

  createCanvas(800,800)
  TenThousandX()

}


// Example: Perlin Noise

function TenThousandX(){

	let t = 100

	stroke(0,25)
  	noFill()

  	let stepW = width/10000
  	let stepH = height/10000

  	for (var x = 0; x < 10000; x++){

  		let a = stepW*x 
  		let b = noise(x*t)*100+width/2
  		let c = noise(x*t)*height
  		line(a,b,a,c)
    
    }

}


