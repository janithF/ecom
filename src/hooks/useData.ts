import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useData = <T>(endpoint: string, transformdata?: (data: any) => T[], requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getData = async (controler: AbortController) => {
    setIsLoading(true);
    try {
      const res = await apiClient.get(endpoint, { signal: controler.signal, ...requestConfig });
      const data = transformdata ? transformdata(res.data) : res.data;
      setData(data);
      setIsLoading(false);
    } catch (err) {
      if (err instanceof CanceledError) return;
      if (err instanceof Error) {
        setError(err.message);
      }
      setIsLoading(false);
    }
  };

  useEffect(
    () => {
      const controller = new AbortController();
      getData(controller);
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useData;
