import '../assets/styles/components/Home.scss';
import Portfolio from '../components/Portfolio';

const Home = () => (
  <div>
    <section className="hero">
      <h1>I am Jhonathan</h1>
      <h2>Web Developer</h2>
      <p>
        I am more than html and css, I am passionate about learning and building
        incredible software.
        <br /> to know more about me, take a look at what I can do!
      </p>
    </section>
    <Portfolio />
  </div>
);

export default Home;