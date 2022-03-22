import { Outlet } from 'react-router-dom'
import { Categories } from '../Categories/Categories'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import cls from './Main.module.css'

export const Main = () => {
  return (
    <>
      <Header />
      <Categories />
      <main className={cls.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
