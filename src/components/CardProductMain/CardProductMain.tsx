import { useNavigate } from 'react-router-dom'
import { IProduct } from '../../redux/redusers/productsCategoryReducer'
import cls from './CardProductMain.module.css'

interface ICardProductMain {
  product: IProduct
}

export const CardProductMain = ({product}: ICardProductMain) => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate(`/${product.category}/${product.subcategory}/${product.id}`)
  }

  return (
    <div onClick={onClick} className={cls.cardMain} key={product.id}>
      <div>
        <img src={product.image} alt='img' />
        <p className={cls.title}>{product.title}</p>
      </div>
      <p className={cls.price}>{product.price}$</p>
    </div>
  )
}
