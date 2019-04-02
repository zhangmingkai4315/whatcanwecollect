import { all } from 'redux-saga/effects';
import HomeSaga from './Home/sagas'

export default function* IndexSaga() {
    yield all([
        HomeSaga(),
    ])
}