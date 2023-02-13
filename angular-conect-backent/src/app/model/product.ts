import {ProductType} from "./product-type";

export interface Product {
  id?: number;
  name?: string,
  stock?: string,
  price?: string,
  brands?: string,
  color?: string,
  productType?: ProductType
}
