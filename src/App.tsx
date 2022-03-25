import { Provider } from 'react-redux'
import './App.css'
import { RootRouter } from './navigation/RootRouter'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <RootRouter />
      </div>
    </Provider>
  )
}

export default App
