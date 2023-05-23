import "./App.css";
import Mockman from "mockman-js";
import {Routes,Route} from "react-router-dom";
import Navigation from "./component/Navbar/Navigation";
import "./App.css"
import Slidebar from "./component/Slidebar/Slide";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman/>}></Route>
      </Routes>
      <Navigation/>
      <Slidebar/>
    </div>
  );
}

export default App;
