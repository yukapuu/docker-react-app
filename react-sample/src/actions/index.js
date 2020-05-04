export const INCREMENT = 'INCREMENT' // reducerで使うのでexport
export const DECREMENT = 'DECREMENT' // reducerで使うのでexport

// actionを返す関数：actionCreator
// viewで使うのでexport
// typeの値はユニークである必要がある
export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT    
})