// Global Variables
let rocket
let population
const lifespan = 400
let lifespanDisplay
let maximumFitnessDisplay
let count = 0
let target
let maxFitnessDisplayNumber 
let maximumForce = 0.3

let barrierX = 400 - 150
let barrierY = 350
let barrierWidth = 0
let barrierHeight = 10

function setup(){
  createCanvas(windowWidth, 600)
  barrierWidth = windowWidth/3
  barrierX = (windowWidth/2) - (barrierWidth /2)
  rocket = new Rocket()
  population = new Population()
  lifespanDisplay = createP()
  maximumFitnessDisplay = createP()
  target = createVector(width/2, 50)
}

function draw(){
  background(0)
  population.run()
  lifespanDisplay.html(count)

  if(maxFitnessDisplayNumber === undefined){
    maxFitnessDisplayNumber = 0
  }

  maximumFitnessDisplay.html(maxFitnessDisplayNumber)

  count++

  if(count == lifespan){
    population.evaluate()
    population.naturalSelection()
    // population = new Population()
    count = 0
  }

  fill(255, 150)
  noStroke()
  rect(barrierX, barrierY, barrierWidth, barrierHeight)
  ellipse(target.x, target.y, 16, 16)
}