import { Dispatch } from 'redux'
import { ACTIONS } from '../constans'
import { INewProduct, IProduct } from '../redusers/productsCategoryReducer'

const productsCategory = (products: IProduct[]) => {
  return { type: ACTIONS.PRODUCTS_CATEGORY, products }
}

const productSubcategory = (products: IProduct[]) => {
  return { type: ACTIONS.GET_PRODUCT_SUBCATEGORY, productSubcategory: products }
}

const newProduct = (newProduct: INewProduct) => {
  return { type: ACTIONS.NEW_PRODUCTS, newProduct }
}

export const clearStateProduct = () => {
  return { type: ACTIONS.CLEAR_STATE_PRODUCTS }
}

export const setIdProduct = (idProduct: number) => {
  return { type: ACTIONS.SET_ID_PRODUCT, idProduct }
}

export const fetchNewProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const resp = await fetch('http://localhost:3005/newProducts')
      const data = await resp.json()

      if (resp.ok) {
        dispatch(newProduct(data))
      }
    } catch (error: any) {}
  }
}

export const fetchProductsSubcategory = (
  category: string,
  subcategory: string
) => {
  return async (dispatch: Dispatch) => {
    const resp = await fetch(
      `http://localhost:3005/products?category=${category}&subcategory=${subcategory}`
    )
    const data = await resp.json()
    dispatch(productSubcategory(data))
  }
}

export const fetchProductsCategory = (category: string) => {
  return async (dispatch: Dispatch) => {
    const resp = await fetch(
      `http://localhost:3005/products?category=${category}`
    )
    const data = await resp.json()
    dispatch(productsCategory(data))
  }
}
