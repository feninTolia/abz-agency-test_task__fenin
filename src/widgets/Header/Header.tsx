import SignUpNavButton from '../../features/Buttons/SignUpNavButton';
import UsersNavButton from '../../features/Buttons/UsersNavButton';
import Logo from '../../features/Logo/Logo';
import './Header.css';

const Header = () => {
  return (
    <header className="header-wrapper">
      <section className="header">
        <Logo />
        <nav className="buttons-group">
          <UsersNavButton />
          <SignUpNavButton />
        </nav>
      </section>
    </header>
  );
};

export default Header;
