import { ACTIONS } from './../constans'
import { IProduct } from './productsCategoryReducer'

export interface IBasketReducer {
  basketProducts: IBasketProduct[]
}

export interface IBasketProduct extends IProduct {
  count: number
}

const defaultState = {
  basketProducts: [],
}

export const basketReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.GET_PRODUCTS_BASKET) {
    return { ...state, basketProducts: action.basketProducts }
  }

  if (action.type === ACTIONS.DELETE_PRODUCT_BASKET) {
    return {
      ...state,
      basketProducts: state.basketProducts.filter(
        (el: IProduct) => el.id !== action.id
      ),
    }
  }

  if (action.type === ACTIONS.CLEAR_BASKET) {
    return { defaultState }
  }

  if (action.type === ACTIONS.CHANGE_COUNT_PLUS) {
    return {
      ...state,
      basketProducts: state.basketProducts.map((el: IBasketProduct) => {
        if (el.id === action.id) {
          return { ...el, count: action.count }
        }
        return el
      }),
    }
  }

  return state
}
