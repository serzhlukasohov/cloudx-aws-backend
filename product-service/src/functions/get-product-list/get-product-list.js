import { handler } from '../../../utils/handler.js';
import { productList } from '../../../mocks/product-list.js';

const getProductsList = handler(async () => ({
  statusCode: 200,
  json: productList,
}));

export { getProductsList };
