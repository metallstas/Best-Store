import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect, useHistory } from 'react-router-dom'
import {
  activeCategory,
  fetchCategories,
  textCategory,
} from '../../redux/actions/categoriesAction'
import { fetchNewProducts } from '../../redux/actions/productCategoryAction'
import { IProduct } from '../../redux/redusers/productsCategoryReducer'
import { IState } from '../../redux/store'
import { CardProductMain } from '../CardProductMain/CardProductMain'
import { Loading } from '../Loading/Loading'
import { Spiner } from '../Spiner/Spiner'
import cls from './Main.module.css'

export const Main = () => {
  const dispatch = useDispatch()
  const newProduct = useSelector(
    (state: IState) => state.productsCategoryReducer.newProduct
  )
  const categories = useSelector(
    (state: IState) => state.categoriesReducer.categories
  )

  const showNewProducts = (category: string) => {
    return newProduct.products.map((product: IProduct) => {
      if (category === product.category) {
        return <CardProductMain product={product} key={product.id} />
      }
    })
  }

  const history = useHistory()
  const getInfoCategory = (category: string) => {
    history.push('/' + category)
  }

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchNewProducts())
    // dispatch(postProfi())
  }, [])

  const handlerCategories = (category: string) => {
    dispatch(activeCategory(category))
    getInfoCategory(category)
  }

  return (
    <main>
      <div className={cls.categories}>
        <ul>
          {categories.length ? (
            categories.map((item) => {
              return (
                <NavLink
                  to={`/${item}`}
                  key={item}
                  onClick={() => handlerCategories(item)}
                >
                  {textCategory(item)}
                </NavLink>
              )
            })
          ) : (
            <Spiner />
          )}
        </ul>
      </div>

      {newProduct ? (
        <div className={cls.container}>
          <NavLink to='/electronics/ssd' className={cls.img}>
            {newProduct.images.imgElectronics ? (
              <img src={newProduct.images.imgElectronics} />
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
              <Spiner />
            )}
          </div>
          <NavLink to="/men's clothing/jackets" className={cls.img}>
            {newProduct.images.imgMens ? (
              <img src={newProduct.images.imgMens} />
            ) : (
              <Spiner />
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
              <Spiner />
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </main>
  )
}
