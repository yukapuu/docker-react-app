import React ,{ Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { 
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
 } from 'material-ui/Table'
 import FloatingActionButton from 'material-ui/FloatingActionButton'
 import ContentAdd from 'material-ui/svg-icons/content/add'

import { readEvents } from '../actions'  // actionCreator

class EventsIndex extends Component {
  // マウント時に呼ばれる関数
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render(){
    // const props = this.props　// 状態やactionが渡される
    const style= {
      position: "fixed",
      right: 12,
      bottom: 12
    }
    return (
    <>
      <FloatingActionButton style={style} containerElement={<Link to='/events/new' />}>
        <ContentAdd />
      </FloatingActionButton>

      <Table>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Body</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.renderEvents()}
        </TableBody>
      </Table>
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

