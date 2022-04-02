import { useState, useEffect } from 'react';

const useApiCall = (url, Method) => {
  const [data, setData] = useState(false);

  useEffect(async () => {
    try {
      const credentials = btoa(
        'awakatedev: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',
      );
      const response = await fetch(url, {
        method: Method,
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });
      const object = await response.json();
      //  console.log(status);
      setData({ object });
    } catch (err) {
      setData(false);
    }
  }, [!data]);

  return !data.hasOwnProperty('message') && { data };
};
export default useApiCall;
