import { ButtonHTMLAttributes } from 'react';
import './Button.css';
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: IProps) => {
  return (
    <button className="btn" {...props}>
      <span className="btn-text">{children}</span>
    </button>
  );
};

export default Button;
