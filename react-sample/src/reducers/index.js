import { combineReducers } from 'redux'
import count from './count'

// アプリ内に存在する全てのreducerを総括する。
// combineReducers：すべてのreducerを一つのreducerに結合する。
// storeを作成する際に使うのでexportする。
export default combineReducers({ count })
// export default combineReducers({ foo, bar, baz}) 複数指定できる