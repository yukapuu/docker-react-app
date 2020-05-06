import React ,{ Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { postEvent } from '../actions'  // actionCreator

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  // 入力フォーム
  renderField(field){
    const { input, label, type, meta: {touched, error} } = field
    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
      // <div>
      //   <input {...input} placeholder={label} type={type}/>
      //   {touched && error && <span>{error}</span>}
      // </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render(){
    // pristin：何も入力されていない状態を表す
    // submitting：submitされるとtrueになる。ボタンの2重クリックを防止
    // invalid：エラーがあるときtrue
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12 }

    return (
      <form onSubmit={handleSubmit(this.onSubmit)} >
       <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
        <RaisedButton label="Cancel" style={style} containerElement={ <Link to="/" /> } />
        {/* <div>
          <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
          <Link to="/" >Cancel</Link>
        </div> */}
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
// あるactionが発生したときにreducerにtypeに応じた状態遷移を実行させるための関数：dispatch関数
const mapDispatchToProps = ({ postEvent }) 

// connect関数でstateとactionをcomponentに関連付ける
export default connect(null, mapDispatchToProps)(
  reduxForm( { validate, form: 'eventNewForm'} )(EventsNew)
)
