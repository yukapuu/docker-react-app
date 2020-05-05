import _ from 'lodash'
import { 
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
 } from '../actions'

// reducerを定義する
// reducer：actionが発生した時に、actionに組み込まれているtypeに応じて状態をどう変化させるのか定義する
// state：状態

// reducerを定義し、reducers/index.jsに渡すのでexport
export default (events = {}, action) => {
    switch (action.type) {
      case CREATE_EVENT:
      case READ_EVENT:
      case UPDATE_EVENT:
        const data = action.response.data
        return { ...events, [data.id]: data }
      case READ_EVENTS:
        return _.mapKeys(action.response.data, 'id')
      case DELETE_EVENT:
        delete events[action.id] // 指定したidのデータを削除する
        return { ...events}
      default:
        return events
    }
}