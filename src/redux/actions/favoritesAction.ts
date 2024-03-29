import { Dispatch } from 'redux'
import { IProduct } from '../redusers/productsCategoryReducer'
import { ACTIONS } from './../constans'

const favorites = (productsFavorites: IProduct[]) => {
  return { type: ACTIONS.GET_PRODUCTS_FAVORITES, productsFavorites }
}

export const clearFavorites = () => {
  return { type: ACTIONS.CLEAR_FAVORITES }
}

export const deleteProductFavorite = (id: number) => {
  return { type: ACTIONS.DELETE_PRODUCT_FAVORITE, id }
}

export const fetchGetFavoriteProducts = (userId: string) => {
  return async (dispatch: Dispatch) => {
    if (userId) {
      const response = await fetch('http://localhost:3005/favorites/' + userId)
      const data = await response.json()

      dispatch(favorites(data.productsFavorites))
    }
  }
}

const fetchFavoriteUser = async (userId: string) => {
  const resp = await fetch(`http://localhost:3005/favorites/${userId}`)
  const data = await resp.json()
  return data
}

const fetchProductById = async (id: number) => {
  const resp = await fetch(`http://localhost:3005/products/` + id)
  const data = await resp.json()
  return data
}

export const fetchPostFavoriteProducts = (id: number, userId: string) => {
  return async (dispatch: Dispatch) => {
    const dataProduct = await fetchProductById(id)
    const user = await fetchFavoriteUser(userId)
    const resp = await fetch(`http://localhost:3005/favorites/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...user,
        productsFavorites: [...user.productsFavorites, dataProduct],
      }),
    })

    const data = await resp.json()
    dispatch(favorites(data.productsFavorites))
  }
}

export const fetchPutFavorite = (id: number, userId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(deleteProductFavorite(id))
    const user = await fetchFavoriteUser(userId)
    const resp = await fetch(`http://localhost:3005/favorites/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...user,
        productsFavorites: user.productsFavorites.filter(
          (el: IProduct) => el.id !== +id
        ),
      }),
    })
  }
}
