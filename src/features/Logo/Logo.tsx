//@ts-expect-error Importing a static asset will return the resolved public URL when it is served
import logo from '../../assets/Logo.svg';

const Logo = () => {
  return (
    <a href="/">
      <img alt="logo" src={logo} />
    </a>
  );
};

export default Logo;
