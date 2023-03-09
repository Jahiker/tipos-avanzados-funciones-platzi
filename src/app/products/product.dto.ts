import { Product } from "./product.model"

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string
}

export type examplePick = Pick<Product, 'color' | 'description'>