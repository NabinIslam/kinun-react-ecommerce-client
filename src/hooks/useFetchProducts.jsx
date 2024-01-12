import { useEffect, useState } from 'react';

function useFetchProducts(categoryQuery = '', brandQuery = '', sortQuery = '') {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    console.log(
      `https://kinun.onrender.com/api/products/?category=${categoryQuery}&brand=${brandQuery}&sort=${sortQuery}`
    );

    fetch(
      `https://kinun.onrender.com/api/products/?category=${categoryQuery}&brand=${brandQuery}&sort=${sortQuery}`
    )
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [categoryQuery, brandQuery, sortQuery]);

  const refetch = () => {
    setLoading(true);
    fetch(
      `https://kinun.onrender.com/api/products/?category=${categoryQuery}&brand=${brandQuery}&sort=${sortQuery}`
    )
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  };

  return { data, loading, error, refetch };
}

export default useFetchProducts;
