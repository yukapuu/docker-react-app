import React ,{ Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { getEvent, deleteEvent, putEvent } from '../actions'  // actionCreator

class EventsShow extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    const {id} = this.props.match.params
    if (id) this.props.getEvent(id)
  }

  // 入力フォーム
  renderField(field){
    const { input, label, type, meta: {touched, error} } = field
    return (
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
    )
  }

  async onDeleteClick(){
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  async onSubmit(values) {
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  render(){
    // pristin：何も入力されていない状態を表す
    // submitting：submitされるとtrueになる。ボタンの2重クリックを防止
    // invalid：エラーがあるときtrue
    const { handleSubmit, pristine, submitting, invalid } = this.props
  
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
          <Link to="/" >Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}
const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event }
}

// あるactionが発生したときにreducerにtypeに応じた状態遷移を実行させるための関数：dispatch関数
const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent }) 

// connect関数でstateとactionをcomponentに関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm( { validate, form: 'eventShowForm', enableReinitialize: true } )(EventsShow)
)
