import "./App.css";
import Mockman from "mockman-js";
import {Routes,Route} from "react-router-dom";
import Navigation from "./component/Navbar/Navigation";
import "./App.css"
// import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman/>}></Route>
      </Routes>
      <Navigation/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
