import "./App.css";
import Mockman from "mockman-js";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hair-Heaven</h1>
      <Routes>
        <Route path="/mockman" element={<Mockman/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
