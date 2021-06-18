import {all, takeLatest, put, call,takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {setListHistory} from './Action';
import {Alert} from 'react-native'

function* putDataSaga(payload) {
  console.log('uhuwhduh',payload.newData)
  yield put(setListHistory(payload.newData));
  Alert.alert('Thank You For Purchasing')
  console.log("udhwydwgyg",setListHistory(payload.newData))
}

export function* HistoryDataSaga() {
  yield takeEvery('PUT_HISTORY', putDataSaga);
}
