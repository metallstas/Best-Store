import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import {
  activeCategory,
  textCategory,
} from '../../redux/actions/categoriesAction'
import {
  fetchProductsCategory,
  fetchSearchProducts,
} from '../../redux/actions/productCategoryAction'
import { IProduct } from '../../redux/redusers/productsCategoryReducer'
import { IState } from '../../redux/store'
import cls from './Products.module.css'
import { CardProduct } from '../CardProduct/CardProduct'
import { Loading } from '../Loading/Loading'
import { closeMenu } from '../../redux/actions/headeAction'
import { currentCategory } from '../../redux/constans'
import { NoProducts } from '../NoProducts/NoProducts'

export const Products = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const products = useSelector(
    (state: IState) => state.productsCategoryReducer.products
  )
  const text = useSelector(
    (state: IState) => state.productsCategoryReducer.searchText
  )

  const category = !text ? location.pathname.split('/')[1] : ''

  useEffect(() => {
    if (text) {
      dispatch(fetchSearchProducts(text))
    }
  }, [text, dispatch])

  useEffect(() => {
    if (category) {
      dispatch(fetchProductsCategory(currentCategory(category)))
      dispatch(activeCategory(category))
    }
  }, [category])

  return (
    <section>
      <div className={cls.container}>
        <div className={cls.naviBlock}>
          <NavLink
            to='/'
            onClick={() => {
              dispatch(closeMenu())
            }}
          >
            Главная &#62;
          </NavLink>
          <span className={cls.activeCategory}>
            {textCategory(currentCategory(category))}
          </span>
        </div>
        <div className={cls.wrapper}>
          {products ? (
            products.map((product: IProduct) => {
              return (
                <CardProduct
                  key={product.id}
                  category={product.category}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  subcategory={product.subcategory}
                />
              )
            })
          ) : (
            <Loading />
          )}
          {products.length === 0 ? (
            <NoProducts text='Извините, товары не найдены' />
          ) : null}
        </div>
      </div>
    </section>
  )
}
