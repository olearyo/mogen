class Layer {
    constructor(){
        this.sides = SIDES
        this.numShapes = this.sides
        this.angle = 360/this.numShapes
        this.stepsOut = 8
        this.step = (CRYSTAL_SIZE/2) /this.stepsOut
        this.thinStroke = 1
        this.thickStroke = 3
        this.strokeColor = randomPalette()
    }
}

class Circles extends Layer{
    constructor(){
        super()
        this.shapeSize = (CRYSTAL_SIZE/2) * 0.93
        this.pos = (CRYSTAL_SIZE/2) - (this.shapeSize/2)
        console.log(this.sides)
    }
    
    render(){
        noFill()
        stroke(this.strokeColor)
        strokeWeight(1)
        push()
        translate(width/2, height/2)
        for(let i=0; i<this.numShapes; i++) {
            ellipse(this.pos, 0, this.shapeSize, this.shapeSize)     
            rotate(this.angle)   
        }
        pop()
    }
}

class SimpleLines extends Layer{
    constructor(){
        super()
        this.numSteps = randomSelector() ? this.stepsOut : int(this.stepsOut * 1.25)
        this.step = (CRYSTAL_SIZE /2) /this.numSteps
        this.start = floor(random(0, this.numSteps))
        this.stop = floor(random(this.start, this.numSteps+1))
        this.weight = randomSelector() ? this.thinStroke : this.thickStroke
        this.numShapes= randomSelector() ? this.sides : this.sides*2
        this.angle = 360/this.numShapes

    }

    render(){
        noFill()
        stroke(this.strokeColor)
        strokeWeight(this.weight)
        push()
            translate(width/2, height/2)
            for(let i=0; i< this.numShapes; i++) {
                line(this.start * this.step,0, this.stop * this.step, 0)     
                rotate(this.angle)   
            }
            
        pop()
    }
}

class DottedLines extends Layer {                           
    constructor () {
      super()
      this.numShapes = randomSelector() ? this.sides : this.sides * 2
      this.angle = 360 / this.numShapes
      this.shapeSize = 3
      this.centerOffset = this.step
    }
  
    render () {
      push()
      translate(width / 2, height / 2)
      for(let i = 0; i <= this.numShapes; i++) {
        for(let x = this.centerOffset; x < CRYSTAL_SIZE / 2; x += this.step) {
          ellipse(x, 0, this.shapeSize, this.shapeSize)
        }
        rotate(this.angle)
      }
      pop()
    }
  }



class OutlineShape extends Layer {
    constructor(){
        super()
        this.weight = randomSelector() ? this.thinStroke : this.thickStroke
        this.hexagonTrue = randomSelector()

    }

    render() {
        noFill()
        stroke(this.strokeColor)
        strokeWeight(this.weight)
        push()
            translate(width/2, height/2)
            if(this.hexagonTrue){
                hexagon(0,0, CRYSTAL_SIZE/2)
            }else{
                ellipse(0,0,CRYSTAL_SIZE, CRYSTAL_SIZE)
            }
        pop()
    }
}

class InnerShapes extends Layer {
    constructor(){
        super()
        this.randomShape = randomSelector(0,1)
        this.shapeSize = floor(random(this.stepsOut / 2, this.stepsOut)) * this.step
    }

    render() {
        stroke(this.strokeColor)
        noFill()
        push()
        translate(width/2, height/2)
        if(this.randomShape < 0.1) {
            rect(0,0,this.shapeSize * 2, this.shapeSize * 2)
        }else if (this.randomShape >= 0.1 && this.randomShape < 0.6){
            ellipse(0,0,this,this.shapeSize, this.shapeSize)
        }else if (this.randomShape >= 0.6){
            rotate(this.angle / 2)
            hexagon(0,0,this.shapeSize)
        }
        pop()
        }
}

class LayeredShapes extends Layer {                    
    constructor () {
      super()
      this.numSteps = floor(random(1, this.stepsOut))
      this.center = this.numSteps * this.step
      this.randomShape = random(1)
      this.direction = randomSelector() // used for triangle only
      this.weight = randomSelector() ? this.thinStroke : this.thickStroke
  
      if (this.numSteps < this.stepsOut / 2) {
        this.radius = floor(random(1, this.numSteps)) * this.step
      } else if (this.numSteps > this.stepsOut / 2) {
        this.radius = floor(random(1, this.stepsOut - this.numSteps)) * this.step
      } else {
        this.radius = floor(random(1, (this.stepsOut / 2) + 1)) * this.step
      }
    }
  
    render () {
      stroke(this.strokeColor)
      noFill()
      strokeWeight(this.weight)
      push()
      translate(width / 2, height / 2)
      for (let i = 0; i < this.numShapes; i++) {
        if (this.randomShape < 0.33) {
            ellipse(0, this.center, this.radius, this.radius)
        } else if (this.randomShape >= 0.33 && this.randomShape < 0.66) {
            rect(0, this.center, this.radius, this.radius)
        } else if (this.randomShape >= 0.66) {
            multiTriangle(this.center, this.radius, this.direction)
        }
        rotate(this.angle)
      }
      pop()
    }
  }

class LayeredHexagons extends Layer {                 
    constructor () {
      super()
      this.numSteps = randomSelector() ? this.stepsOut : this.stepsOut * 1.25
      this.centerOffset = (CRYSTAL_SIZE / 2) * 0.15
      this.step = ((CRYSTAL_SIZE / 2) - this.centerOffset) / this.numSteps
      this.weight = randomSelector() ? this.thinStroke : this.thickStroke
    }
  
    render () {
      stroke(this.strokeColor)
      noFill()
      strokeWeight(this.weight)
      push()
      translate(width / 2, height / 2)
      rotate(this.angle / 2) 
      for (let i = 1; i < this.numSteps + 1; i++) {
        hexagon(0, 0, this.centerOffset + (i * this.step))
      }
      pop()
    }
  }