import { Formik, Field, Form } from 'formik';

export const ContactForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={values => {}}>
      <Form>
        <label>
          Name
          <Field id="name" name="name" />
        </label>
      </Form>
    </Formik>
  );
};
