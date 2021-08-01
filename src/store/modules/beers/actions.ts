import { IBeer } from "./types";


export function loadMoreProducts(products: IBeer) {
  return {
    type: 'LOAD_MORE_PRODUCTS',
    payload: {
      products,
    }
  }
}