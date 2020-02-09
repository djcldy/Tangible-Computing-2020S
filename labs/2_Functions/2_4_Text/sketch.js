/*
    MuW201: Tangible Computing
    Week 02 TenThousandX Assignment Examples

*/


function setup(){

  createCanvas(800,800)
  TenThousandX(100)

}

// Example: Alphabet

function TenThousandX(t){

  let alphabet = 'abcdefghijklmnopqrstuvwx'
  noFill()

  for (var x =0; x < 10000; x++) {

      let index = Math.floor(random(alphabet.length))
      let letter = alphabet[index]
      fill(random(255),random(255),random(255),100)
      textSize(Math.floor(random(width/16)))
      text(letter,random(width),random(height))


  }

}


