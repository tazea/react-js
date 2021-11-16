import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContextProvider from "./components/CartContext";
import Cart from "./components/Cart";
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
                <Route path="/" exact>
                  Landing
                </Route>
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
