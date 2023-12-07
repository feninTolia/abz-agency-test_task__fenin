import './Hero.css';
//@ts-expect-error Importing a static asset will return the resolved public URL when it is served
import heroImg from '../../assets/hero-img.jpg';
import SignUpNavButton from '../../features/Buttons/SignUpNavButton';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__content">
          <div className="flow">
            <h1 className="hero__headline">
              Test assignment for front-end developer
            </h1>
            <p>
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </p>
            <SignUpNavButton />
          </div>
        </div>
        <img src={heroImg} alt="hero" className="hero_img" />
      </div>
    </section>
  );
};

export default Hero;
