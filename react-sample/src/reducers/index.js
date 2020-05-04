import { combineReducers } from 'redux'
import events from './events'

// アプリ内に存在する全てのreducerを総括する。
// combineReducers：すべてのreducerを一つのreducerに結合する。
// storeを作成する際に使うのでexportする。
export default combineReducers({ events })
// export default combineReducers({ foo, bar, baz}) 複数指定できる