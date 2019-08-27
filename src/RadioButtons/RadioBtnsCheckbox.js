import React from "react";
import { render } from "react-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import CheckboxGroup from "./CheckboxGroup";
import  {Checkbox, RadioButton, RadioButtonGroup} from "./RadioBtns";


const RadioButtons = () => (
  <div className="app">
    <h1>Radio & checkbox inputs with Formik</h1>
    <Formik
      initialValues={{
        radioGroup: "",
        checkboxGroup: [],
        singleCheckbox: false
      }}
      validationSchema={Yup.object().shape({
        radioGroup: Yup.string().required("A radio option is required"),
        checkboxGroup: Yup.array().required(
          "At least one checkbox is required"
        ),
        singleCheckbox: Yup.bool().oneOf([true], "Must agree to something")
      })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 500);
      }}
      render={({
         handleSubmit,
         setFieldValue,
         setFieldTouched,
         values,
         errors,
         touched,
         isSubmitting
       }) => (
        <form onSubmit={handleSubmit}>
          <h2>Single checkbox</h2>
          <Field
            component={Checkbox}
            name="singleCheckbox"
            id="singleCheckbox"
            label="Agree to something"
          />

          <h2>Checkbox group</h2>
          <CheckboxGroup
            id="checkboxGroup"
            label="Which of these?"
            value={values.checkboxGroup}
            error={errors.checkboxGroup}
            touched={touched.checkboxGroup}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
          >
            <Field
              component={Checkbox}
              name="checkboxGroup"
              id="checkbox1"
              label="Option 1"
            />
            <Field
              component={Checkbox}
              name="checkboxGroup"
              id="checkbox2"
              label="Option 2"
            />
            <Field
              component={Checkbox}
              name="checkboxGroup"
              id="checkbox3"
              label="Option 3"
            />
          </CheckboxGroup>

          <h2>Radio group</h2>
          <RadioButtonGroup
            id="radioGroup"
            label="One of these please"
            value={values.radioGroup}
            error={errors.radioGroup}
            touched={touched.radioGroup}
          >
            <Field
              component={RadioButton}
              name="radioGroup"
              id="radioOption1"
              label="Choose this option"
            />
            <Field
              component={RadioButton}
              name="radioGroup"
              id="radioOption2"
              label="Or choose this one"
            />
          </RadioButtonGroup>

          <h2>Single radio</h2>
          <p>Is that a valid use case?</p>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    />
  </div>
);

export default RadioButtons;