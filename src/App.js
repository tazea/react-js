import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavBar />
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                Landing
              </Route>
              <Route path="/products" exact>
                <ItemListContainer/>
              </Route>
              <Route path="/product/:productId" exact>
                <ItemDetailContainer/>
              </Route>
              <Route path="/support" exact></Route>
              <Route path="/cart" exact></Route>
            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}
export default App;
