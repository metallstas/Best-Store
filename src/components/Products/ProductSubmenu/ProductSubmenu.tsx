import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import {
  activeCategory,
  textCategory,
} from '../../../redux/actions/categoriesAction'
import {
  fetchProductsSubcategory,
  setIdProduct,
} from '../../../redux/actions/productCategoryAction'
import { IProduct } from '../../../redux/redusers/productsCategoryReducer'
import { IState } from '../../../redux/store'
import cls from './ProductSubmenu.module.css'
import { currentCategory, currenTextSubmenu } from '../../../redux/constans'
import { CardProduct } from '../../CardProduct/CardProduct'
import { Loading } from '../../Loading/Loading'

export const ProductSubmenu = () => {
  const productsSubcategory = useSelector(
    (state: IState) => state.productsCategoryReducer.productsSubcategory
  )
  const dispatch = useDispatch()

  const location = useLocation()
  const locationItem = location.pathname.split('/')
  const category = locationItem[1]
  const textSubmenu = locationItem[2]

  useEffect(() => {
    dispatch(fetchProductsSubcategory(currentCategory(category), textSubmenu))
  }, [textSubmenu, category])

  const a = () => {
    dispatch(activeCategory(category))
  }

  const onMouseOverCard = (id: number) => {
    dispatch(setIdProduct(id))
  }

  const productCategory = category.split(' ').join('')

  return (
    <div>
      <div className={cls.container}>
        <div className={cls.naviBlock}>
          <NavLink to='/'>Главная &#62;</NavLink>
          <NavLink to={`/${productCategory}`} onClick={a}>
            {textCategory(currentCategory(category))} &#62;
          </NavLink>
          <span className={cls.activeCategory}>
            {currenTextSubmenu(textSubmenu)}
          </span>
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
                  onMouseOver={(e) => {
                    onMouseOverCard(+e.currentTarget.id)
                  }}
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
