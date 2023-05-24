import "./App.css";
import Mockman from "mockman-js";
import "./App.css"
import {Routes,Route} from "react-router-dom";
import Navigation from "./component/Navbar/Navigation";
import Slide from "./component/Slidebar/Slide";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman/>}></Route>
      </Routes>
      <Navigation/>
      <Slide/>
      <Footer/>
    </div>
  );
}

export default App;
