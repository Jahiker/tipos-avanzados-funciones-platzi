type Sizes = "S" | "M" | "L" | "XL";

// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size: Sizes
// }

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes
}

const products: Product[] = [];

products.push({
  id: "1",
  title: "p1",
  createdAt: new Date(),
  stock: 90,
  size: "L"
})

const addProduct = (data: Product): void => {
  products.push(data);
}

addProduct({
  id: 2,
  title: "Camisa",
  createdAt: new Date(),
  stock: 80,
  size: "M"
})

console.log("PRODUCTS[]", products);
