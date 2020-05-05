import React ,{ Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { readEvents } from '../actions'  // actionCreator

class EventsIndex extends Component {
  // マウント時に呼ばれる関数
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render(){
    // const props = this.props　// 状態やactionが渡される

    return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>

      <Link to='/events/new'>New Event</Link>

    </>
    )
  }
}

// stateの情報からこのcomponentに必要なものを取り出してcomponent内のpropsとしてマッピングする
const mapStateToProps = state => ({ events: state.events }) 
// あるactionが発生したときにreducerにtypeに応じた状態遷移を実行させるための関数：dispatch関数
// const mapDispatchToProps = dispatch => ({
//   readEvents: () => dispatch(readEvents())
// })
 const mapDispatchToProps = ({ readEvents }) 

// connect関数でstateとactionをcomponentに関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

