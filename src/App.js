import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import Navigation from "./component/Navbar/Navigation";
import Product from "./pages/Product/Product";
import Landing from "./landing/Landing";
import NotFound from "./pages/404/404";
import Help from "./pages/Help/Help";
import Reviews from "./pages/Reviews/Reviews";
import Trial from "./pages/Trial/Trial";
import Signin from "./pages/Auth/Signin/Signin";
import Signup from "./pages/Auth/Signup/Signup";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/shop" element={<Product />} />
        <Route path="/helpme" element={<Help />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/explore" element={<Product />} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </div>
  );
}

export default App;
