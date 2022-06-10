import React, { Component } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { ShowModal, CloseModal, createTodo } from '../actions';
import { Field, reduxForm } from 'redux-form';

class TodoModal extends Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>
            {error}
          </div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {

    return (
      <div className='ui field'>
        <br />
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    )
  };
  renderTextArea = ({ input, label, meta }) => {

    return (
      <div className='ui field'>
        <br />
        <label>{label}</label>
        <textarea {...input} />
        {this.renderError(meta)}
      </div>
    )
  };

  onSubmit = (formValues) => {
    this.props.createTodo(formValues);
    this.props.CloseModal();
  }

  render() {

    return (
      <div className='ui container'>
        <Button className="ui button primary" onClick={this.props.ShowModal}>
          Add Todo
        </Button>

        <Modal open={this.props.modal.open} onClose={this.props.CloseModal}>
          <Modal.Header>
            Add Todo Item
            <Icon className="ui left aligned" name='close' onClick={this.props.CloseModal} />
          </Modal.Header>

          <Modal.Content>
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field name="title" component={this.renderInput} label=" Enter Title" />
              <Field name="description" component={this.renderTextArea} label=" Enter Description" />
              <button className='ui button primary'>Submit</button>
            </form>
          </Modal.Content>

        </Modal>
      </div>
    )
  }
};
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Please Enter a Title';
  }
  if (!formValues.description) {
    errors.description = 'Please Enter description'
  } else if (formValues.description.length < 200) {
    errors.description = 'Minimum be 200 characters or more'
  }
  return errors;
}
const mapStateToProps = (state) => {

  return { modal: state.modal };

}
const formWrapped = reduxForm({
  form: 'todocreate',
  validate
})(TodoModal);
export default connect(mapStateToProps, { ShowModal, CloseModal, createTodo })(formWrapped);