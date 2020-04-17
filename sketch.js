const CRYSTAL_SIZE =300
const SIDES = 6
let PALETTE = []
const LAYERS = []



function setup(){
    console.log("connected");
    createCanvas(1600,1000)
    

    PALETTE = [
        color(255,255,255),
        // color(92,218,255),
        // color(255, 159, 92)
    ]
    noLoop()
    angleMode(DEGREES)
    rectMode(CENTER)
    
}

function draw(){
    background('black')

    // const layer = new Circles()
    // layer.render()

    // const simpleLines = new SimpleLines()
    // simpleLines.render()


    // const outlineShape = new OutlineShape()
    // outlineShape.render()

    // const dottedLines = new DottedLines()
    // dottedLines.render()

    // const innerShapes = new InnerShapes()
    // innerShapes.render()


    // const layeredHexagons = new LayeredHexagons()
    // layeredHexagons.render()


    const layeredShapes = new LayeredShapes()
    layeredShapes.render()

    // test lines //
    // testLines()


    let designPicker = random(1)
    if (designPicker > 0.3){
        LAYERS.push(new OutlineShape())
    }

    designPicker = random(1)
    if (designPicker > 0.5){
        LAYERS.push(new SimpleLines())
    }

    designPicker = random(1)
    if (designPicker > 0.3){
        LAYERS.push(new Circles())
    }

    LAYERS.forEach(LAYER =>{
        LAYER.render()
    })

    // noFill()
    // testLines()
    // simpleLines()
    // outlineShape()
    // makeCircles()
}



// function simpleLines(){
//     const stepsOut = 8
//     const numSteps = randomSelector() ? stepsOut : int(stepsOut * 1.25)
//     const step = (CRYSTAL_SIZE /2) /numSteps
//     const start = floor(random(0, numSteps))
//     const stop = floor(random(start, numSteps+1))

//     let numShapes= randomSelector() ? SIDES : SIDES*2
//     const strokeColor = randomPalette()
//     const weight = randomSelector() ? 1 : 3

//     const angle = 360/numShapes

//     // draw shapes //
//     noFill()
//     stroke(strokeColor)
//     strokeWeight(weight)
//     push()
//         translate(width/2, height/2)
//         stroke(PALETTE[0])
//         stroke(strokeColor)
//         for(let i=0; i<numShapes; i++) {
//             line(start*step,0, stop*step, 0)     
//             rotate(angle)   
//         }
        
//     pop()
// }

// function outlineShape(){
//     const strokeColor = randomPalette()
//     const weight = randomSelector() ? 1 : 3
//     const hexagonTrue = randomSelector()

//     noFill()
//     stroke(strokeColor)
//     strokeWeight(weight)
//     push()
//     translate(width/2, height/2)
//     if(hexagonTrue){
//         hexagon(0,0, CRYSTAL_SIZE/2)
//     }else{
//     ellipse(0,0,CRYSTAL_SIZE, CRYSTAL_SIZE)
//     }
//     pop()
// }



function mousePressed() {
    clear();
    redraw();
  }
