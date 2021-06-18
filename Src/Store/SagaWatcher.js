import {all} from 'redux-saga/effects';
import {CryptoDataSaga} from '../Features/CryptoPage/Saga';
import {HistoryDataSaga} from '../Features/HistoryPay/Saga';
export function* SagaWatcher() {
  yield all([CryptoDataSaga(), HistoryDataSaga()]);
}
