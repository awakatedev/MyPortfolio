import '../assets/styles/components/Portfolio.scss';
import { useState, useEffect } from 'react';
import useApiCall from '../hooks/useApiCall';
import Skeleton from '../loaders/Skeleton';

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const { data } = useApiCall('https://api.github.com/users/awakatedev/repos');

  console.log(data);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 7000);
  }, []);

  const loader = () => {
    return (
      <section className="portfolio content">
        <h3>Portfolio</h3>
        <div className="projects">
          <Skeleton type="card" />
          <Skeleton type="card" />
          <Skeleton type="card" />
        </div>
      </section>
    );
  };

  const projects = () => {
    return (
      <div className="portfolio">
        <h3>Portfolio</h3>
      </div>
    );
  };

  return loading ? loader() : projects();
};

export default Portfolio;
