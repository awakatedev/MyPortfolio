import '../assets/styles/components/Home.scss';
import Portfolio from '../components/Portfolio';
import useSeo from '../hooks/useSeo';

const Home = () => {
  useSeo({
    title: 'Home',
    description: 'Check out some of the projects I worked up on my portfolio!',
  });

  return (
    <main>
      <section className="hero">
        <h1>I am Jhonathan</h1>
        <h2>Web Developer</h2>
        <p>
          I'm more than HTML and CSS, I'm passionate about learning and building
          incredible software.
          <br /> To find out more about me, take a look at what I can do!
        </p>
      </section>
      <Portfolio />
    </main>
  );
};
export default Home;
