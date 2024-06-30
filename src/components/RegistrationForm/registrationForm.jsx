import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './registrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Please, enter your name'),
  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email')
    .required('Please, enter your email'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .required('The password should be longer than 4 symbols!'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
      validationSchema={SignupSchema}>
      <Form className={css.registrationForm}>
        <label htmlFor="name" className={css.registrationFormLabel}>
          Name
        </label>
        <Field name="name" className={css.registrationFormField} />

        <ErrorMessage name="name" component="p" className={css.errorMsg} />
        <label htmlFor="email" className={css.registrationFormLabel}>
          Email
        </label>
        <Field name="email" className={css.registrationFormField} />

        <ErrorMessage name="email" component="p" className={css.errorMsg} />
        <label htmlFor="password" className={css.registrationFormLabel}>
          Password
        </label>
        <Field
          name="password"
          type="password"
          className={css.registrationFormField}
        />

        <ErrorMessage name="password" component="p" className={css.errorMsg} />
        <button type="submit" className={css.registrationFormBtn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
