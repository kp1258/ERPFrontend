import { useState, useEffect, useContext } from "react";
import { TokenContext } from "../Contexts/TokenContext";
import { erpApi } from "./erpApi";

export default function useFetch({ api = erpApi, method, url, data = null }) {
  const token = useContext(TokenContext);
  const [response, setResponse] = useState("null");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRefetch, refetch] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("try");
        console.log(token);
        api[method](
          url,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          JSON.parse(data)
        )
          .then((res) => {
            setResponse(res.data);
          })
          .catch((err) => {
            setError(err);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [api, method, url, data, token, shouldRefetch]);
  return { response, error, isLoading, refetch };
}
