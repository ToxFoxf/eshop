import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Home from "./pages/Home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import Help from "./pages/help";
import Product_list from "./pages/Product_list";
import Personal_account from "./pages/Personal_account";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/basket" element={<Basket/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/productlist" element={<Product_list/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/user_acc" element={<Personal_account/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
