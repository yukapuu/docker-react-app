import { INCREMENT , DECREMENT } from '../actions'

// reducerを定義する
// reducer：actionが発生した時に、actionに組み込まれているtypeに応じて状態をどう変化させるのか定義する
// state：状態

const initialState = { value: 0 }

// count reducerを定義し、reducers/index.jsに渡すのでexport
export default (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return {value: state.value + 1}
      case DECREMENT:
        return {value: state.value - 1}
      default:
        return state
    }
}