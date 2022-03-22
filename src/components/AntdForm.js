import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './AntdForm.module.css';
import 'antd/dist/antd.css';

const AntdForm = () => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .email('Invalid email address format')
          .required('Email is required'),
        password: Yup.string()
          .matches(
            /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{6,}$/,
            'Password should be atleast 6 characters long and should contain a special symbol!'
          )
          .required('Password is required'),
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });

  const handleValidationStatus = key => {
    return !touched[key] && !errors[key]
      ? ''
      : touched[key] && !errors[key]
      ? 'success'
      : touched[key] && errors[key]
      ? 'error'
      : '';
  };

  return (
    <div className={styles.AntdForm_container}>
      <h1>SignIn Form</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Form.Item
          label="Email"
          name="email"
          className={styles.form_container}
          labelAlign="left"
          validateStatus={handleValidationStatus('email')}
          hasFeedback
        >
          <Input
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email ? (
            <div className={styles.error}>{errors.email}</div>
          ) : null}
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          className={styles.form_container}
          labelAlign="left"
          validateStatus={handleValidationStatus('password')}
          hasFeedback
        >
          <Input
            id="password"
            name="password"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {touched.password && errors.password ? (
            <div className={styles.error}>{errors.password}</div>
          ) : null}
        </Form.Item>
        <Form.Item className={styles.submit_btn} labelAlign="left">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </form>
    </div>
  );
};

export default AntdForm;
