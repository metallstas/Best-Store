import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsSubcategory } from '../../redux/actions/productCategoryAction'
import { IState } from '../../redux/store'
import { CardProductMain } from '../CardProductMain/CardProductMain'
import cls from './SimilarProducts.module.css'

interface ISimiliarProducts {
  category: string
  subcategory: string
}

export const SimilarProducts = ({
  category,
  subcategory,
}: ISimiliarProducts) => {
  const dispatch = useDispatch()
  const products = useSelector(
    (state: IState) => state.productsCategoryReducer.productsSubcategory
  )
  useEffect(() => {
    dispatch(fetchProductsSubcategory(category, subcategory))
  }, [category, subcategory])
  return (
    <div className={cls.similaProductWrap}>
      <p className={cls.similarProductText}>Похожие товары</p>
      <div className={cls.similarProduct}>
        {products ? products.map((product) => (
          <CardProductMain product={product} />
        )) : null}
      </div>
    </div>
  )
}
