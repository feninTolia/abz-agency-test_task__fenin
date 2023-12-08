import React, { useEffect } from 'react';
import TextInput from '../../../../../shared/ui/Inputs/TextInput';
import PhoneInput from '../../../../../shared/ui/Inputs/PhoneInput';
import { FormLabel, RadioGroup } from '@mui/material';
import RadioInput from '../../../../../shared/ui/Inputs/RadioInput';
import UploadFile from '../UploadFile/UploadFile';
import Button from '../../../../../shared/ui/Buttons/Button';
import { useFormikContext } from 'formik';
import { IValues } from '../../../../../shared/types';
import './SignUpForm.css';

interface IProps {
  positions?: { id: number; name: string }[];
  setPhotoFile: React.Dispatch<React.SetStateAction<string | File>>;
  isSuccessSubmit: boolean;
  isSignUpPending: boolean;
}

const SignUpForm = ({
  positions,
  setPhotoFile,
  isSuccessSubmit,
  isSignUpPending,
}: IProps) => {
  const { handleSubmit, resetForm } = useFormikContext<IValues>();
  useEffect(() => {
    if (isSuccessSubmit === true) {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccessSubmit]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-inputs-wrapper">
        <TextInput name="name" label="Your Name" />
        <TextInput name="email" label="Email" />
        <PhoneInput name="phone" label="Phone" />
      </div>

      <div className="radio-buttons-wrapper">
        <FormLabel
          id="positions-label"
          style={{ fontSize: '1.6em', fontFamily: 'inherit', color: 'inherit' }}
        >
          Select your position
        </FormLabel>
        <RadioGroup
          aria-labelledby="positions-label"
          defaultValue="frontend"
          name="positions"
        >
          {positions?.map((position) => (
            <RadioInput
              key={position.id}
              value={position.id}
              label={position.name}
            />
          ))}
        </RadioGroup>
      </div>

      <UploadFile setPhotoFile={setPhotoFile} />

      <Button disabled={isSignUpPending} type="submit">
        {isSignUpPending ? 'loading' : 'Sign Up'}
      </Button>
    </form>
  );
};

export default SignUpForm;
