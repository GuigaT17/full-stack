const Dragon = require('./dragon')
const base64 = require('base-64')

class Breeder {
    static breedDragon({matron, patron}){
        const matronTraits = matron.traits
        const patronTraits = patron.traits

        const babyTraits = []

        matronTraits.forEach(({traitType, traitValue}) => {
            const matronTrait = traitValue
            const patronTrait = patronTraits.find(trait => trait.traitType === traitType).traitValue
            babyTraits.push({traitType,
            traitValue: Breeder.pickTrait({matronTrait, patronTrait})})
        })
        return new Dragon({nickname: 'Unnamed baby', traits: babyTraits})
    }

    // Two incoming traits: mom and dad trait
    // Both traits have treir caracters summed
    // Get a range by adding both caracters sums
    // Generate a random number
    // If the number is less than the matrons caracters, pick patron
    static pickTrait({matronTrait, patronTrait}){
        if(matronTrait === patronTrait) return matronTrait
        
        const matronTraitCharSum = Breeder.charSum(base64.encode(matronTrait))
        const patronTraitCharSum = Breeder.charSum(base64.encode(patronTrait))

        const randNum = Math.floor(Math.random() * (matronTraitCharSum + patronTraitCharSum))
        return randNum < matronTraitCharSum ? matronTrait : patronTrait
    }

    static charSum(string){
        return string.split('').reduce((sum, caracter) => sum += caracter.charCodeAt(), 0)
    }
}

module.exports = Breeder