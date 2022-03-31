import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  fetchProductsCategory,
  fetchProductsSubcategory,
  productsCategory,
} from '../../redux/actions/productCategoryAction'
import {
  IProduct,
} from '../../redux/redusers/productsCategoryReducer'
import { IState } from '../../redux/store'
import cls from './Sort.module.css'

export const Sort = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const [sortAscendingPrice, setSortAscendingPrice] = useState<boolean>(true)
  const [sortAscendingPopularity, setSortAscendingPopularity] =
    useState<boolean>(true)
  useState<boolean>(true)
  const products = useSelector(
    (state: IState) => state.productsCategoryReducer.products
  )
  const category = location.pathname.split('/')[1]
  const subcategory = location.pathname.split('/')[2]

  useEffect(() => {
    if (subcategory) {
      dispatch(fetchProductsSubcategory(category, subcategory))
      return
    }
    dispatch(fetchProductsCategory(category))
  }, [])

  const sortProductsAscendingPrice = () => {
    if (products) {
      setSortAscendingPrice(() => false)
      const copyProducts = [...products]
      const sorted = copyProducts.sort((a: IProduct, b: IProduct) => {
        return a.price - b.price
      })
      dispatch(productsCategory(sorted))
      return
    }
  }

  const sortProductsDescendingPrice = () => {
    if (products) {
      setSortAscendingPrice(() => true)
      const copyProducts = [...products]
      const sorted = copyProducts.sort((a: IProduct, b: IProduct) => {
        return b.price - a.price
      })
      dispatch(productsCategory(sorted))
      return
    }
  }

  const sortProductsAscendingPopularity = () => {
    if (products) {
      setSortAscendingPopularity(() => false)
      const copyProducts = [...products]
      const sorted = copyProducts.sort((a: IProduct, b: IProduct) => {
        return a.rating.rate - b.rating.rate
      })
      dispatch(productsCategory(sorted))
      return
    }
  }

  const sortProductsDescendingPopularity = () => {
    if (products) {
      setSortAscendingPopularity(() => true)
      const copyProducts = [...products]
      const sorted = copyProducts.sort((a: IProduct, b: IProduct) => {
        return b.rating.rate - a.rating.rate
      })
      dispatch(productsCategory(sorted))
      return
    }
  }

  return (
    <div className={cls.sort}>
      <p
        onClick={
          sortAscendingPrice
            ? sortProductsAscendingPrice
            : sortProductsDescendingPrice
        }
      >
        По цене{' '}
        <span className={`${cls.arrow} ${cls.active}`}>
          {' '}
          {!sortAscendingPrice ? <>&uArr;</> : <>&dArr;</>}
        </span>
      </p>
      <p
        onClick={
          sortAscendingPopularity
            ? sortProductsAscendingPopularity
            : sortProductsDescendingPopularity
        }
      >
        По популярности{' '}
        <span className={cls.arrow}>
          {!sortAscendingPopularity ? <>&uArr;</> : <>&dArr;</>}
        </span>
      </p>
    </div>
  )
}
