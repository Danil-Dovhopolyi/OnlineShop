import CoreAPI from '../../../../API/CoreAPI';
import config from '../../../../API/AuthorizedConfig';

const unlikeProduct = (id) => {
  if (typeof id !== 'number' || id < 1) {
    return;
  }

  CoreAPI.delete(`like/${id}`, config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.warn(error.data);
    });
};

export default unlikeProduct;
