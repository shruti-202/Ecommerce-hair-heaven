import "./App.css";
import Mockman from "mockman-js";
import "./App.css"
import {Routes,Route} from "react-router-dom";
import Navigation from "./component/Navbar/Navigation";
import Slider from "./component/Slidebar/Slider";
import BestProduct from "./component/Product/BestProduct";
import Footer from "./component/Footer/Footer";
import ProductList from "./component/Product/ProductList"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman/>}></Route>
      </Routes>
      <Navigation/>
      <Slider/>
      <BestProduct/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
