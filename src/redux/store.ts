import { headerReducer, IHeaderReducer } from './redusers/headerReducer'
import {
  IProductCategory,
  productsCategoryReducer,
} from './redusers/productsCategoryReducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { categoriesReducer, ICatergories } from './redusers/categoriesReducer'

export interface IState {
  categoriesReducer: ICatergories
  productsCategoryReducer: IProductCategory
  headerReducer: IHeaderReducer
}

export const store = createStore(
  combineReducers({
    categoriesReducer,
    productsCategoryReducer,
    headerReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
