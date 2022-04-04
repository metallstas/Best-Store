import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  fetchGetBasketProducts,
} from '../../redux/actions/basketAction'
import { fetchCategories } from '../../redux/actions/categoriesAction'
import { fetchGetFavoriteProducts } from '../../redux/actions/favoritesAction'
import {
  closeMenu,
  openMenu,
  showLogin,
  showSearch,
} from '../../redux/actions/headeAction'
import { searchText } from '../../redux/actions/productCategoryAction'
import { IState } from '../../redux/store'
import { CSSTransition } from 'react-transition-group'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'
import { Login } from '../Login/Login'
import cls from './Header.module.css'
import { fetchChangeTheme } from '../../redux/actions/themeAction'

export const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userId = useSelector((state: IState) => state.authReducer.id)
  const isShowLogin = useSelector(
    (state: IState) => state.headerReducer.showLogin
  )
  const isLogin = useSelector((state: IState) => state.authReducer.isLoggedIn)
  const basketProduct = useSelector(
    (state: IState) => state.basketReducer.basketProducts
  )
  const favoriteProducts = useSelector(
    (state: IState) => state.favoritesReducer.productsFavorites
  )
  const text = useSelector(
    (state: IState) => state.productsCategoryReducer.searchText
  )
  const isOpen = useSelector((state: IState) => state.headerReducer.isOpenMenu)
  const showSearchInput = useSelector(
    (state: IState) => state.headerReducer.showSearch
  )
  const isDark = useSelector((state: IState) => state.themeReducer.isDark)
  const currentTheme = useSelector(
    (state: IState) => state.themeReducer.currentTheme
  )

  useEffect(() => {
    dispatch(fetchGetBasketProducts(userId))
    dispatch(fetchGetFavoriteProducts(userId))
  }, [userId])

  const menuOpenHandler = () => {
    dispatch(openMenu())
    dispatch(fetchCategories())
  }

  const menuCloseHandler = () => {
    dispatch(closeMenu())
    dispatch(showSearch(false))
  }

  const showSearchHandler = () => {
    dispatch(showSearch(true))
    dispatch(closeMenu())
    if (showSearchInput) {
      dispatch(showSearch(false))
    }
  }

  const searchProductHandler = (text: string) => {
    dispatch(searchText(text))
    navigate('/searchProducts')
  }

  const onClickChangeTheme = () => {
    dispatch(closeMenu())
    dispatch(fetchChangeTheme())
  }

  const onClickShowLogin = () => {
    dispatch(closeMenu())
    dispatch(showLogin(true))
  }

  const onClickCloseSubmenu = () => {
    dispatch(closeMenu())
  }

  return (
    <>
      <header
        className={cls.header}
        style={{ background: currentTheme.backgroundHeader }}
      >
        <div className={cls.container}>
          <div className={cls.wrapper}>
            <div className={cls.burgerBlock}>
              <div onClick={menuOpenHandler} className={cls.wrapBurger}>
                <button
                  style={{ background: currentTheme.colorText }}
                  className={
                    !isOpen ? `${cls.burger}` : `${cls.burger} ${cls.open}`
                  }
                >
                  <p
                    style={{ background: currentTheme.colorText }}
                    className={
                      !isOpen
                        ? `${cls.burgerTop}`
                        : `${cls.burgerTop} ${cls.open}`
                    }
                  ></p>
                  <p
                    style={{ background: currentTheme.colorText }}
                    className={
                      !isOpen
                        ? `${cls.burgerBottom}`
                        : `${cls.burgerBottom} ${cls.open}`
                    }
                  ></p>
                </button>
              </div>
              <p
                style={{ color: currentTheme.colorText }}
                className={cls.catalogText}
              >
                КАТАЛОГ
              </p>
              <a
                style={{ color: currentTheme.colorText }}
                href='tel:+375336128264'
              >
                +375(33)612-82-64
              </a>
            </div>
            <div className={cls.logo}>
              <NavLink
                style={{ color: currentTheme.colorText }}
                onClick={menuCloseHandler}
                to='/'
              >
                BEST STORE
              </NavLink>
            </div>
            <div className={cls.userBlock}>
              {showSearchInput ? (
                <input
                  style={{ color: currentTheme.colorText }}
                  className={cls.input}
                  value={text}
                  onChange={(e) => {
                    searchProductHandler(e.target.value)
                  }}
                  placeholder='Поиск'
                  type='text'
                />
              ) : null}
              <div onClick={showSearchHandler} className={cls.userBlockItem}>
                <img
                  className={cls.imgHeader}
                  src={
                    isDark ? '/images/search-while.png' : '/images/search.png'
                  }
                  alt='search'
                />
                {!showSearchInput ? (
                  <p style={{ color: currentTheme.colorText }}>Поиск</p>
                ) : null}
              </div>
              <div className={cls.userBlockItem}>
                {isLogin ? (
                  <NavLink
                    to='/user/myProfile'
                    onClick={() => dispatch(closeMenu())}
                  >
                    <img
                      className={cls.imgHeader}
                      src={
                        isDark
                          ? '/images/profile-while.png'
                          : '/images/profile.png'
                      }
                      alt='profile'
                    />
                    <p style={{ color: currentTheme.colorText }}>Профиль</p>
                  </NavLink>
                ) : (
                  <div className={cls.userBlockItem} onClick={onClickShowLogin}>
                    <img
                      className={cls.imgHeader}
                      src={
                        isDark ? '/images/enter-while.png' : '/images/enter.png'
                      }
                      alt='enter'
                    />
                    <p style={{ color: currentTheme.colorText }}>Войти</p>
                  </div>
                )}
              </div>
              <NavLink
                to='/favorites'
                className={cls.userBlockItem}
                onClick={onClickCloseSubmenu}
              >
                <img
                  className={cls.imgHeader}
                  src={
                    isDark
                      ? '/images/favorites-while.png'
                      : '/images/favorites.png'
                  }
                  alt='favorites'
                />
                <p style={{ color: currentTheme.colorText }}>Избранное</p>
                {favoriteProducts && favoriteProducts.length ? (
                  <span className={cls.productCount}>
                    {favoriteProducts.length}
                  </span>
                ) : null}
              </NavLink>
              <NavLink
                to='/basket'
                className={cls.userBlockItem}
                onClick={onClickCloseSubmenu}
              >
                <img
                  className={cls.imgHeader}
                  src={
                    isDark ? '/images/basket-while.png' : '/images/basket.png'
                  }
                  alt='basket'
                />
                <p style={{ color: currentTheme.colorText }}>Корзина</p>
                {basketProduct && basketProduct.length ? (
                  <span className={cls.productCount}>
                    {basketProduct.length}
                  </span>
                ) : null}
              </NavLink>
              <img
                onClick={onClickChangeTheme}
                className={cls.imgTheme}
                src={isDark ? '/images/moon.png' : '/images/sun.png'}
                alt='sun'
              />
            </div>
          </div>
        </div>
        <CSSTransition
          in={isOpen}
          timeout={500}
          mountOnEnter
          unmountOnExit
          classNames={{
            enterActive: cls.navBarEnter,
            exitActive: cls.navBarExit,
          }}
        >
          <HeaderMenu />
        </CSSTransition>
      </header>
      {isShowLogin ? <Login /> : null}
    </>
  )
}
