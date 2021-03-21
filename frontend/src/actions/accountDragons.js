import {ACCOUNT_DRAGONS} from './types'
import {fetchFromAccount} from './account'

export const fetchAccountDragons = () => fetchFromAccount({
    endpoint: 'dragons',
    options: {credentials: 'include'},
    ERROR_TYPE: ACCOUNT_DRAGONS.FETCH_ERROR,
    FETCH_TYPE: ACCOUNT_DRAGONS.FETCH,
    SUCCESS_TYPE: ACCOUNT_DRAGONS.FETCH_SUCCESS
})