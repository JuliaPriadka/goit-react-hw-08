import { Field, Form, Formik } from 'formik';
import css from './loginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

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
      }}>
      <Form className={css.loginForm}>
        <label htmlFor="email" className={css.loginFormLabel}>
          Email
        </label>
        <Field name="email" type="email" className={css.loginFormField} />
        <label htmlFor="password" className={css.loginFormLabel}>
          Password
        </label>
        <Field name="password" type="password" className={css.loginFormField} />
        <button type="submit" className={css.loginFormBtn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
