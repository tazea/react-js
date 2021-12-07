import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContextProvider from "./Components/CartContext/CartContext";
import LandingPage from "./Components/LandingPage/LandingPage"
import Cart from "./Components/Cart/Cart";
import "../src/styles/app.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <CartContextProvider>
            <BrowserRouter>
              <NavBar />
              <Switch>
                <Route path="/" exact component={LandingPage}></Route>
                <Route path="/product/:productId" exact component={ItemDetailContainer}></Route>
                <Route path="/category/:categoryId" exact component={ItemListContainer}></Route>
                <Route path="/support" exact></Route>
                <Route path="/cart" exact component={Cart}></Route>
              </Switch>
            </BrowserRouter>
          </CartContextProvider>
        </div>
      </header>
    </div>
  );
}
export default App;
