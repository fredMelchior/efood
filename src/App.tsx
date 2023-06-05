import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import Footer from './components/Footer'
import { GlobalStyle } from './styles'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
