import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import {
  activeCategory,
  textCategory,
} from '../../redux/actions/categoriesAction'
import {
  fetchProductsCategory,
  fetchSearchProducts,
  setIdProduct,
} from '../../redux/actions/productCategoryAction'
import { IProduct } from '../../redux/redusers/productsCategoryReducer'
import { IState } from '../../redux/store'
import cls from './Products.module.css'
import { CardProduct } from '../CardProduct/CardProduct'
import { Loading } from '../Loading/Loading'
import { closeMenu } from '../../redux/actions/headeAction'

interface IProducts {
  category?: string
}

export const Products = ({ category }: IProducts) => {
  const products = useSelector(
    (state: IState) => state.productsCategoryReducer.products
  )
  const text = useSelector(
    (state: IState) => state.productsCategoryReducer.searchText
  )

  const activeCategoryText = useSelector(
    (state: IState) => state.categoriesReducer.activeCategory
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (category) {
      dispatch(fetchProductsCategory(category))
      dispatch(activeCategory(category))
    }
  }, [])

  const onMouseOverCard = (id: number) => {
    dispatch(setIdProduct(id))
  }

  return (
    <div className={cls.productsWrapper}>
      <div className={cls.container}>
        <div className={cls.naviBlock}>
          <NavLink to='/' onClick={() => {dispatch(closeMenu())}}>Главная &#62;</NavLink>
          <span className={cls.activeCategory}>
            {textCategory(activeCategoryText)}
          </span>
        </div>

        <div className={cls.wrapper}>
          {products ? (
            products.map((item: IProduct) => {
              return (
                <CardProduct
                  key={item.id}
                  product={item}
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
