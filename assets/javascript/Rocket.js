class Rocket{
  constructor(dna){
    this.pos = createVector(width/2, height)
    this.vel = createVector()
    this.acc = createVector()
    this.completed = false
    this.fitness = 0
    this.crashed = false

    if(dna){
      this.dna = dna
    }else{
      this.dna = new DNA()
    }

  }

  applyForce(force){
    this.acc.add(force)
  }

  calculateFitness(){
    let distance = dist(this.pos.x, this.pos.y, target.x, target.y)
    this.fitness = map(distance, 0, width, width, 0)

    if(this.completed){
      this.fitness *= 10
    }

    if(this.crashed){
      this.fitness /= 10
    }

  }

  update(){
    let distance = dist(this.pos.x, this.pos.y, target.x, target.y)
    
    if (distance < 10) {
      this.completed = true;
      this.pos = target.copy();
    }

    // Rocket hit the barrier
    if (this.pos.x > barrierX 
        && this.pos.x < barrierX + barrierWidth 
        && this.pos.y > barrierY 
        && this.pos.y < barrierY + barrierHeight) {
          this.crashed = true;
    }
    
    // Rocket has hit left or right of window
    if (this.pos.x > width || this.pos.x < 0) {
      this.crashed = true;
    }

    // // Rocket has hit top or bottom of window
    // // if (this.pos.y > height || this.pos.y < 0) {
    //   if (this.pos.y > height){
    //   this.crashed = true;
    // }

    this.applyForce(this.dna.genes[count])

    if(!this.completed && !this.crashed){
      this.vel.add(this.acc)
      this.pos.add(this.vel)
      this.acc.mult(0)
      this.vel.limit
    }
    
  }

  show(){
    push()
    noStroke()
    fill(255, 150)
    translate(this.pos.x, this.pos.y)
    rotate(this.vel.heading())
    rectMode(CENTER)
    rect(0, 0, 20, 5)
    pop()
  }
  
}