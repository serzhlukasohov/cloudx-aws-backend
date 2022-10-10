import { handler } from '../../../utils/handler.js';
import { productList } from '../../../mocks/product-list.js';

const getProductById = handler(async (e) => {
  const { productId } = e.pathParameters;

  const product = productList.find(({ id }) => id === productId);

  return {
    statusCode: 200,
    json: product,
  };
});

export { getProductById };
