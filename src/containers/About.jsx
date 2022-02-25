import '../assets/styles/components/About.scss';
import useSeo from '../hooks/useSeo';

const About = () => {
  useSeo({
    title: 'About',
    description: 'Find out more about me and what I can do!',
  });

  return (
    <>
      <main>
        <section className="about">
          <h1>Who I am?</h1>
          <p>
            I'm Jhonathan Hartswing Saldarriaga Gallango, I'm passionate about
            technology, specialized in front-end development, self-taught and
            constantly learning, and ambitious to build the best quality
            software, I'm also something of a crypto enthusiast and awakates
            lover!
          </p>
          <h2>Experience</h2>
          <p>
            I have 2 years of experience doing front-end development and
            experimenting in various areas of software creation, experience in
            personal and collaborative projects as a leader. I'm also co-founder
            of an open-source software development organization where together
            with colleagues from other parts of the world we develop tools to
            contribute to the world of technology and offer software solutions
            to our customers.
          </p>
          <h2>Specialities</h2>
          <ul></ul>
          <h2>Trajectory</h2>
          <p>
            I plan to enrich my front-end knowledge and give users excellence
            related to things like UI and UX and providing an efficient
            experience within platforms. I'm very interested in data management,
            the automation of processes and the innovation like the offered by
            decentralisation proposed by WEB3 and the crypto world.
          </p>
          <h2>Skills</h2>
        </section>
      </main>
    </>
  );
};

export default About;
