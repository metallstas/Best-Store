import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CardItem } from '../components/CradItem/CardItem'
import { Header } from '../components/Header/Header'
import {Main} from '../components/Main/Main'
import { Products } from '../components/Products/Products'
import { ProductSubmenu } from '../components/Products/ProductSubmenu/ProductSubmenu'
import { IState } from '../redux/store'

export const RootRouter = () => {
  const products = ((state: IState) => state.productsCategoryReducer.products)
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/searchText' exact>
          <Products />
        </Route>
        <Route path='/electronics' exact>
          <Products category='electronics' />
        </Route>
        <Route path='/jewelery' exact>
          <Products category='jewelery'/>
        </Route>
        <Route path="/men's clothing" exact>
          <Products category="men's clothing"/>
        </Route>
        <Route path="/women's clothing" exact>
          <Products category="women's clothing"/>
        </Route>
        <Route path='/electronics/hdd/:id' exact>
          <CardItem />
        </Route>
         <Route path='/electronics/hdd' exact>
          <ProductSubmenu category='electronics' textSubmenu='hdd' />
        </Route>
        <Route path='/electronics/ssd' exact>
          <ProductSubmenu category='electronics' textSubmenu='ssd' />
        </Route>
        <Route path='/electronics/tv' exact>
          <ProductSubmenu category='electronics' textSubmenu='tv' />
        </Route>
        <Route path='/jewelery/rings' exact>
          <ProductSubmenu category='jewelery' textSubmenu='rings' />
        </Route>
        <Route path='/jewelery/bracelets' exact>
          <ProductSubmenu category='jewelery' textSubmenu='bracelet' />
        </Route>
        <Route path="/men's clothing/T-shirts" exact>
          <ProductSubmenu category="men's clothing" textSubmenu='T-shirts' />
        </Route>
        <Route path="/men's clothing/jackets" exact>
          <ProductSubmenu category="men's clothing" textSubmenu='jackets' />
        </Route>
        <Route path="/men's clothing/bags" exact>
          <ProductSubmenu category="men's clothing" textSubmenu='bags' />
        </Route>
        <Route path="/women's clothing/T-shirts" exact>
          <ProductSubmenu category="women's clothing" textSubmenu='T-shirts' />
        </Route>
        <Route path="/women's clothing/jackets" exact>
          <ProductSubmenu category="women's clothing" textSubmenu='jackets' />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
