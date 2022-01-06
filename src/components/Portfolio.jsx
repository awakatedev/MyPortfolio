import '../assets/styles/components/Portfolio.scss';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  const loader = () => {
    return (
      //<SkeletonTheme color="red">
      <div className="portfolio">
        <h3>Portfolio</h3>
        <p>Loading...</p>
      </div>
      // </SkeletonTheme>
    );
  };
  if (loading) {
    return loader();
  } else {
    return <h3 className="portfolio">Portfolio</h3>;
  }
};

export default Portfolio;
