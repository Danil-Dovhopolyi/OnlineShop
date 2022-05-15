import CoreAPI from '../../../../API/CoreAPI';
import config from '../../../../API/AuthorizedConfig';

const likeProduct = (id) => {
  if (typeof id !== 'number' || id < 1) {
    return;
  }

  const requestBody = {};

  CoreAPI.post(`like/${id}`, requestBody, config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.warn(error.data);
    });
};

export default likeProduct;
