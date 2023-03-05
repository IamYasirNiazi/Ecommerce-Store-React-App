import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProductDetails from "./Pages/ProductDetails";
import Shop from "./Pages/Shop";
import Signup from "./Pages/Signup";

function App() {
  return <>
          <BrowserRouter>
  
            <Header />
            
            <Routes>
              <Route path="/" element={<Navigate to='/home'/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/shop" element={<Shop/>} />
              <Route path="/shop/:id" element={<ProductDetails/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
            </Routes>

            <Footer />

            </BrowserRouter>
        </>;
}

export default App;
