import { useState, useEffect, useRef } from "react";

export default url => {
  const isCurrent = useRef(true);
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  const getStats = async () => {
    console.log("UseFetch invoked:", url);
    let data;
    try {
      let response = await fetch(url);
      data = await response.json();
      if (isCurrent.current) setStats(data);
    } catch (err) {
      setError(err);
      setStats(null);
    }
    if (isCurrent.current) setLoading(false);
  };

  useEffect(() => {
    if (url) getStats();
  }, [url, setStats]);

  return { stats, loading, error };
};

// export default function Example() {
//   const [data, dataSet] = useState(false);

//   async function fetchMyAPI() {
//     let response = await fetch("api/data");
//     response = await res.json();
//     dataSet(response);
//   }

//   useEffect(() => {
//     fetchMyAPI();
//   }, []);

//   return <div>{data}</div>;
// }
