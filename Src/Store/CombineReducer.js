import {combineReducers} from 'redux';
import {dataReducer} from '../Features/CryptoPage/Reducer'
import {historyReducer} from '../Features/HistoryPay/Reducer'

export const AllReducer = combineReducers({
    dataReducer,
    historyReducer
});
