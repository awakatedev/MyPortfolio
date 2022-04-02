import '../assets/styles/components/About.scss';
import useSeo from '../hooks/useSeo';

const About = () => {
  useSeo({
    title: 'About',
    description:
      'Awakate.dev | Awakatedev | Awakate,  Find out more about me and what I can do!',
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
            2 years of experience doing Front-end development projects, working
            various personal and collaborative projects as well as working as a
            "leader" with SCRUM agile metodologie and providing special
            attention to UI/UX aspects of the development process of software.
            Experience working with aspects of the development process like
            consuming API rest from the front side, DOM manipulation, Responsive
            design and interactivity on interfaces building landing pages,
            E-comerce websites and small practice projects.
          </p>
          <h2>Specialities</h2>
          <ul>
            <li>React.js</li>
            <li>SASS</li>
            <li>ES6+</li>
            <li>AWS</li>
            <li>Linux</li>
          </ul>
          <h2>Trajectory</h2>
          <p>
            I plan to enrich my front-end knowledge and give users excellence
            related to things like UI and UX and providing an efficient
            experience within platforms. I'm very interested in data management,
            the automation of processes and the innovation like the offered by
            decentralisation proposed by WEB3 and the crypto world. I'm
            interested in working in a collaborative and efficient environment
            that allows me to learn new things, grow and help others grow with
            my knowledge and experience in the tech industry.
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
