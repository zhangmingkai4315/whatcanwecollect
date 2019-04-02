import { takeLatest, put, call } from 'redux-saga/effects';
import {
    request,
} from '../../utils'
import {
    HOME_BEGIN_DATA_COLLECTION,
    HOME_GET_GEOIPINFO_SUCCESS,
} from './constants';

import { FETCHING_SUCCESS, FETCHING_FAIL, FETCHING_START } from '../Controller/constants'

// const API_GEOIP_URL = "https://api.ip.sb/geoip"
const API_GEOIP_URL = "http://ip-api.com/json/?lang=zh-CN&fields=proxy,mobile,status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query"
function getIPGeoInfo() {
    return request(API_GEOIP_URL, {
        crossDomain: true,
        method: 'GET',
    })
}


function* dataCollectionFlow(action) {
    try {
        yield put({ type: FETCHING_START })
        // const response = yield call(step-1)
        const geoinfo = yield call(getIPGeoInfo)
        yield put({ type: HOME_GET_GEOIPINFO_SUCCESS, geoinfo })
        // const response = yield call(step-2)
        // const response = yield call(step-3)
        yield put({ type: FETCHING_SUCCESS })
    } catch (error) {
        yield put({ type: FETCHING_FAIL, error })
    }
}


function* homeWatcher() {
    yield takeLatest(HOME_BEGIN_DATA_COLLECTION, dataCollectionFlow)
}

export default homeWatcher;