import { addProduct, products } from "./products/product.service";

addProduct({
  id: 2,
  title: "Camisa",
  createdAt: new Date(),
  stock: 80,
  size: "M",
  category: {
    id: 12,
    name: "c"
  }
})

console.log(products)
