import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import {
  activeCategory,
  textCategory,
} from '../../redux/actions/categoriesAction'
import { fetchProductId } from '../../redux/actions/productCategoryAction'
import { currenTextSubmenu } from '../../redux/constans'
import { IState } from '../../redux/store'
import { Basket } from '../Basket/Basket'
import { SimilarProducts } from '../SimilarProducts/SimilarProducts'
import cls from './CardItem.module.css'

export const CardItem = () => {
  const {id} = useParams()
  const productItem = useSelector(
    (state: IState) => state.productsCategoryReducer.productId
  )
  const productCategory = productItem.category.split(' ').join('')

  const dispatch = useDispatch()
  useEffect(() => {
    if (id) {
      dispatch(fetchProductId(id))
    }
  }, [id, dispatch])

  const onClickActiveCategory = () => {
    dispatch(activeCategory(productItem.category))
  }

  return (
    <div className={cls.container}>
      {productItem ? (
        <div className={cls.naviBlock}>
          <NavLink to='/'>Главная &#62;</NavLink>
          <NavLink to={`/${productCategory}`} onClick={onClickActiveCategory}>
            {textCategory(productItem.category)} &#62;
          </NavLink>
          <NavLink to={`/${productCategory}/${productItem.subcategory}/`}>
            {currenTextSubmenu(productItem.subcategory)}
          </NavLink>
        </div>
      ) : null}
      <div className={cls.product}>
        <div>
          <img src={productItem.image} alt='img' />
        </div>
        <div className={cls.descriptionBlock}>
          <h2 className={cls.title}>{productItem.title}</h2>
          <p className={cls.price}>{productItem.price}$</p>
          <Basket id={id ? id : ''}/>
          <div className={cls.deliveryBlock}>
            <div>
              <img src='/images/delivery.png' alt='delivery' />
              <p>Бесплатная доставка за 2 часа по Минску</p>
            </div>
            <div>
              <img src='/images/deliveryv2.png' alt='delivery' />
              <p>Бесплатная доставка по Беларуси</p>
            </div>
          </div>
          <p className={cls.descriptionText}>{productItem.description}</p>
          <p className={cls.rating}>
            Рейтинг {productItem.rating.rate} &#9734;
          </p>
        </div>
      </div>
      <SimilarProducts
        category={productItem.category}
        subcategory={productItem.subcategory}
      />
    </div>
  )
}
