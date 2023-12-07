import SignUp from '../widgets/Auth/SignUp/SignUp';
import Hero from '../widgets/Hero/Hero';
import Users from '../widgets/Users/Users';
import './Home.css';

const Home = () => {
  return (
    <div className="home-layout">
      <Hero />
      <Users />
      <SignUp />
    </div>
  );
};

export default Home;
