import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetFavoriteProducts } from '../../redux/actions/favoritesAction'
import { IProduct } from '../../redux/redusers/productsCategoryReducer'
import { IState } from '../../redux/store'
import { CardProduct } from '../CardProduct/CardProduct'
import { NoProducts } from '../NoProducts/NoProducts'
import cls from './Favorites.module.css'

export const Favorites = () => {
  const dispatch = useDispatch()
  const userId = useSelector((state: IState) => state.authReducer.id)
  const products = useSelector(
    (state: IState) => state.favoritesReducer.productsFavorites
  )
  useEffect(() => {
    if (userId) {
      dispatch(fetchGetFavoriteProducts(userId))
    }
  }, [userId])

  return (
    <section>
      <div className={cls.container}>
        <h2>Избранное</h2>
        <div className={cls.productWrap}>
          {products && products.length ? (
            products.map((product: IProduct) => {
              return (
                <CardProduct
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  subcategory={product.subcategory}
                  image={product.image}
                  key={product.id}
                />
              )
            })
          ) : (
            <NoProducts text='Товаров в избранном нет' />
          )}
        </div>
      </div>
    </section>
  )
}
