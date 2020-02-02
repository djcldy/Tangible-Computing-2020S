/* 

  Tangible Computing Example 1_1
  Sayjel Vijay Patel


*/


function setup() {

  createCanvas(1200,800);

}


function draw(){

  background(255)

  let spacing = 10

  for (var x = 0; x < width; x+=spacing){

    for (var y = 0; y < height; y+=spacing){

      if (random(0.5)>0.1){

        let index = int(random(255))
        fill(random(255),random(255),random(255))
        let letter = char(index)
        text(letter,y,x)

      }


    }

  }

}