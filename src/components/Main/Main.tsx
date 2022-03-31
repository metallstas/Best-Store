import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { IState } from '../../redux/store'
import { Categories } from '../Categories/Categories'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import cls from './Main.module.css'

export const Main = () => {
  const currentTheme = useSelector((state: IState) => state.themeReducer.currentTheme)

  return (
    <>
      <Header />
      <Categories />
      <main style={{background: currentTheme.background}} className={cls.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
