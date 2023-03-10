import { faker } from '@faker-js/faker';
import {
  addProduct,
  updateProduct,
  products,
} from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.rgb(),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    categoryId: faker.datatype.uuid(),
  });
}

// console.log(products);
const product = products[0];
console.log("created", product);

updateProduct(product.id, {
  title: 'New Title',
  stock: 80,
});
console.log("updated", product);

