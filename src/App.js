import './App.css';
import Header from "./companents/Header";
import {Route, Routes} from "react-router-dom";
import Product from "./companents/Product";
import Basket from "./companents/Basket";
import Favorite from "./companents/Favorite";
import ProductDetails from "./companents/Product/ProductDetails";

function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path={'/'} element={<Product/>}/>
        <Route path={'/basket'} element={<Basket/>}/>
        <Route path={'/favorite'} element={<Favorite/>}/>
        <Route path={'/product/details/:id'} element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
