import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product): void => {
  // data.id = "1651SDDS45"
  // data.createdAt = new Date(1998,1,1);
  products.push(data);
};
