import React from 'react';

function SignupPage ({formik}) {
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