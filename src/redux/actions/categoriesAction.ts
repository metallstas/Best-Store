import { Dispatch } from 'redux'
import { ACTIONS } from '../constans'
import { ICatergories } from '../redusers/categoriesReducer'

const categories = (categories: ICatergories) => {
  return { type: ACTIONS.CATEGORIES, categories }
}

export const textCategory = (text = '') => {
    if (text === 'electronics') {
      return 'Электроника'
    }
    if (text === 'jewelery') {
      return 'Украшения'
    }
    if (text === "men's clothing") {
      return 'Мужская одежда'
    }
    if (text === "women's clothing") {
      return 'Женская одежда'
    }
    return
  }

export const activeCategory = (category: string) => {
  return { type: ACTIONS.ACTIVE_CATEGORY, category }
}

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    const resp = await fetch('http://localhost:3005/categories')
    const data = await resp.json()
    dispatch(categories(data))
  }
}
