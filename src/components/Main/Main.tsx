import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import cls from './Main.module.css'

export const Main = () => {
  return (
    <>
      <Header />
      <main className={cls.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
