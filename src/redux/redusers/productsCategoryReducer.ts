import { ACTIONS } from '../constans'

export interface IProduct {
  category: string
  description: string
  id: any
  image: string
  price: number
  rating: { rate: number; count: number }
  title: string
  subcategory: string
}

export interface INewProduct {
  images: { imgElectronics: string; imgMens: string }
  products: IProduct[]
}

export interface IProductCategory {
  products: IProduct[]
  productsSubcategory: IProduct[]
  idProduct: number
  newProduct: INewProduct
  searchText: string
  subcategory: string[]
  productId: IProduct
}

const defaultState: IProductCategory = {
  products: [],
  productsSubcategory: [],
  idProduct: 0,
  newProduct: { images: { imgElectronics: '', imgMens: '' }, products: [] },
  searchText: '',
  subcategory: [],
  productId: {
    category: '',
    description: '',
    id: 0,
    image: '',
    price: 0,
    rating: { rate: 0, count: 0 },
    title: '',
    subcategory: '',
  },
}

export const productsCategoryReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.PRODUCTS_CATEGORY) {
    return { ...state, products: action.products }
  }
  if (action.type === ACTIONS.NEW_PRODUCTS) {
    return { ...state, newProduct: action.newProduct }
  }
  if (action.type === ACTIONS.CLEAR_STATE_PRODUCTS) {
    return { defaultState }
  }
  if (action.type === ACTIONS.PRODUCT_SUBCATEGORY) {
    return { ...state, productsSubcategory: action.product }
  }
  if (action.type === ACTIONS.GET_PRODUCT_SUBCATEGORY) {
    return { ...state, productsSubcategory: action.productSubcategory }
  }
  if (action.type === ACTIONS.SET_ID_PRODUCT) {
    return { ...state, idProduct: action.idProduct }
  }
  if (action.type === ACTIONS.SEARCH_PRODUCT) {
    return { ...state, products: action.products }
  }
  if (action.type === ACTIONS.SEARCH_TEXT) {
    return { ...state, searchText: action.searchText }
  }
  if (action.type === ACTIONS.SUBCATEGORY) {
    return { ...state, subcategory: action.subcategory }
  }
  if (action.type === ACTIONS.PRODUCT_ID) {
    return { ...state, productId: action.product}
  }

  return state
}
