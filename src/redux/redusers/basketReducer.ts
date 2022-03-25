import { ACTIONS } from './../constans'
import { IProduct } from './productsCategoryReducer'

export interface IBasketReducer {
  basketProducts: IProduct[]
}

const defaultState = {
  basketProducts: [],
}

export const basketReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.GET_PRODUCTS_BASKET) {
    return { basketProducts: action.basketProducts }
  }

  if (action.type === ACTIONS.DELETE_PRODUCT_BASKET) {
    return {
      basketProducts: state.basketProducts.filter(
        (el: IProduct) => el.id !== action.id
      ),
    }
  }

  if (action.type === ACTIONS.CLEAR_BASKET) {
    return {defaultState}
  }

  return state
}
