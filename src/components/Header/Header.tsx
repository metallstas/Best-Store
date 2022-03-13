import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { fetchCategories } from '../../redux/actions/categoriesAction'
import {
  closeMenu,
  openMenu,
  showSearch,
} from '../../redux/actions/headeAction'
import {
  fetchSearchProducts,
  searchText,
} from '../../redux/actions/productCategoryAction'
import { IState } from '../../redux/store'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'
import cls from './Header.module.css'

export const Header = () => {
  const dispatch = useDispatch()
  const text = useSelector(
    (state: IState) => state.productsCategoryReducer.searchText
  )
  const isOpen = useSelector((state: IState) => state.headerReducer.isOpenMenu)
  const showSearchInput = useSelector(
    (state: IState) => state.headerReducer.showSearch
  )

  const menuOpenHandler = () => {
    dispatch(openMenu())
    dispatch(fetchCategories())
  }

  const menuCloseHandler = () => {
    dispatch(closeMenu())
  }

  const showSearchHandler = () => {
    dispatch(showSearch())
  }

  const searchProductHandler = (text: string) => {
    dispatch(fetchSearchProducts(text))
  }

  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <div className={cls.wrapper}>
          <div className={cls.burgerBlock}>
            <div onClick={menuOpenHandler} className={cls.wrapBurger}>
              <button
                className={
                  !isOpen ? `${cls.burger}` : `${cls.burger} ${cls.open}`
                }
              ></button>
            </div>
            <p className={cls.catalogText}>КАТАЛОГ</p>
            <p>+375(33)612-82-64</p>
          </div>
          <div className={cls.logo}>
            <NavLink onClick={menuCloseHandler} to='/'>
              BEST STORE
            </NavLink>
          </div>
          <div className={cls.userBlock}>
            {showSearchInput ? (
              <input
                className={cls.input}
                value={text}
                onChange={(e) => {
                  dispatch(searchText(e.target.value))
                  searchProductHandler(e.target.value)
                }}
                placeholder='Поиск'
                type='text'
              />
            ) : null}
            <div onClick={showSearchHandler} className={cls.userBlockItem}>
              <img
                className={cls.imgHeader}
                src='/images/search.png'
                alt='search'
              />
              {!showSearchInput ? <p>Поиск</p> : null}
            </div>
            <div className={cls.userBlockItem}>
              <img
                className={cls.imgHeader}
                src='/images/enter.png'
                alt='enter'
              />
              <p>Войти</p>
            </div>
            <div className={cls.userBlockItem}>
              <img
                className={cls.imgHeader}
                src='/images/favorites.png'
                alt='favorites'
              />
              <p>Избранное</p>
            </div>
            <div className={cls.userBlockItem}>
              <img
                className={cls.imgHeader}
                src='/images/basket.png'
                alt='basket'
              />
              <p>Корзина</p>
            </div>
          </div>
        </div>
      </div>
      {isOpen ? <HeaderMenu /> : null}
      {text ? <Redirect to='/searchText' /> : null}
    </header>
  )
}
