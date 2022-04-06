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
