import { addProduct, products } from './products/product.service';

addProduct({
  id: '2',
  createdAt: new Date(),
  updatedAt: new Date(),
  title: 'Camisa',
  stock: 80,
  size: 'M',
  category: {
    id: '12',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'c',
  },
});

console.log(products);
