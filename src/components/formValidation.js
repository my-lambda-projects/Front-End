import * as yup from 'yup';

const FormValidation = yup.object().shape({
  username: yup
    .string()
    .trim()
    .min(4, 'user name must be at least 4 characters')
    .required('Username is required'),
  password: yup
    .string()
    .required('You must type in a password')
    .min(6, 'Your password must be at least 6 characters long'),
});

export default FormValidation;
