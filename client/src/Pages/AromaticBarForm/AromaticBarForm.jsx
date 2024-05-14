import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./AromaticBarForm.css";
import CheckBox from "../../Components/CheckBox";
import InputTag from "../../Components/InputTag";
import { Box } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FeedbackFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only numbers")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone is required"),
  serviceQuality: Yup.string().required("Service quality is required"),
  beverageQuality: Yup.string().required("Beverage quality is required"),
  cleanliness: Yup.string().required("Cleanliness rating is required"),
  overallExperience: Yup.string().required(
    "Overall experience rating is required"
  ),
});

const IntialValue = {
  name: "",
  email: "",
  phone: "",
  serviceQuality: "",
  beverageQuality: "",
  cleanliness: "",
  overallExperience: "",
};

const AromaticBarForm = (props) => {
  const { value, index } = props;
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="form-container"
    >
      {value === index && (
        <Box p={2}>
          <h2 className="AromaticBar_title">Aromatic Bar</h2>
          <Formik
            initialValues={IntialValue}
            validationSchema={FeedbackFormSchema}
            onSubmit={(values, { resetForm }) => {
              let feedbackArray =
                JSON.parse(localStorage.getItem("feedback")) || [];
              feedbackArray.push(values);
              localStorage.setItem("feedback", JSON.stringify(feedbackArray));
              setShowPopup(true);
              resetForm();
            }}
          >
            <Form className="form">
              <Box id="form_child1">
                <InputTag name={"name"} title={"Customer Name :"} />
                <InputTag name={"email"} title={"Email :"} />
                <InputTag name={"phone"} title={"Phone :"} />
              </Box>
              <Box id="form_child2">
                {[
                  "serviceQuality",
                  "beverageQuality",
                  "cleanliness",
                  "overallExperience",
                ].map((category, index) => (
                  <CheckBox key={index} category={category} />
                ))}
              </Box>
              <Box id="button_container">
                <button type="submit" className="submit-button">
                  Submit Review
                </button>
              </Box>
            </Form>
          </Formik>
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-content">
                <CheckCircleIcon style={{ color: 'green', fontSize: '50px' }}/>
                <p className="Provided_feedback">Thank you for Providing the feedback</p>
                <p className="Apriciate_feedback">We will work towards improving your experience</p>
                <button onClick={handleClosePopup}>Close</button>
              </div>
            </div>
          )}
        </Box>
      )}
    </div>
  );
};

export default AromaticBarForm;
