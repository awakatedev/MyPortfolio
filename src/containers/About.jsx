import '../assets/styles/components/About.scss';
import { useSelector } from 'react-redux';

const About = () => {
  const dropDownState = useSelector(
    (state) => state.dropDownReducer.dropDownState.label,
  );
  return (
    <>
      <h1>Who I am?</h1>
      <p>
        I am Jhonathan Hartswing Saldarriaga Gallango, passionate about
        technology, specialized in frontend development, self-taught and
        constantly learning, ambitious to build the best quality software,
        enthusiast of crypto and awakates lover
      </p>
      <h2>Experience</h2>
      <p>
        I have 2 years of experience doing frontend development and
        experimenting in various areas of software creation, experience in
        personal and collaborative projects as a leader and co-founder of an
        open source software development organization where together with
        colleagues from other parts of the world we develop tools to contribute
        to the world of technology and offer software solutions to our
        customers.
      </p>
      <h2>Specialities</h2>
      <ul>
        <li>React.js</li>
      </ul>
      <h2>Trajectory</h2>
      <p>
        Deepen more in the frontend and offer excellence in aspects of user
        experience, and interface efficiency and go hand in hand with a good
        design that engages and makes the end user feel like, I am very
        interested in data management and automation of processes, and the
        decentralization offered by WEB3 and the crypto world.
      </p>
      <h2>Skills</h2>
      <p>{dropDownState}</p>
    </>
  );
};

export default About;
