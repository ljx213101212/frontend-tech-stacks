import { useEffect, useState } from "react";

const useFetch = ({ url }: { url: string }) => {
  const [content, setContent] = useState<string>("Loading...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.text();
          setContent(data.substring(0, 100) + "..."); // Display first 100 characters
        } else {
          setError(`Failed to fetch resource. Status: ${response.status}`);
        }
      } catch (err) {
        setError("Error fetching resource.");
      }
    };

    fetchResource();
  }, []);

  return [content, error];
};

export default useFetch;
