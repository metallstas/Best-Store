import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CardItem } from '../components/CradItem/CardItem'
import { HomePage } from '../components/HomePage/HomePage'
import { Main } from '../components/Main/Main'
import { Products } from '../components/Products/Products'
import { ProductSubmenu } from '../components/Products/ProductSubmenu/ProductSubmenu'
import { Profile } from '../components/Profile/Profile'
import { init } from '../redux/actions/authAction'

export const RootRouter = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(init())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path='searchProducts' element={<Products />} />
          <Route path='user/*' element={<Profile />}>
            <Route path='myProfile' element={<h1>Мой профиль</h1>} />
            <Route path='myDiscount' element={<h1>Моя Скидка</h1>} />
          </Route>
          <Route path='electronics' element={<Products />} />
          <Route path='electronics/hdd' element={<ProductSubmenu />} />
          <Route path='electronics/ssd' element={<ProductSubmenu />} />
          <Route path='electronics/tv' element={<ProductSubmenu />} />
          <Route path='electronics/hdd/:id' element={<CardItem />} />
          <Route path='electronics/ssd/:id' element={<CardItem />} />
          <Route path='electronics/tv/:id' element={<CardItem />} />
          <Route path='jewelery' element={<Products />} />
          <Route path='jewelery/rings' element={<ProductSubmenu/>} />
          <Route path='jewelery/bracelet' element={<ProductSubmenu />} />
          <Route path='jewelery/rings/:id' element={<CardItem />} />
          <Route path='jewelery/bracelet/:id' element={<CardItem />} />
          <Route path="men'sclothing" element={<Products />} />
          <Route path="men'sclothing/T-shirts" element={<ProductSubmenu />} />
          <Route path="men'sclothing/jackets" element={<ProductSubmenu />} />
          <Route path="men'sclothing/bags" element={<ProductSubmenu />} />
          <Route path="men'sclothing/T-shirts/:id" element={<CardItem />} />
          <Route path="men'sclothing/jackets/:id" element={<CardItem />} />
          <Route path="men'sclothing/bags/:id" element={<CardItem />} />
          <Route path="women'sclothing" element={<Products />} />
          <Route path="women'sclothing/T-shirts" element={<ProductSubmenu />} />
          <Route path="women'sclothing/jackets" element={<ProductSubmenu />} />
          <Route path="women'sclothing/T-shirts/:id" element={<ProductSubmenu />} />
          <Route path="women'sclothing/jackets/:id" element={<ProductSubmenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
