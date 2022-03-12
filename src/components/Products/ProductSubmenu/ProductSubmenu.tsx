import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
  activeCategory,
  textCategory,
} from '../../../redux/actions/categoriesAction'
import {
  clearStateProduct,
  fetchProductsCategory,
  fetchProductsSubcategory,
  setIdProduct,
} from '../../../redux/actions/productCategoryAction'
import {
  IProductCategory,
  IProduct,
} from '../../../redux/redusers/productsCategoryReducer'
import { IState } from '../../../redux/store'
import { Spiner } from '../../Spiner/Spiner'
import cls from './ProductSubmenu.module.css'
import { ReactComponent as Logo } from './24037.svg'
import { currenTextSubmenu } from '../../../redux/constans'
import { CardProduct } from '../../CardProduct/CardProduct'

interface IProductSubmenu {
  textSubmenu: string
  category: string
}

export const ProductSubmenu = ({ textSubmenu, category }: IProductSubmenu) => {
  const [productId, setProductId] = useState<number>(0)
  const productsSubcategory = useSelector(
    (state: IState) => state.productsCategoryReducer.productsSubcategory
  )
  const dispatch = useDispatch()
  console.log(productsSubcategory)

  useEffect(() => {
    dispatch(clearStateProduct())
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
            <div className={cls.loadingBlock}>
              <Spiner />
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
