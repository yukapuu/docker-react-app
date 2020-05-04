import _ from 'lodash'
import { READ_EVENTS } from '../actions'

// reducerを定義する
// reducer：actionが発生した時に、actionに組み込まれているtypeに応じて状態をどう変化させるのか定義する
// state：状態

// reducerを定義し、reducers/index.jsに渡すのでexport
export default (events = {}, action) => {
    switch (action.type) {
      case READ_EVENTS:
        return _.mapKeys(action.response.data, 'id')
      default:
        return events
    }
}