
let gridSize = 80;
let cols, rows;

function setup() {
  createCanvas(800, 800);
  cols = int(width / gridSize) + 1;
  rows = int(height / gridSize) + 1;
  angleMode(RADIANS);
}

function draw() {
  background("#ffecccff");

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * gridSize + gridSize / 3;
      let y = j * gridSize + gridSize / 3;

      let wave = sin(frameCount * 0.024 + i * 0.5 + j * 0.3);

      let rotation = frameCount * 0.015 * (j % 1 === 0 ? 1 : -1);
      let size = map(wave, -1, 1, 18, 70);

      push();
      translate(x, y);
      rotate(rotation + wave * 5);

      if ((i + j) % 3 === 0) {
        fill("#ffafcc");
        stroke("#ff8968ff");
      } else if ((i + j) % 3 === 1) {
        fill("#c6afff");
        stroke("#bc70ffff");
      } else {
        fill("#f2c679");
        stroke("#ffafcc");
      }

      strokeWeight(2.5);

      star(0, 0, size * 0.45, size, 20);

      noStroke();
      fill("#fff4df");
      circle(0, 0, 7);

      pop();
    }
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2;

  beginShape();

  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);

    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }

  endShape(CLOSE);
}


// let gridSize = 50
// let cols, rows
// function setup() {
//   createCanvas(800, 800);
//   cols = int(width/gridSize)
//   rows = int(height/gridSize)
//   noLoop()
// }

// function draw() {
//   background(("#f2c679ff"));
//   stroke(255)
//   strokeWeight(5)
//   strokeCap(PROJECT)
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       let x = i * gridSize + gridSize/2
//       let y = j * gridSize + gridSize/2

//     //   Push();
//       star(220, 200, gridSize, 70, gridSize)
//       star(300, 350, gridSize, 70, gridSize)
//     //   rotate()


//       function star(x, y, radius1, radius2, npoints) {
//   let angle = TWO_PI / npoints;
//   let halfAngle = angle / 2.0;
//   beginShape();
//   for (let a = 0; a < TWO_PI; a += angle) {
//     let sx = x + cos(a) * radius2;
//     let sy = y + sin(a) * radius2;
//     vertex(sx, sy);
//     sx = x + cos(a + halfAngle) * radius1;
//     sy = y + sin(a + halfAngle) * radius1;
//     vertex(sx, sy);
//   }
//   endShape(CLOSE);
// }

// let d = dist(x, y, mouseX, mouseY)
// let circleSize = map(d, 0, 40, gridSize , gridSize*0.5)

// let r = map(x, 0, width, 30, 250)
// let b = map(y, 0, height, 0, 250)

    //   circle(x, y, gridSize)
    // //   fill(("#f2c679ff"))
    //   if (random() > 0.5) {
    //     stroke("#ffafcc")
    //     line(x-gridSize/2, y-gridSize/2, x+gridSize/2, y+gridSize/2)
    //     // square(x-gridSize/2, y-gridSize/2, gridSize * 0.5)
    //   } else {
    //     stroke("#c6afffff")
    //     line(x-gridSize/2, y+gridSize/2, x+gridSize/2, y-gridSize/2)
    //     // square(x, y, gridSize * 0.5)
    //   }

      // TRUTCHET TILES
    //   noFill()
    //   if (random() < 0.5) {
    //     stroke("#f2c679ff")
    //     arc(x-gridSize/2, y-gridSize/2, gridSize,gridSize, 0, HALF_PI) // top-left
    //     Stroke("#ffafcc")
    //     arc(x+gridSize/2, y+gridSize/2, gridSize,gridSize, PI, PI + HALF_PI) // right-bottom
    //   } else {
    //     Stroke("#ffafcc")
    //     arc(x-gridSize/2, y+gridSize/2, gridSize,gridSize, -HALF_PI, 0) // bottom-left
    //     stroke("#f2c679ff")
    //     arc(x+gridSize/2, y-gridSize/2, gridSize,gridSize, HALF_PI, PI) // top-right
    //   }

      
//     }
    
//   }
// }



// let cols
// let gridSize = 30

// function setup() {
//     createCanvas(400, 400);
//     cols = int(width/gridSize)
//     rows = int(height/gridSize)
// }

// function draw() {
//     background("#cdb4db");
//     // for(let i =0; i <innerWidth; i +=40) {
//     //     circle(i+20,0,40)
//     // }

//     for (let i = 0; i < cols; i++) {
//         for (let j = 0; j < rows; j++) {
//         let x = i * gridSize + gridSize/2
//         let y = j * gridSize + gridSize/2

//         //         if ((i+J) % 2 === 0) {
//         //     noStroke()
//         //     fill("blue")
//         // } else {
//         //     noFill()
//         //     strokeWeight(2)
//         //     stroke("blue")
//         // }
//         // rectMode(CENTER)
//         // rect(x, y, gridSize*0.5)
// let d = dist(x, y, mouseX, mouseY)
// let circleSize = map(d, 0, 40, gridSize , gridSize*0.5)

// let r = map(x, 0, width, 30, 250)
// let b = map(y, 0, height, 0, 250)

// // let q = dist(x, y, mouseX, mouseY)
// // let triangleSize = map(q, 0, 10, gridSize * 0.1, gridSize)

// // let w = map(x, 0, width, 20, 250)
// // let e = map(y, 0, height, 0, 250)

//         fill("#f6c6ffff")
//         rect(x,y, gridSize)

//         fill("#f2c679ff")
//         circle(x,y, circleSize*0.5)

//         // fill("#ffafcc")
//         // triangle(i, y, j, gridSize)

//         // fill("#ffafcc")
//         // triangle(100, y*0.2, triangleSize, y)


//         }
//     }
// }