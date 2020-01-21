import SignupPage from '../../components/SignupPage';
import HomePage from '../../components/HomePage';
import fetch from "isomorphic-unfetch";
import { useFormik } from 'formik';
import { useState } from 'react';

async function fetchData() {
  const result = await fetch(`http://localhost:3000/api/listuser`);
  if (result.status === 200) return { data: await result.json() };
  if (result.error && res) {
    res.statusCode = 404;
  }
  return { data: undefined };
}

function Signup({formik}, props) { 
  async function refresh(e) {
    e.preventDefault();
    console.log('refresh')
    fetchData();
  }
  refresh()

  const [
    data,
    setMyFetchedData
  ] = useState(props.data);
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    formik = useFormik({
      initialValues: {
        first_name: '',
        last_name: '',
      },
      onSubmit : values => {
        alert(JSON.stringify(values, null, 2));
        fetch('/serversx', {
          method: 'POST',
          headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
          }, 
          body: JSON.stringify(values, null, 2)
          })
          .then(response => response.json())
          .then(data => {
            {if(data)
              console.log(data)
              refresh()
            }
          })
          .catch(error => console.log(error))
      },
    });

    async function refresh() {
      const refreshedProps = await fetchData();
      setMyFetchedData(refreshedProps.data);
    }

    return (
      <>
        <SignupPage formik={formik}/>
        <HomePage data={data}/>
        <button onClick={refresh}>Refresh</button>
      </>
    );
}

Signup.getInitialProps = fetchData;

export default Signup;