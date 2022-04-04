import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchNewProducts } from '../../redux/actions/productCategoryAction'
import { IProduct } from '../../redux/redusers/productsCategoryReducer'
import { IState } from '../../redux/store'
import { CardProductMain } from '../CardProductMain/CardProductMain'
import { Loading } from '../Loading/Loading'
import { Spinner } from '../Spinner/Spinner'
import cls from './HomePage.module.css'

export const HomePage = () => {
  const dispatch = useDispatch()
  const newProduct = useSelector(
    (state: IState) => state.productsCategoryReducer.newProduct
  )
  const currentTheme = useSelector((state: IState) => state.themeReducer.currentTheme)

  const showNewProducts = (category: string) => {
    return newProduct.products.map((product: IProduct) => {
      if (category === product.category) {
        return (
          <CardProductMain
            id={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            subcategory={product.subcategory}
            image={product.image}
            key={product.id}
          />
        )
      }
    })
  }

  useEffect(() => {
    dispatch(fetchNewProducts())
  }, [])

  return (
    <section style={{background: currentTheme.background}}>
      {newProduct ? (
        <div className={cls.container}>
          <NavLink to='/electronics/ssd' className={cls.img}>
            {newProduct.images.imgElectronics ? (
              <img className={cls.imgElectronics} src={newProduct.images.imgElectronics} />
            ) : null}
          </NavLink>
          <div className={cls.nameImage}>
            <h2>Самые быстрые SSD</h2>
          </div>
          <div>
            {newProduct.products ? (
              <div className={cls.cardMainWrap}>
                {showNewProducts('electronics')}
              </div>
            ) : (
              <Spinner />
            )}
          </div>
          <NavLink to="/men'sclothing/jackets" className={cls.img}>
            {newProduct.images.imgMens ? (
              <img src={newProduct.images.imgMens} />
            ) : (
              <Spinner />
            )}
          </NavLink>
          <div className={cls.nameImage}>
            <h2>Новое поступление Курток</h2>
          </div>

          <div>
            {newProduct.products ? (
              <div className={cls.cardMainWrap}>
                {showNewProducts("men's clothing")}
              </div>
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  )
}
