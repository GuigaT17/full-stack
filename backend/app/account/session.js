const uuid = require('uuid')
const { hash } = require('./helper')

class Session {
    constructor({username}){
        this.username = username
        this.id = uuid.v4()
    }

    toString(){
        const {username, id} = this
        return Session.sessionString({username, id})
    }

    static parse(sessionString){
        const sessionData = sessionString.split('|')
        return {
            username: sessionData[0],
            id: sessionData[1],
            sessionHash: sessionData[2]
        }
    }

    static verify(sessionString){
        const {username, id, sessionHash} = Session.parse(sessionString)
        const accountData = Session.accountData({username, id})
        return hash(accountData) === sessionHash
    }

    static accountData({username, id}){
        return `${username}|${id}`
    }

    static sessionString({username, id}){
        const accountData = Session.accountData({username, id})
        return `${accountData}|${hash(accountData)}`
    }
}

module.exports = Session