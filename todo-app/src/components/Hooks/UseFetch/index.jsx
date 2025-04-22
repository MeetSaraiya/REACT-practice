import React, { useEffect, useState } from "react";

export const useFetch = (url, option) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    async function fetchReq() {
      setLoading(true);
      try {
        const res = await fetch(url, option);
        const jres = await res.json();
        setData(jres);
        setLoading(false);
      } catch (error) {
        setErr(error);
        console.error(err);
      }
    }
    fetchReq();
  }, [url, option, err]);

  return { loading, data, err };
};
