import { useEffect, useState } from "react";
import Response from "../api/types/mockResponse";
import { getMockData } from "../api/mockData";

export function useGetMockData() {
  const [data, setData] = useState<Response["data"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  const fetchData = async () => {
    try {
      const result = await getMockData();
      setData(result.data);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  return { data, loading, error };
}
