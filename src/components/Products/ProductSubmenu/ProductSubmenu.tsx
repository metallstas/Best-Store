import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import {
  activeCategory,
  textCategory,
} from '../../../redux/actions/categoriesAction'
import { fetchProductsSubcategory } from '../../../redux/actions/productCategoryAction'
import { IProduct } from '../../../redux/redusers/productsCategoryReducer'
import { IState } from '../../../redux/store'
import cls from './ProductSubmenu.module.css'
import { getCurrentCategory, getCurrentTextSubmenu } from '../../../redux/constans'
import { CardProduct } from '../../CardProduct/CardProduct'
import { Loading } from '../../Loading/Loading'
import { Sort } from '../../Sort/Sort'

export const ProductSubmenu = () => {
  const productsSubcategory = useSelector(
    (state: IState) => state.productsCategoryReducer.products
  )
  const dispatch = useDispatch()

  const location = useLocation()
  const locationItem = location.pathname.split('/')
  const category = locationItem[1]
  const textSubmenu = locationItem[2]

  useEffect(() => {
    dispatch(fetchProductsSubcategory(getCurrentCategory(category), textSubmenu))
  }, [textSubmenu, category])

  const onClickActiveCategory = () => {
    dispatch(activeCategory(category))
  }

  const productCategory = category.split(' ').join('')

  return (
    <div>
      <div className={cls.container}>
        <div className={cls.naviBlock}>
          <div>
            <NavLink to='/'>Главная &#62;</NavLink>
            <NavLink to={`/${productCategory}`} onClick={onClickActiveCategory}>
              {textCategory(getCurrentCategory(category))} &#62;
            </NavLink>
            <span className={cls.activeCategory}>
              {getCurrentTextSubmenu(textSubmenu)}
            </span>
          </div>
          <Sort />
        </div>
        <div className={cls.wrapper}>
          {productsSubcategory ? (
            productsSubcategory.map((product: IProduct) => {
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
        </div>
      </div>
    </div>
  )
}
