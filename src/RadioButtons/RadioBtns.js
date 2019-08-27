import React from "react";
import { render } from "react-dom";
import * as classNames from "classnames";


// Input feedback
export const InputFeedback = ({ error }) =>
  error
    ? <div className="input-feedback">{error}</div>
    : null;

// Checkbox input
export const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  id,
  label,
  classNames,
  ...props
}) => {
  return (
  <div>
    <input
    name={name}
    id={id}
    type="checkbox"
    value={value}
    checked={value}
    onChange={onChange}
    onBlur={onBlur}
    className={"radio-button"}
    />
    <label htmlFor={id}>{label}</label>
    {touched[name] && <InputFeedback error={errors[name]} />}
  </div>
  );
};

// Radio input
export const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={"radio-button"}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

// Radio group
export const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
  const classes = classNames(
    "input-field",
    {
    "is-success": value || (!error && touched), // handle prefilled or user-filled
    "is-error": !!error && touched
    },
    className
  );

  return (
    <div className={classes}>
      <fieldset>
        <legend>{label}</legend>
        {children}
        {touched && <InputFeedback error={error} />}
      </fieldset>
    </div>
  );
};