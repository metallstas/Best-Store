import { Button } from '../../Button/Button'
import cls from './ProfileDiscount.module.css'

export const ProfileDiscount = () => {
  return (
    <div className={cls.discount}>
      <p className={cls.discountPercentage}>- 0% -</p>
      <p className={cls.discountText}>
        Ваша персональная скидка на все товары при покупках во всех магазинах
        Best Store, заказе на сайте или в приложении.
      </p>
      <div className={cls.discountCard}>
        <p>Номер дисконтной карты</p>
        <input />
        <Button text={'Добавить карту'} />
      </div>
    </div>
  )
}
