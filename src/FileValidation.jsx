import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  lastName: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
  
  gender: Yup.string()
  .min(3, 'Enter Valid Gender')
  .max(10, 'Too Long!')
  .required('Required'),

  age: Yup.string()
.min(1, '')
.max(100, '')
.required('Required'),

});
// age: Yup.string().('Invalid email').required('Required'),



export const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        gender:'',
        age:""
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" placeholder="firstName" />
          {errors.firstName && touched.firstName ? (
            <div style={{color:"red"}}>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" placeholder="lastName"  />
          {errors.lastName && touched.lastName ? (
            <div style={{color:"red"}}>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" placeholder="email" />
          {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div> : null}
          <Field name="gender" type="gender" placeholder="gender" />
          {errors.gender && touched.gender ? <div style={{color:"red"}}>{errors.gender}</div> : null}
          <Field name="age" type="age" placeholder="age" />
          {errors.age && touched.age ? <div style={{color:"red"}}>{errors.age}</div> : null}


          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);