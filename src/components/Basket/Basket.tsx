import { ReactComponent as Logo } from './favoritesProd.svg'
import cls from './Basket.module.css'

export const Basket = () => {
  return (
    <div className={cls.productClicked}>
      <button>В корзину</button>
      <Logo className={cls.svg} />
    </div>
  )
}
