const pool = require('../../databasePool')
const TRAITS = require('../../traits.json')

TRAITS.forEach(TRAIT => {
    const traitType = TRAIT.type
    const traitValues = TRAIT.values

    traitValues.forEach(tV => {
        pool.query('INSERT INTO trait("traitType", "traitValue") VALUES($1, $2) RETURNING id',
        [traitType, tV],
        (error, response) => {
            if(error) console.log(error)

            const traitId = response.rows[0].id

            console.log('inserted trait: id: ' + traitId)
        })
    })
})