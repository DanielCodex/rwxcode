import { useEffect, useState } from "react";

const useFetcher = (url: string) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(url)
      .then((res) => res.json())
      .then((res) => setState({ data: res, loading: false }));
  }, [url]);

  return state;
};


export default useFetcher;