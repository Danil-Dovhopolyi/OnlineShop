import { useState, useEffect } from 'react';
import CoreAPI from '../../../API/CoreAPI';
import config from '../../../API/AuthorizedConfig';

const useLikes = () => {
  const [likedProducts, setLikedProducts] = useState(() => []);

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
