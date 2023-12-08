import { ButtonHTMLAttributes } from 'react';
import Button from '../../shared/ui/Buttons/Button';

const ShowMoreUsersBtn = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>Show More</Button>;
};

export default ShowMoreUsersBtn;
