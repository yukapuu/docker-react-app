import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS' // reducerで使うのでexport
export const CREATE_EVENT = 'CREATE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// actionを返す関数：actionCreator
// viewで使うのでexport
// typeの値はユニークである必要がある
// redux-thunkを使うことでactionの代わりに関数を返すことができるようになる
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  // dispatchでreducerに渡す
  dispatch({type: READ_EVENTS, response})
}

export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
  // dispatchでreducerに渡す
  dispatch({type: CREATE_EVENT, response})
}
