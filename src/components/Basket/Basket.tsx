import { ReactComponent as Logo } from './favoritesProd.svg'
import cls from './Basket.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../redux/store'
import { fetchPostBasketProducts } from '../../redux/actions/basketAction'
import { IProduct } from '../../redux/redusers/productsCategoryReducer'
import {
  fetchPostFavoriteProducts,
  fetchPutFavorite,
} from '../../redux/actions/favoritesAction'

interface IBasket {
  id: string
}

export const Basket = ({ id }: IBasket) => {
  const dispatch = useDispatch()
  const basketProducts = useSelector(
    (state: IState) => state.basketReducer.basketProducts
  )
  const favoriteProducts = useSelector(
    (state: IState) => state.favoritesReducer.productsFavorites
  )

  const userId = useSelector((state: IState) => state.authReducer.id)

  const isProductBasket = basketProducts
    ? basketProducts.some((el: IProduct) => {
        return el.id.toString() === id.toString()
      })
    : null

  const isfavoriteProducts = favoriteProducts
    ? favoriteProducts.some(
        (el: IProduct) => el.id.toString() === id.toString()
      )
    : null

  const onClickBasket = () => {
    dispatch(fetchPostBasketProducts(id, userId))
  }

  const onClickFavorites = () => {
    dispatch(fetchPostFavoriteProducts(id, userId))
  }

  const onClickRemoveFavorite = () => {
    dispatch(fetchPutFavorite(id, userId))
  }

  return (
    <div className={cls.productClicked}>
      {!isProductBasket ? (
        <button className={cls.btnBasketAdd} onClick={onClickBasket}>
          В корзину
        </button>
      ) : (
        <>
          <div>
            <button className={cls.btnBasket}>В корзине</button>
          </div>
        </>
      )}
      {!isfavoriteProducts ? (
        <Logo onClick={onClickFavorites} className={cls.svg} />
      ) : (
        <Logo onClick={onClickRemoveFavorite} className={cls.svgAdded} />
      )}
    </div>
  )
}
