import Cart from "./components/Cart/Cart"
import Products from "./components/Products"
import TheHeader from "./components/TheHeader"
import Provider from "./context/Provider"

function App() {

  return (
    <Provider>
       <TheHeader />
       <Products />
       <Cart />
    </Provider>
  )
}

export default App
