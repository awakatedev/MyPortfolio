import '../assets/styles/components/Portfolio.scss';
//import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
//import Skeleton from '../loaders/Skeleton';

const Portfolio = () => {
  // const [loading, setLoading] = useState(true);
  return (
    <div className="portfolio">
      <h3>Portfolio</h3>
      <div className="projects">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Portfolio;
