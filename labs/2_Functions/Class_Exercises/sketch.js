// TenThousandX Assignment: 
// Add to this code to create a drawing 
// Note: do not delete anything

          function setup(){

             // do not change anything in setup 

              createCanvas(800,800)
              TenThousandX()


          }

          function TenThousandX(){

            //  background(34,155,215)

            //  fill(255,0,0,50)
            //  stroke(100,100)
            //  ellipse(50,50,100,100)
            //   fill(0,255,0)
            // strokeWeight(5)
            // noStroke()
            // fill(0)
            noFill()
            stroke(0,100)
              
              for ( var x = 0; x < 10000; x++  ){

                  // add code here 
                  // console.log(x)
                  let a = sin(x/25)*width/2
                  let b = x/10000*height
                  ellipse(a,b,a/10,a/10)
                  stroke(random(255),random(255),random(255),50)
                  ellipse(width-a,b,a/10,a/10)
                  stroke(0,255,0,50)
                  ellipse(b,a,a/10,a/10)
                  stroke(255,0,0,50)
                  ellipse(b,height-a,a/10,a/10)
                  // line(0,b,a,b)

              }

            }
