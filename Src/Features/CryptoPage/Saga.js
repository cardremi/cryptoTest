import {all, takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {setListData} from './Action';

function* getDataSaga(payload) {
  try {
    const config = {
      url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
      method: 'get',
      headers: {
        'X-CMC_PRO_API_KEY': '8f620108-3fba-4670-8e2a-fecaa8f50db9',
      },
      validateStatus: status => status < 500,
    };

    const respond = yield call(axios, config);
    console.log('datanyaa', respond);
    yield put(setListData(respond.data.data));
  } catch (error) {
    console.log('langsung error', error);
  }
}

export function* CryptoDataSaga() {
  yield all([takeLatest('GET_LIST_DATA', getDataSaga)]);
}
