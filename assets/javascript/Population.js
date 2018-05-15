class Population{
  constructor(){
    this.rockets = []
    this.populationSize = 25
    this.matingPool = []

    for(let i = 0; i < this.populationSize; i++){
      this.rockets[i] = new Rocket()
    }
  } 

  evaluate(){
    let maximumFitness = 0
    
    for(let i = 0; i < this.populationSize; i++){
      this.rockets[i].calculateFitness()
      if(this.rockets[i].fitness > maximumFitness){
        maximumFitness = this.rockets[i].fitness
      }
    }

    maxFitnessDisplayNumber = maximumFitness

    for(let i = 0; i < this.populationSize; i++){
      this.rockets[i].fitness /= maximumFitness
    }

    this.matingPool = []

    for(let i = 0; i < this.populationSize; i++){
      let number = this.rockets[i].fitness * 100
      for(let j = 0; j < number; j++){
        this.matingPool.push(this.rockets[i])
      }
    }
  }

  naturalSelection(){
    let newRockets = []
    for(let i = 0; i < this.rockets.length; i++){
      let parentA_DNA = random(this.matingPool).dna
      let parentB_DNA = random(this.matingPool).dna
      let child_DNA = parentA_DNA.mating(parentB_DNA)
      child_DNA.mutation()
      newRockets[i] = new Rocket(child_DNA)
    }
    this.rockets = newRockets
  }

  run(){
    for(let i = 0; i < this.populationSize; i++){
      this.rockets[i].update()
      this.rockets[i].show()
    }
  }

}