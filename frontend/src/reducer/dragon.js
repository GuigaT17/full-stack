import {DRAGON} from '../actions/types'
import fetchStates from './fetchStates'
const DEFAULT_DRAGON = {generationId: '', dragonId: '', nickname: '', birthdate: '', traits: []}

const dragon = (state = DEFAULT_DRAGON, action) => {
    switch(action.type){
        case DRAGON.FETCH:
            return {...state, status: fetchStates.fetching}
        case DRAGON.FETCH_ERROR:
            return {...state, message: action.message, status: fetchStates.error}
        case DRAGON.FETCH_SUCCESS:
            return {...state, ...action.dragon, status: fetchStates.success}
        default:
            return state
    }
}

export default dragon