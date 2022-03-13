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

const subcategory = (subCat: string[]) => {
  return { type: ACTIONS.SUBCATEGORY, subcategory: subCat }
}

const productId = (product: IProduct) => {
  return {type: ACTIONS.PRODUCT_ID, product}
}

export const clearStateProduct = () => {
  return { type: ACTIONS.CLEAR_STATE_PRODUCTS }
}

export const setIdProduct = (idProduct: number) => {
  return { type: ACTIONS.SET_ID_PRODUCT, idProduct }
}

export const searchText = (text: string) => {
  return { type: ACTIONS.SEARCH_TEXT, searchText: text }
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

export const fetchSearchProducts = (text: string) => {
  return async (dispatch: Dispatch) => {
    const resp = await fetch(`http://localhost:3005/products?q=${text}`)
    const data = await resp.json()
    dispatch(productsCategory(data))
  }
}

export const fetchProductSubcategory = (category: string) => {
  return async (dispatch: Dispatch) => {
    const resp = await fetch(
      `http://localhost:3005/products?category=${category}`
    )
    const data = await resp.json()
    const subcategoryAll = await data.map((el: IProduct) => el.subcategory)
    const unicSubCat: any = new Set(subcategoryAll)
    dispatch(subcategory([...unicSubCat]))
  }
}

export const fetchProductId = (id: string) => {
  console.log(id)
  return async (dispatch: Dispatch) => {
    const resp = await fetch(`http://localhost:3005/products/` + id)
    const data = await resp.json()
    dispatch(productId(data))
  }
}
