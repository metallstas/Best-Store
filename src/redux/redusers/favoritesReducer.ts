import { ACTIONS } from '../constans'
import { IProduct } from './productsCategoryReducer'

export interface IFavoritesReducer {
  productsFavorites: IProduct[]
}

const defaultState = {
  productsFavorites: [],
}

export const favoritesReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.GET_PRODUCTS_FAVORITES) {
    return { productsFavorites: action.productsFavorites }
  }

  if (action.type === ACTIONS.DELETE_PRODUCT_FAVORITE) {
    return {
      productsFavorites: state.productsFavorites.filter(
        (el: IProduct) => el.id !== action.id
      ),
    }
  }

  if (action.type === ACTIONS.CLEAR_FAVORITES) {
    return { defaultState }
  }

  return state
}
