import "./App.css";
import Mockman from "mockman-js";
import "./App.css"
import {Routes,Route} from "react-router-dom";
import Navigation from "./component/Navbar/Navigation";
import Slider from "./component/Slidebar/Slider";
import TopCategory from "./component/Header/TopCategory";
import Footer from "./component/Footer/Footer";
import ProductList from "./component/Header/ProductList"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman/>}></Route>
      </Routes>
      <Navigation/>
      <Slider/>
      <TopCategory/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
