const TRAITS = require('../../traits.json')

const DEFAULT_PARAMS = {
    nickname: 'unnamed',
    generationId: undefined,
    dragonId: undefined,
    isPublic: false,
    saleValue: 0,
    sireValue: 0,
    get birthdate() {
        return new Date()
    },
    get randomTraits() {
        const traits = []
        TRAITS.forEach(TRAIT => {
            const traitType = TRAIT.type
            const traitValues = TRAIT.values

            const traitValue = traitValues[Math.floor(Math.random() * traitValues.length)]
            traits.push({traitType, traitValue})
        })
        return traits
    }
}
class Dragon {
    constructor({dragonId, birthdate, nickname, traits, generationId, isPublic, saleValue, sireValue} = {}){
        this.dragonId = dragonId || DEFAULT_PARAMS.dragonId
        this.birthdate = birthdate || DEFAULT_PARAMS.birthdate
        this.nickname = nickname || DEFAULT_PARAMS.nickname
        this.traits = traits || DEFAULT_PARAMS.randomTraits
        this.generationId = generationId || DEFAULT_PARAMS.generationId
        this.isPublic = isPublic || DEFAULT_PARAMS.isPublic
        this.saleValue = saleValue || DEFAULT_PARAMS.saleValue
        this.sireValue = sireValue || DEFAULT_PARAMS.sireValue
    }
}

module.exports = Dragon