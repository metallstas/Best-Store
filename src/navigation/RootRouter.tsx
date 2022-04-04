import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BasketProducts } from '../components/BasketProducts/BasketProducts'
import { CardItem } from '../components/CradItem/CardItem'
import { Favorites } from '../components/Fvorites/Favorites'
import { HomePage } from '../components/HomePage/HomePage'
import { Main } from '../components/Main/Main'
import { Products } from '../components/Products/Products'
import { ProductSubmenu } from '../components/Products/ProductSubmenu/ProductSubmenu'
import { Profile } from '../components/Profile/Profile'
import { ProfileData } from '../components/Profile/ProfileData/ProfileData'
import { ProfileDiscount } from '../components/Profile/ProfileDiscount/ProfileDiscount'
import { init } from '../redux/actions/authAction'
import { fetchInitTheme } from '../redux/actions/themeAction'

export const RootRouter = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(init())
    dispatch(fetchInitTheme())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path='searchProducts' element={<Products />} />
          <Route path='basket' element={<BasketProducts />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='user/*' element={<Profile />}>
            <Route path='myProfile' element={<ProfileData />} />
            <Route path='myDiscount' element={<ProfileDiscount />} />
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
          <Route path="women'sclothing/T-shirts/:id" element={<CardItem />} />
          <Route path="women'sclothing/jackets/:id" element={<CardItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
