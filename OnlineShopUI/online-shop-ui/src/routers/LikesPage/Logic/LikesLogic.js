import { useState, useEffect } from 'react';
import CoreAPI from '../../../API/CoreAPI';

const useLikes = () => {
  const [likedProducts, setLikedProducts] = useState(() => []);
  const [config, setConfig] = useState(() => {
    return {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
  });

  useEffect(() => {
    getLikedProducts();
  }, []);

  function getLikedProducts() {
    CoreAPI.get('/like', config)
      .then((response) => {
        setLikedProducts(response.data);
      })
      .catch((error) => {
        console.warn(error.data);
      });
  }

  return [likedProducts];
};

export default useLikes;
