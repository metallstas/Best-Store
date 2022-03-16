import { SyntheticEvent } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { IProduct } from '../../redux/redusers/productsCategoryReducer'
import { IState } from '../../redux/store'
import { Basket } from '../Basket/Basket'
import { Spiner } from '../Spiner/Spiner'
import cls from './CardProduct.module.css'

interface IProductCard {
  product: IProduct
  onMouseOver: (e: SyntheticEvent<HTMLDivElement>) => void
}

export const CardProduct = ({ product, onMouseOver }: IProductCard) => {
  const productId = useSelector(
    (state: IState) => state.productsCategoryReducer.idProduct
  )
  const history = useHistory()
  const getInfoProduct = (id: string) => {
    history.push(`/${product.category}/${product.subcategory}/${id}`)
  }

  return (
    <div
      className={cls.product}
      onMouseOver={onMouseOver}
      id={product.id}
      onClick={() => getInfoProduct(product.id)}
    >
      <div className={cls.productCard}>
        {product.title ? <img src={product.image} alt='img' /> : <Spiner />}
        <p className={cls.title}>{product.title}</p>
      </div>
      <div>
        <p className={cls.price}>{product.price}$</p>
        {product.id === productId ? (
          <div className={cls.clikedBlock}>
            <Basket />
          </div>
        ) : null}
      </div>
    </div>
  )
}
