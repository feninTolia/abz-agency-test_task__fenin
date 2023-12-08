import { IValues } from '../../types';

export const initialValuesSignUp: IValues = {
  name: '',
  email: '',
  phone: '',
  position_id: 1,
  formikPhoto: '',
};

export enum queryKeys {
  token = 'token',
  positions = 'positions',
  users = 'users',
}
