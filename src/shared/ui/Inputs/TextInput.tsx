import { TextField } from '@mui/material';
import { useFormikContext } from 'formik';
import { IValues } from '../../types';

interface IProps {
  name: 'name' | 'email';
  label: string;
}

const TextInput = ({ name, label }: IProps) => {
  const { handleBlur, handleChange, values, touched, errors } =
    useFormikContext<IValues>();
  return (
    <TextField
      label={label}
      onBlur={handleBlur}
      onChange={handleChange}
      value={values[name]}
      name={name}
      error={Boolean(touched[name]) && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
      InputProps={{
        style: { fontSize: '1.6em', fontFamily: 'inherit' },
      }}
      InputLabelProps={{
        style: { fontSize: '1.6em', fontFamily: 'inherit' },
      }}
      FormHelperTextProps={{
        style: { fontSize: '1.2em', fontFamily: 'inherit' },
      }}
    />
  );
};

export default TextInput;
