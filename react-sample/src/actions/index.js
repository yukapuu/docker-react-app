import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS' // reducerで使うのでexport

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// actionを返す関数：actionCreator
// viewで使うのでexport
// typeの値はユニークである必要がある
// redux-thunkを使うことでactionの代わりに関数を返すことができるようになる
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  // dispatchでreducerに渡す
  console.log(response)
  dispatch({type: READ_EVENTS, response})
}
