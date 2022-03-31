import { Dispatch } from 'redux'
import { IProduct } from '../redusers/productsCategoryReducer'
import { ACTIONS } from './../constans'

export const basket = (basketProducts: IProduct[]) => {
  return { type: ACTIONS.GET_PRODUCTS_BASKET, basketProducts }
}

export const changeCountPlus = (id: string, count: number) => {
  return { type: ACTIONS.CHANGE_COUNT_PLUS, id, count }
}

export const clearBasket = () => {
  return { type: ACTIONS.CLEAR_BASKET }
}

export const deleteProductBasket = (id: string) => {
  return { type: ACTIONS.DELETE_PRODUCT_BASKET, id }
}

export const fetchGetBasketProducts = (userId: string) => {
  return async (dispatch: Dispatch) => {
    if (userId) {
      const basketLocal = localStorage.getItem('basket')
      const response = await fetch('http://localhost:3005/basket/' + userId)
      const data = await response.json()
      dispatch(basket(basketLocal ? basketLocal : data.basketProducts))
    }
  }
}

const fetchBasketUser = async (userId: string) => {
  const resp = await fetch(`http://localhost:3005/basket/${userId}`)
  const data = await resp.json()
  return data
}

const fetchProductById = async (id: string) => {
  const resp = await fetch(`http://localhost:3005/products/` + id)
  const data = await resp.json()
  return { ...data, count: 1 }
}

export const fetchPostBasketProducts = (id: string, userId: string) => {
  return async (dispatch: Dispatch) => {
    const dataProduct = await fetchProductById(id)
    const user = await fetchBasketUser(userId)
    const resp = await fetch(`http://localhost:3005/basket/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...user,
        basketProducts: [...user.basketProducts, dataProduct],
      }),
    })

    const data = await resp.json()

    dispatch(basket(data.basketProducts))
  }
}

export const fetchPUTBasket = (id: string, userId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(deleteProductBasket(id))
    const user = await fetchBasketUser(userId)
    const resp = await fetch(`http://localhost:3005/basket/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...user,
        basketProducts: user.basketProducts.filter((el: any) => el.id !== id),
      }),
    })
  }
}
