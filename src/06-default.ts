export const createProducts = (
  id: string | number,
  isNew: boolean = false,
  stock: number = 0
) => {
  return { id, stock, isNew };
};

const p1 = createProducts(3541);
console.log('🚀 ~ file: 05-optionals.ts:10 ~ p1:', p1);

const p2 = createProducts(2145, false, 54);
console.log('🚀 ~ file: 05-optionals.ts:11 ~ p2:', p2);

const p3 = createProducts(2145, false, 0);
console.log('🚀 ~ file: 05-optionals.ts:16 ~ p3:', p3);
