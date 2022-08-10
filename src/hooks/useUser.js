import { useState, useEffect } from "react"

export const useUser = (userId) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        const response = await fetch(`http://localhost:8080/users/${userId}`);
        const ret = await response.json();
        setUser(ret);
        setLoading(false);
      })();
    }, 1000);
  }, [userId]);

  return [user, loading];
};
