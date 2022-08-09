import { useState, useEffect } from "react"

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        const response = await fetch('http://localhost:8080/current-user');
        const ret = await response.json();
        setCurrentUser(ret);
        setLoading(false);
      })();
    }, 1000);
  }, []);

  return [currentUser, loading];
};
