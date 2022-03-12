import { IProduct } from '../../redux/redusers/productsCategoryReducer'
import cls from './CardProductMain.module.css'

interface ICardProductMain {
  product: IProduct
}

export const CardProducMain = ({product}: ICardProductMain) => {
  return (
    <div className={cls.cardMain} key={product.id}>
      <div>
        <img src={product.image} alt='img' />
        <p className={cls.title}>{product.title}</p>
      </div>
      <p className={cls.price}>{product.price}$</p>
    </div>
  )
}
