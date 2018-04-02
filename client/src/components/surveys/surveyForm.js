import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./surveyField";
// shows form to get user inputs
class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field type="text" name="title" component={SurveyField} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
