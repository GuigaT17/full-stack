const Generation = require('./generation')
const GenerationTable = require('./table')

class GenerationEngine {
    constructor() {
        this.generation = null
        this.timer = null
    }

    start() {
        this.buildNewGeneration()
    }

    stop() {
        clearTimeout(this.timer)
    }

    buildNewGeneration() {
        this.generation = new Generation()

        GenerationTable.storeGeneration(this.generation).then(({generationId}) => {
            this.generation.generationId = generationId

            this.timer = setTimeout(() => this.buildNewGeneration(), 
                this.generation.expiration.getTime() - Date.now())
        }).catch((error) => {
            console.error(error)
        })
    }
}

module.exports = GenerationEngine