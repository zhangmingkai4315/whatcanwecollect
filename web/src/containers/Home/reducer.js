import {
    CLIENT_SET,
    CLIENT_UNSET,
    HOME_GET_GEOIPINFO_SUCCESS,
    HOME_GET_HTTP_HEADER_SUCCESS
} from './constants'
const initialState = {
    id: null,
    geoip: null,
    headers: null,
}

const reducer = function clientReducer(state = initialState, action) {
    switch (action.type) {
        case CLIENT_SET:
            return {
                id: action.userID,
            }
        case CLIENT_UNSET:
            return {
                id: null,
            }
        case HOME_GET_GEOIPINFO_SUCCESS:
            return {
                ...state,
                geoip: action.geoinfo
            }
        case HOME_GET_HTTP_HEADER_SUCCESS:
            return {
                ...state,
                headers: action.headers,
            }
        default:
            return state
    }
}

export default reducer