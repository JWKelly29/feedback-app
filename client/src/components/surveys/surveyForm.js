import React, { Component } from "react";
import { reduxForm } from "redux-form";
// shows form to get user inputs
class SurveyForm extends Component {
  render() {
    return <div>Survey Form</div>;
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
