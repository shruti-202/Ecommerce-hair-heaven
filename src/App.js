import "./App.css";
import Mockman from "mockman-js";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>HairHeaven</h1>
      <p>Here you will get different types of hair extensions and wigs</p>
      <Routes>
        <Route path="/mockman" element={<Mockman/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
