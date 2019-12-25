import React from 'react';
import Router from "next/router";
import { useFormik } from 'formik';

const SignupPage = (req, res) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values)
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="first_name">First Name</label>
      <input
        id="first_name"
        name="first_name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.first_name}
      />
      <label htmlFor="last_name">Last Name</label>
      <input
        id="last_name"
        name="last_name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.last_name}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupPage;