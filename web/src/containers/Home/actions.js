import { CLIENT_SET, CLIENT_UNSET, HOME_BEGIN_DATA_COLLECTION } from './constants'

export function setClient(token, userID) {
    return {
        type: CLIENT_SET,
        token,
        userID,
    }
}

export function unsetClient(token) {
    return {
        type: CLIENT_UNSET
    }
}

export function beginDataCollection() {
    return {
        type: HOME_BEGIN_DATA_COLLECTION
    }
}