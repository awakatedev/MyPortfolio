import '../assets/styles/components/Portfolio.scss';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3>Portfolio</h3>
      <div className="projects">
        <ProjectCard />
      </div>
    </section>
  );
};

export default Portfolio;
