import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

const App = ({ values }) => (
  <Form>
    {/* 'name' used as unique identifier by formik*/}
    {/* 'Field' comes with onSubmit and handleChange built in; no need to call explicitly */}
    <Field type="email" name="email" placeholder="Email" />
    <br />
    <Field type="password" name="password" placeholder="Password" />
    <br />
    <label>
      <Field type="checkbox" name="newsletter" checked={values.newsletter} />
      Join Our Newsletter
    </label>
    <br />
    <Field component="select" name="plan">
      <option value="free">Free</option>
      <option value="premium">Premium</option>
    </Field>
    <br />
    <button>Submit</button>
  </Form>
);

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    // destructure initial values, define with k:v pair in object
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || false,
      plan: plan || "premium"
    };
  },
  validationSchema: Yup.object({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(9)
      .required()
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(App);

const rootElement = document.getElementById("root");
// pass props to FormikApp to give initial value
ReactDOM.render(<FormikApp />, rootElement);

export default FormikApp;