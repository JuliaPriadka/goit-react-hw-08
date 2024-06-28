import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './loginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please, enter your email'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .required('The password should be longer than 4 symbols!'),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(login(values));
        actions.resetForm();
      }}
      validationSchema={LoginSchema}>
      <Form className={css.loginForm}>
        <label htmlFor="email" className={css.loginFormLabel}>
          Email
        </label>
        <Field name="email" type="email" className={css.loginFormField} />
        <ErrorMessage name="email" component="p" className={css.errorMsg} />
        <label htmlFor="password" className={css.loginFormLabel}>
          Password
        </label>
        <Field name="password" type="password" className={css.loginFormField} />
        <ErrorMessage name="password" component="p" className={css.errorMsg} />
        <button type="submit" className={css.loginFormBtn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
