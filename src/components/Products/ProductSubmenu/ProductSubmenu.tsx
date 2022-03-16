import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
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
import { currenTextSubmenu } from '../../../redux/constans'
import { CardProduct } from '../../CardProduct/CardProduct'
import { Loading } from '../../Loading/Loading'

interface IProductSubmenu {
  textSubmenu: string
  category: string
}

export const ProductSubmenu = ({ textSubmenu, category }: IProductSubmenu) => {
  const productsSubcategory = useSelector(
    (state: IState) => state.productsCategoryReducer.productsSubcategory
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsSubcategory(category, textSubmenu))
  }, [textSubmenu, category])

  const a = () => {
    dispatch(activeCategory(category))
  }

  const onMouseOverCard = (id: number) => {
    dispatch(setIdProduct(id))
  }

  return (
    <div className={cls.productsWrapper}>
      <div className={cls.container}>
        <div className={cls.naviBlock}>
          <NavLink to='/'>Главная &#62;</NavLink>
          <NavLink to={`/${category}`} onClick={a}>
            {textCategory(category)} &#62;
          </NavLink>
          <span className={cls.activeCategory}>
            {currenTextSubmenu(textSubmenu)}
          </span>
        </div>
        <div className={cls.wrapper}>
          {productsSubcategory ? (
            productsSubcategory.map((item: IProduct) => {
              return (
                <CardProduct
                  key={item.id}
                  product={item}
                  onMouseOver={(e) => onMouseOverCard(+e.currentTarget.id)}
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
