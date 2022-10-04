import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";


export function useFatch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url, options)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, error, loading };
}