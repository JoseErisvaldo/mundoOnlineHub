import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Products from "./Pages/Products";
import Members from "./Pages/Members";
import Marketplace from "./Pages/Marketplace";



export default function RoutesApp () {
  return(
    <BrowserRouter>

      <Header/>
      <div className="flex">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/produtos" element={<Products/>} />
          <Route path="/membros" element={<Members/>} />
          <Route path="/marketplace" element={<Marketplace/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}