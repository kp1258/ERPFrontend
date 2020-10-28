import { useState, useEffect } from "react";
import { erpApi } from "./erpApi";

export default function useFetch({
  api = erpApi,
  method,
  url,
  data = null,
  config = null,
}) {
  const [response, setResponse] = useState("null");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRefetch, refetch] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        api[method](url, JSON.parse(config), JSON.parse(data))
          .then((res) => {
            setResponse(res.data);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [api, method, url, data, config, shouldRefetch]);
  return { response, error, isLoading, refetch };
}
