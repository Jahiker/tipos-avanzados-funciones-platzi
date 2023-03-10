import { Product } from './product.model';

// Omit crea la interfaz omitiendo las propiedades especificadas
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}
// Pick crea la interfaz solo incluyendo las propiedades especificadas
export type examplePick = Pick<Product, 'color' | 'description'>;

// Partial crea el type o interfaz y convierte todas las propiedades en opcionales
export interface UpdateProductDto extends Partial<CreateProductDto> {}
// Required crea el type o interfaz y convierte todas las propiedades en obligatorias
export type example2 = Required<Product>;
