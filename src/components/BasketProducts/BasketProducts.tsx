import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetBasketProducts } from '../../redux/actions/basketAction'
import { IBasketProduct } from '../../redux/redusers/basketReducer'
import { IState } from '../../redux/store'
import { Button } from '../Button/Button'
import { CardProductMain } from '../CardProductMain/CardProductMain'
import { NoProducts } from '../NoProducts/NoProducts'
import cls from './BasketProducts.module.css'

export const BasketProducts = () => {
  const dispatch = useDispatch()
  const userId = useSelector((state: IState) => state.authReducer.id)
  const [total, setTotal] = useState<number>(0)
  const products = useSelector(
    (state: IState) => state.basketReducer.basketProducts
  )
  const currentTheme = useSelector(
    (state: IState) => state.themeReducer.currentTheme
  )

  const getTotalSum = () => {
    if (products) {
      const total = products.reduce((acc: number, current: IBasketProduct) => {
        return acc + +current.price * current.count
      }, 0)
      setTotal(total)
    } else {
      setTotal(0)
    }
  }

  useEffect(() => {
    dispatch(fetchGetBasketProducts(userId))
  }, [userId])

  useEffect(() => {
    getTotalSum()
  }, [products])

  return (
    <section>
      <div style={{ background: currentTheme.backgroundHeader }}>
        <div className={cls.container}>
          <div className={cls.orderWrap}>
            <p style={{ color: currentTheme.colorText }}>Корзина</p>
            <div className={cls.order}>
              <p style={{ display: 'flex', color: currentTheme.colorText }}>
                Сумма заказа: &nbsp; 
                <span className={cls.totalSum}>{total.toFixed(2)}$</span>
              </p>
              <Button text={'Оформить заказ'} />
            </div>
          </div>
        </div>
      </div>
      <div className={cls.container}>
        <div className={cls.productWrap}>
          {products && products.length ? (
            products.map((product: IBasketProduct) => {
              return (
                <CardProductMain
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  subcategory={product.subcategory}
                  image={product.image}
                  isdelete={true}
                  key={product.id}
                  count={product.count}
                />
              )
            })
          ) : (
            <NoProducts text='Товаров в корзине пока нет' />
          )}
        </div>
      </div>
    </section>
  )
}
