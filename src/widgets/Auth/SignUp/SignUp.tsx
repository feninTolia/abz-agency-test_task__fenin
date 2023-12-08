import { Formik } from 'formik';
import './SignUp.css';
import { useState } from 'react';
import { IValues } from '../../../shared/types';
import { signUpSchema } from './validation/signup.schema';
import SignUpForm from './components/SignUpForm/SignUpForm';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { userAuthController } from '../../../entities/User/api/controller/user-auth.controller';
import { TokenDTO } from '../../../entities/User/api/dto/user-response.dto';
import { initialValuesSignUp, queryKeys } from '../../../shared/lib/constants';

const SignUp = () => {
  const queryClient = useQueryClient();
  const [photoFile, setPhotoFile] = useState<string | File>('');

  const tokenData = queryClient.getQueryData<TokenDTO>(['token']);

  const { data: positionsData } = useQuery({
    queryKey: [queryKeys.positions],
    queryFn: () => userAuthController.getPositions(),
  });

  const { mutate } = useMutation({
    mutationFn: ({
      formData,
      token,
    }: {
      formData: FormData;
      token: string;
    }) => {
      return userAuthController.signUp(formData, token);
    },
  });

  const signUp = async (values: IValues) => {
    if (!tokenData?.token) return;

    const formData = new FormData();
    for (const value in values) {
      //@ts-expect-error error
      formData.append(value, values[value]);
    }
    formData.append('photo', photoFile);

    mutate({ formData, token: tokenData.token });
  };

  const handleFormSubmit = async (values: IValues) => {
    await signUp(values);
  };

  return (
    <section id="signup" className="signup-wrapper">
      <h2>Working with POST request</h2>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValuesSignUp}
        validationSchema={signUpSchema}
      >
        {() => (
          <SignUpForm
            positions={positionsData?.positions}
            setPhotoFile={setPhotoFile}
          />
        )}
      </Formik>
    </section>
  );
};

export default SignUp;
