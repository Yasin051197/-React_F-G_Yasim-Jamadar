import React from "react";
import { Field, ErrorMessage } from "formik";

const InputTag = ({name,title}) => {
  return (
    <div className="form-group">
      <label className="Input_label" htmlFor={name}>{title}</label>
      <Field className="Input_Field" name={name}  />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default InputTag;
