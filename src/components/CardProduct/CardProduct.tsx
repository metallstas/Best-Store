import { SyntheticEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showSearch } from '../../redux/actions/headeAction'
import { IState } from '../../redux/store'
import { Basket } from '../Basket/Basket'
import { Spiner } from '../Spiner/Spiner'
import cls from './CardProduct.module.css'

interface IProductCard {
  id: string
  title: string
  image: string
  price: number
  category: string
  subcategory: string
  onMouseOver: (e: SyntheticEvent<HTMLDivElement>) => void
}

export const CardProduct = ({
  id,
  subcategory,
  title,
  image,
  price,
  category,
  onMouseOver,
}: IProductCard) => {
  const productId = useSelector(
    (state: IState) => state.productsCategoryReducer.idProduct
  )
  const dispatch = useDispatch()

  const productCategory = category.split(' ').join('')

  const navigate = useNavigate()
  const getInfoProduct = (id: string) => {
    dispatch(showSearch(false))
    navigate(`/${productCategory}/${subcategory}/${id}`)
  }

  return (
    <div
      className={cls.product}
      onMouseOver={onMouseOver}
      id={id}
      onClick={() => getInfoProduct(id)}
    >
      <div className={cls.productCard}>
        {title ? <img src={image} alt='img' /> : <Spiner />}
        <p className={cls.title}>{title}</p>
      </div>
      <div>
        <p className={cls.price}>{price}$</p>
        {id === productId ? (
          <div className={cls.clikedBlock}>
            <Basket />
          </div>
        ) : null}
      </div>
    </div>
  )
}
