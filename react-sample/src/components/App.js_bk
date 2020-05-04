import React ,{ Component } from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'  // actionCreator

class App extends Component {
  // countの初期化はreducerで行う
  // constructor(props){
  //   super(props)
  //   this.state = {count:0}
  // }

  render(){
    const props = this.props　// 状態やactionが渡される

    return (
    <>
      <div>value: {props.value}</div>　{/* reducerのcountのvalue */}
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
    </>
    )
  }
}

// stateの情報からこのcomponentに必要なものを取り出してcomponent内のpropsとしてマッピングする
const mapStateToProps = state => ({ value: state.count.value }) 
// あるactionが発生したときにreducerにtypeに応じた状態遷移を実行させるための関数：dispatch関数
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})
// const mapDispatchToProps = ({ increment, decrement }) この書き方もできる

// connect関数でstateとactionをcomponentに関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(App)

