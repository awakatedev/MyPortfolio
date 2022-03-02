import { useState, useEffect } from 'react';

const useApiCall = (url) => {
  const [data, setData] = useState({});

  useEffect(async () => {
    try {
      const response = await fetch(url);
      const statusRes = response.status;
      const object = await response.json();
      setData({ statusRes, object });
    } catch (err) {
      setData(null);
    }
  }, []);
  return { data };
};
export default useApiCall;
