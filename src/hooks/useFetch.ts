import { useState, useEffect } from "react";
import { request } from "../request";
import { AxiosError } from "axios";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await request.get(url);
        setData(res.data.data);
      } catch (error) {
        setError(error as AxiosError);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
