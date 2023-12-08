import { FormControlLabel, Radio } from '@mui/material';
import { useFormikContext } from 'formik';
import { IValues } from '../../types';
interface IProps {
  value: string | number;
  label: string;
}

const RadioInput = ({ value, label }: IProps) => {
  const { handleChange } = useFormikContext<IValues>();

  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          name="position_id"
          onChange={handleChange}
          sx={{
            color: 'var(--gray-medium-clr)',
            '&.Mui-checked': {
              color: 'var(--secondary-clr)',
            },
          }}
        />
      }
      label={label}
      componentsProps={{
        typography: { fontSize: '1.6em', fontFamily: 'inherit' },
      }}
    />
  );
};

export default RadioInput;
