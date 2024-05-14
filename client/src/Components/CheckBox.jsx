import React from "react";
import { Field, ErrorMessage } from "formik";

const CheckBox = ({ category }) => {
  return (
    <div key={category} className="form-group">
      <label className="Input_label">{getLabel(category)}</label>
      <div className="Options" role="group" aria-labelledby={`${category}Label`}>
        <label>
          <Field type="radio" name={category} value="Excellent" />
          Excellent
        </label>
        <label>
          <Field type="radio" name={category} value="Good" />
          Good
        </label>
        <label>
          <Field type="radio" name={category} value="Fair" />
          Fair
        </label>
        <label>
          <Field type="radio" name={category} value="Bad" />
          Bad
        </label>
      </div>
      <ErrorMessage name={category} component="div" className="error" />
    </div>
  );
};

function getLabel(category) {
  switch (category) {
    case "serviceQuality":
      return "Please rate the quality of the service you received from your host :";
    case "beverageQuality":
      return "Please rate the quality of your beverage :";
    case "cleanliness":
      return "Was our restaurant clean?";
    case "overallExperience":
      return "Please rate your overall dining experience :";
    default:
      return "";
  }
}
export default CheckBox;
