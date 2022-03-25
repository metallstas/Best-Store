import { ACTIONS } from '../constans'

export interface ICatergories {
  categories: string[]
  activeCategory: string
}

const defaultState: ICatergories = {
  categories: [],
  activeCategory: '',
}

export const categoriesReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.CATEGORIES) {
    return { ...state, categories: action.categories }
  }

  if (action.type === ACTIONS.ACTIVE_CATEGORY) {
    return { ...state, activeCategory: action.category }
  }
  return state
}
