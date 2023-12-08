import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup.string().min(2).max(60).required('required'),
  email: yup.string().email('invalid email').required('required'),
  phone: yup
    .string()
    .matches(/^[+]{0,1}380([0-9]{9})$/, 'Invalid phone number format')
    .required('Phone number is required'),
  position_id: yup.string().required('required'),
  formikPhoto: yup.string().required('jpeg/jpg photo is required'),
});
