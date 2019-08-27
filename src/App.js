import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const App = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    {/* 'name' used as unique identifier by formik*/}
    {/* 'Field' comes with onSubmit and handleChange built in; no need to call explicitly */}
    <div>
      { touched.email && errors.email && <p>{errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />
    </div>
    <div>
      { touched.password && errors.password && <p>{errors.password}</p>}
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
      <button disabled={isSubmitting} type="submit">Submit</button>
    </div>
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
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required(), //pass error message in .email()
    password: Yup.string().min(9, 'Password must be 9 characters or longer').required() // length err as 2nd arg in min(); required err in .required()
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === 'gio@test.io') {
        setErrors({ email: 'That email is already taken' })
      } else {
        resetForm();
      }
      setSubmitting(false)
    }, 2000);
    console.log(values);
  }
})(App);

const rootElement = document.getElementById("root");
// pass props to FormikApp to give initial value
ReactDOM.render(<FormikApp />, rootElement);

export default FormikApp;