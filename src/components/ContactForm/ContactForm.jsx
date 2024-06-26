import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'min 3 - to short!')
    .max(50, 'max 50 - to long!')
    .required('required'),
  number: Yup.string()
    .min(3, 'min 3 - to short!')
    .max(50, 'max 50 - to long!')
    .required('required'),
});

const ContactForm = ({ addContact }) => {
  const fieldNameId = useId();
  const fieldNumberId = useId();

  return (
    <Formik
      initialValues={{ id: nanoid(), name: '', number: '' }}
      onSubmit={(values, actions) => {
        addContact(values);
        actions.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form className={css.wrapper}>
        <label htmlFor={fieldNameId}>Name</label>
        <Field className={css.input} type="text" id={fieldNameId} name="name" />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={fieldNumberId}>Number</label>
        <Field
          className={css.input}
          type="phone"
          id={fieldNumberId}
          name="number"
        />
        <ErrorMessage name="number" component="span" />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
