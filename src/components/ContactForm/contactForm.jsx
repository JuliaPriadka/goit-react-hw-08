import { Field, Formik, Form, ErrorMessage } from 'formik';
import css from '../ContactForm/contactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

const phoneRegExp = /[\d\s-]{6,10}$/;

const FormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please fill this field'),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Please fill this field'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(addContact(values))
          .unwrap()
          .then(() => {
            toast.success('Contact added!', {
              style: {
                color: 'rgb(154 6 131)',
              },
            });
          })
          .catch(() => {
            toast.error('Error! Please try again');
          });
        actions.resetForm();
      }}
      validationSchema={FormValidationSchema}>
      <Form className={css.form}>
        <label htmlFor="name" className={css.formLabel}>
          Name
        </label>
        <Field name="name" className={css.formField} />
        <ErrorMessage name="name" component="p" className={css.errorMessage} />
        <label htmlFor="number" className={css.formLabel}>
          Number
        </label>
        <Field name="number" className={css.formField} />
        <ErrorMessage
          name="number"
          component="p"
          className={css.errorMessage}
        />
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
