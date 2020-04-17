// make hexagon //
function hexagon (posX, posY, radius) {                     
    const rotAngle = 360 / 6
    beginShape()
    for (let i = 0; i < 6; i++) {
        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
        vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE)
}

// find points on circle to make hexagon //
function pointOnCircle (posX, posY, radius, angle) {         
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
}

// get random number //
function randomSelector(){
    const randomNum = random(1)
    if(randomNum >0.5) {
        return true
    }else{
        return false
    }
}

// get random color // 
function randomPalette(){
    const randomColor = floor(random(0, PALETTE.length))
    return PALETTE[randomColor]
}


//test lines//
function testLines(){
    // establish random num & randomize shape//
    let numShapes= randomSelector() ? SIDES : SIDES*2
    
    // establish random color//
    const strokeColor = randomPalette()

    // draw shapes //
    noFill()
    push()
        translate(width/2, height/2)
        stroke(PALETTE[0])
        ellipse(0,0,CRYSTAL_SIZE, CRYSTAL_SIZE)
        stroke(strokeColor)
        const angle = 360/numShapes
        for(let i=0; i<numShapes; i++) {
            line(0,0, 0, CRYSTAL_SIZE/2)     
            rotate(angle)   
        }
        
    pop()
}

//multiple triangels//
function multiTriangle (center, radius, direction) {
    if (direction) {
      beginShape();
      vertex(center + radius * cos(0), radius * sin(0));
      vertex(center + radius * cos(120), radius * sin(120));
      vertex(center + radius * cos(240), radius * sin(240));
      endShape(CLOSE); 
    } else {
      beginShape();
      vertex(center + radius * cos(180), radius * sin(180));
      vertex(center + radius * cos(300), radius * sin(300));
      vertex(center + radius * cos(60), radius * sin(60));
      endShape(CLOSE);
    }
  }