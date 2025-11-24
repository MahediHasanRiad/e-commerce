import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Header from "./Components/home/header";
import Footer from "./Components/home/footer";
import Products from "./Pages/products";
import ProductDetails from "./Pages/produce-details";
import CheckOut from "./Pages/checkOut";
import Profile from "./Pages/Information/profile";


function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/products/:id"} element={<ProductDetails />} />
        <Route path={"/checkout"} element={<CheckOut />} />

        <Route path={"/user/profile"} element={<Profile />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
