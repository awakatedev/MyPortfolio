import { useState, useEffect } from 'react';

const useApiCall = (url, Method, authorization) => {
  const [data, setData] = useState({});

  useEffect(async () => {
    try {
      const response = await fetch(url, {
        method: Method,
        headers: {
          Authorization: authorization,
        },
      });
      const object = await response.json();
      //  console.log(status);
      setData({ object });
    } catch (err) {
      setData(false);
    }
  }, []);

  return !data.hasOwnProperty('message') ? { data } : alert('bad');
};
export default useApiCall;
